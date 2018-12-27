import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ActionSheetController, Platform } from '@ionic/angular';
export declare class Environment {
    private http;
    private storage;
    private actionSheetCtrl;
    private platform;
    private static isReady;
    private static environmentConfig;
    private readonly JSON_PATH;
    private readonly SELECTED_ENVIRONMENT_KEY;
    private isInitializing;
    private readyPromiseResolve;
    private readyPromiseReject;
    constructor(http: HttpClient, storage: Storage, actionSheetCtrl: ActionSheetController, platform: Platform);
    static config(): any;
    ready(): Promise<void>;
    private initEnvs;
    private setEnv;
    private showEnvironmentActionSheet;
}
