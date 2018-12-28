import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ActionSheetController, Platform } from '@ionic/angular';
import { __awaiter } from 'tslib';
import { Injectable, NgModule, APP_INITIALIZER } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Environment {
    /**
     * @param {?} http
     * @param {?} storage
     * @param {?} actionSheetCtrl
     * @param {?} platform
     */
    constructor(http, storage, actionSheetCtrl, platform) {
        this.http = http;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.JSON_PATH = 'assets/environments.json';
        this.SELECTED_ENVIRONMENT_KEY = 'selectedEnvironmentKey';
        this.isInitializing = false;
        this.readyPromiseResolve = [];
        this.readyPromiseReject = [];
    }
    /**
     * @return {?}
     */
    static config() {
        if (!Environment.isReady) {
            console.error(`Environment config is not ready (wait for Environment.ready())`);
        }
        return Environment.environmentConfig;
    }
    /**
     * @return {?}
     */
    ready() {
        if (Environment.isReady) {
            return Promise.resolve();
        }
        if (!this.isInitializing) {
            this.isInitializing = true;
            this.initEnvs();
        }
        return new Promise((resolve, reject) => {
            this.readyPromiseResolve.push(resolve);
            this.readyPromiseReject.push(reject);
        });
    }
    /**
     * @private
     * @return {?}
     */
    initEnvs() {
        this.http.get(this.JSON_PATH).subscribe(json => {
            if (json == null || Object.keys(json).length === 0) {
                this.readyPromiseReject.forEach((reject) => reject());
                console.error(`EnvironmentService fails: '${this.JSON_PATH}' is empty or invalid`);
                return;
            }
            /** @type {?} */
            const environments = Object.keys(json).filter(environment => environment !== 'default');
            if (environments == null || environments.length === 0) {
                this.setEnv(false, 'default', json['default']);
            }
            else {
                this.storage.ready().then(() => {
                    this.storage.get(this.SELECTED_ENVIRONMENT_KEY).then(storedEnvironment => {
                        if (storedEnvironment == null) {
                            if (environments.length > 1) {
                                console.log('No saved environment detected, will prompt user for selection');
                                this.showEnvironmentActionSheet(environments, json);
                            }
                            else {
                                /** @type {?} */
                                const environment = environments[0];
                                this.setEnv(true, environment, json['default'], json[environment]);
                            }
                        }
                        else {
                            console.log(`Detected saved environment: ${storedEnvironment}`);
                            this.setEnv(false, storedEnvironment, json['default'], json[storedEnvironment]);
                        }
                    });
                });
            }
        }, err => {
            console.log(err);
            console.error(`EnvironmentService fails: Not found '${this.JSON_PATH}'`);
            this.readyPromiseReject.forEach((reject) => reject());
        });
    }
    /**
     * @private
     * @param {?} save
     * @param {?} environmentKey
     * @param {?} configBase
     * @param {?=} configEnvironment
     * @return {?}
     */
    setEnv(save, environmentKey, configBase, configEnvironment) {
        console.log(`Applying environment: ${environmentKey}`);
        Environment.environmentConfig = configBase;
        if (configEnvironment != null) {
            Environment.environmentConfig = Object.assign({}, configBase, configEnvironment);
        }
        if (save) {
            console.log(`Saving environment: ${environmentKey}`);
            this.storage.set(this.SELECTED_ENVIRONMENT_KEY, environmentKey);
        }
        Environment.isReady = true;
        this.readyPromiseResolve.forEach((resolve) => resolve());
    }
    /**
     * @private
     * @param {?} environments
     * @param {?} configs
     * @return {?}
     */
    showEnvironmentActionSheet(environments, configs) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.platform.ready();
            /** @type {?} */
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Select environment',
                backdropDismiss: false,
                buttons: environments.map(environment => ({
                    text: environment,
                    handler: () => {
                        this.setEnv(true, environment, configs['default'], configs[environment]);
                    }
                }))
            });
            actionSheet.present();
        });
    }
}
Environment.isReady = false;
Environment.environmentConfig = {};
Environment.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Environment.ctorParameters = () => [
    { type: HttpClient },
    { type: Storage },
    { type: ActionSheetController },
    { type: Platform }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
class OkodeNgxCommonModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: OkodeNgxCommonModule,
            providers: [
                Environment,
                { provide: APP_INITIALIZER, useFactory: envInitializer, deps: [Environment], multi: true },
            ]
        };
    }
}
OkodeNgxCommonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [],
                exports: []
            },] }
];
/**
 * @param {?} environment
 * @return {?}
 */
function envInitializer(environment) {
    return () => __awaiter(this, void 0, void 0, function* () {
        yield environment.ready();
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { Environment, envInitializer, OkodeNgxCommonModule };

//# sourceMappingURL=okode-ngx-common.js.map