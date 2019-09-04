import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Device } from '@ionic-native/device/ngx';
import { Storage } from '@ionic/storage';
import { timeout } from 'rxjs/operators';
import { Platform } from '@ionic/angular';

@Injectable()
export class MMobileService {

  private static readonly INITIAL_CONFIG_PATH = 'assets/config/mmobileInitialConfig.json';
  private static readonly LAST_UPDATED_KEY    = 'MMOBILE_lastUpdated';
  private static readonly MMOBILE_CONFIG      = 'MMOBILE_config';

  private baseUrl: string;
  private appName: string;
  private version: string;
  private jwtConfigName: string;
  private timeoutMillis: number;
  private config: any;

  constructor(
    private http: HttpClient,
    private device: Device,
    private storage: Storage,
    private platform: Platform
  ) { }

  init(baseUrl: string, appName: string, version: string, jwtConfigName?: string, timeoutMillis?: number) {
    this.printLog('Initializing MMobile');
    return new Promise<boolean>(async (resolve, reject) => {
      this.baseUrl = baseUrl;
      this.appName = appName;
      this.version = version;
      this.jwtConfigName = jwtConfigName;
      this.timeoutMillis = timeoutMillis;

      if (this.platform.is('cordova')) {
        this.prepareLogs();
      }

      const url = `${baseUrl}/config/${appName}/${version}`;
      let headers = new HttpHeaders();
      headers = headers.append('Content-Type', 'application/json');

      let request = this.http.get(`${url}?ts=${new Date().getMilliseconds()}`, { headers });

      if (timeoutMillis) {
        request = request.pipe(timeout(timeoutMillis));
      }

      await this.storage.ready();

      this.printLog(`Retrieving MMobile config: ${url}`);
      request.subscribe(async (result) => {
          this.printLog(`MMobile config retrieved successfully`);
          this.config = result;

          await this.storage.set(MMobileService.MMOBILE_CONFIG, this.config);
          await this.storage.set(MMobileService.LAST_UPDATED_KEY, new Date());

          resolve(true);

        }, (async (error) => {

          this.printLog(`Error downloading MMobile config from: ${url}`);
          const config = await this.storage.get(MMobileService.MMOBILE_CONFIG);
          if (config != null) {
            this.printLog('Using MMobile config from local storage');
            this.config = config;
            resolve(false);
          } else {
            this.printLog('MMobile config not detected in local storage, retrieving from assets (app bundled version)');
            this.http.get(MMobileService.INITIAL_CONFIG_PATH).subscribe(async (result) => {
                this.printLog('Using MMobile config from assets (app bundled)');
                this.config = result;
                const lastUpdatedDate = await this.storage.get(MMobileService.LAST_UPDATED_KEY);
                if (lastUpdatedDate == null) {
                  await this.storage.set(MMobileService.LAST_UPDATED_KEY, new Date());
                }
                resolve(false);
              }, (errorInitialConfig) => {
                this.printLog(`Error loading MMobile initial config from assets (app bundled). Reason: ${JSON.stringify(errorInitialConfig)}`);
                reject();
              });
          }

        }));
    });
  }

  reloadConfig() {
    this.checkIfIsInitialized();
    return this.init(this.baseUrl, this.appName, this.version, this.jwtConfigName, this.timeoutMillis);
  }

  getCustomConfig() {
    this.checkIfIsInitialized();
    return this.config.customConfig;
  }

  getVersion() {
    return this.version;
  }

  getTimeout() {
    this.checkIfIsInitialized();
    return this.config.timeout;
  }

  isActive() {
    this.checkIfIsInitialized();
    return this.config.active;
  }

  getFeatures() {
    this.checkIfIsInitialized();
    return this.config.features;
  }

  isDeviceLocked() {
    this.checkIfIsInitialized();

    const mobileLockInfo = this.config.lockingConfig;
    if (mobileLockInfo == null || !mobileLockInfo.active) {
      return false;
    }

    const deviceVersion = this.device.version;
    const deviceModel = this.device.model;
    const devicePlatform = this.device.platform;

    let deviceMatched = false;
    mobileLockInfo.devices.forEach((deviceLockInfo: any) => {
      if (deviceMatched) {
        return;
      }

      let modelMatch = true;
      let versionMatch = true;
      let platformMatch = true;

      // Matching model
      if (deviceLockInfo.model != null) {
        const re = new RegExp(deviceLockInfo.model, 'i');
        modelMatch = re.test(deviceModel);
      }

      // Matching version
      if (deviceLockInfo.version != null) {
        const re = new RegExp(deviceLockInfo.version, 'i');
        versionMatch = re.test(deviceVersion);
      }

      // Matching platform
      if (deviceLockInfo.platform != null) {
        const re = new RegExp(deviceLockInfo.platform, 'i');
        platformMatch = re.test(devicePlatform);
      }

      if (modelMatch && platformMatch && versionMatch) {
        deviceMatched = true;
      }
    });

    if (mobileLockInfo.mode === 'WHITELIST') {
      return !deviceMatched;
    } else {
      return deviceMatched;
    }
  }

  async getLastUpdatedDate() {
    this.checkIfIsInitialized();
    await this.storage.ready();
    return new Date(await this.storage.get(MMobileService.LAST_UPDATED_KEY));
  }

  async writeLog(log: string) {
    console.log('Write log disabled (not implemented)');
  }

  private processLogs() {
    console.log('Process logs disabled (not implemented)');
  }

  sendLogs(deviceName: string) {
    console.log('Send logs disabled (not implemented)');
  }

  isLogsEnabled() {
    console.log('isLogsEnabled disabled (not implemented)');
    return false;
  }

  getServiceUrl(key: string) {
    this.checkIfIsInitialized();
    const service = this.config.services[key];
    if (service != null) {
      if (!service.mediated) {
        return service.path;
      }
      return (`${this.baseUrl}${service.prefix}/${this.appName}/${this.version}/${key}`);
    } else {
      this.printLog(`Service was not found: ${key}`);
      return null;
    }
  }

  getJwtLoginUrl() {
    this.checkIfIsInitialized();
    if (this.jwtConfigName) {
      return `${this.baseUrl}/jwt/login/${this.appName}/${this.version}/${this.jwtConfigName}`;
    } else {
      this.printLog(`jwtConfigName service is not enabled`);
      return null;
    }
  }

  getJwtRefreshUrl() {
    this.checkIfIsInitialized();
    if (this.jwtConfigName) {
      return `${this.baseUrl}/jwt/refresh/${this.appName}/${this.version}/${this.jwtConfigName}`;
    } else {
      this.printLog(`jwtConfigName service is not enabled`);
      return null;
    }
  }

  isInitialized() {
    return this.config != null;
  }

  private prepareLogs() {
    console.log('Prepare logs disabled (not implemented)');
  }

  private getFormattedDateWithHour() {
    const now = new Date();
    const dd = ('0' + now.getDate()).slice(-2);
    const MM = ('0' + (now.getMonth() + 1)).slice(-2);
    const yyyy = now.getFullYear();
    const hh = ('0' + now.getHours()).slice(-2);
    const mm = ('0' + now.getMinutes()).slice(-2);
    const ss = ('0' + now.getSeconds()).slice(-2);

    return `${dd}/${MM}/${yyyy} ${hh}:${mm}:${ss}`;
  }

  private getLogsFileName() {
    const now = new Date();
    const dd = ('0' + now.getDate()).slice(-2);
    const MM = ('0' + (now.getMonth() + 1)).slice(-2);
    const yyyy = now.getFullYear();

    return `log${dd}${MM}${yyyy}.txt`;
  }

  private jsonToURLEncoded(json: {}) {
    return Object.keys(json).map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(json[key])).join('&');
  }

  private checkIfIsInitialized() {
    if (this.config == null) {
      throw ({ message: 'MMobile is not initialized', needsRestartApp: true });
    }
  }

  private printLog(message?: any, ...optionalParams: any[]) {
    console.log(message, optionalParams);
  }

}
