/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ActionSheetController, Platform } from '@ionic/angular';
export class Environment {
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.readyPromiseResolve.push(resolve);
            this.readyPromiseReject.push(reject);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    initEnvs() {
        this.http.get(this.JSON_PATH).subscribe((/**
         * @param {?} json
         * @return {?}
         */
        json => {
            if (json == null || Object.keys(json).length === 0) {
                this.readyPromiseReject.forEach((/**
                 * @param {?} reject
                 * @return {?}
                 */
                (reject) => reject()));
                console.error(`EnvironmentService fails: '${this.JSON_PATH}' is empty or invalid`);
                return;
            }
            /** @type {?} */
            const environments = Object.keys(json).filter((/**
             * @param {?} environment
             * @return {?}
             */
            environment => environment !== 'default'));
            if (environments == null || environments.length === 0) {
                this.setEnv(false, 'default', json['default']);
            }
            else {
                this.storage.ready().then((/**
                 * @return {?}
                 */
                () => {
                    this.storage.get(this.SELECTED_ENVIRONMENT_KEY).then((/**
                     * @param {?} storedEnvironment
                     * @return {?}
                     */
                    storedEnvironment => {
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
                    }));
                }));
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        err => {
            console.log(err);
            console.error(`EnvironmentService fails: Not found '${this.JSON_PATH}'`);
            this.readyPromiseReject.forEach((/**
             * @param {?} reject
             * @return {?}
             */
            (reject) => reject()));
        }));
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
        this.readyPromiseResolve.forEach((/**
         * @param {?} resolve
         * @return {?}
         */
        (resolve) => resolve()));
    }
    /**
     * @private
     * @param {?} environments
     * @param {?} configs
     * @return {?}
     */
    showEnvironmentActionSheet(environments, configs) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.platform.ready();
            /** @type {?} */
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Select environment',
                backdropDismiss: false,
                buttons: environments.map((/**
                 * @param {?} environment
                 * @return {?}
                 */
                environment => ({
                    text: environment,
                    handler: (/**
                     * @return {?}
                     */
                    () => {
                        this.setEnv(true, environment, configs['default'], configs[environment]);
                    })
                })))
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    Environment.isReady;
    /**
     * @type {?}
     * @private
     */
    Environment.environmentConfig;
    /**
     * @type {?}
     * @private
     */
    Environment.prototype.JSON_PATH;
    /**
     * @type {?}
     * @private
     */
    Environment.prototype.SELECTED_ENVIRONMENT_KEY;
    /**
     * @type {?}
     * @private
     */
    Environment.prototype.isInitializing;
    /**
     * @type {?}
     * @private
     */
    Environment.prototype.readyPromiseResolve;
    /**
     * @type {?}
     * @private
     */
    Environment.prototype.readyPromiseReject;
    /**
     * @type {?}
     * @private
     */
    Environment.prototype.http;
    /**
     * @type {?}
     * @private
     */
    Environment.prototype.storage;
    /**
     * @type {?}
     * @private
     */
    Environment.prototype.actionSheetCtrl;
    /**
     * @type {?}
     * @private
     */
    Environment.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Vudmlyb25tZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2pFLE1BQU0sT0FBTyxXQUFXOzs7Ozs7O0lBV3RCLFlBQ1UsSUFBZ0IsRUFDaEIsT0FBZ0IsRUFDaEIsZUFBc0MsRUFDdEMsUUFBa0I7UUFIbEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBVlgsY0FBUyxHQUFHLDBCQUEwQixDQUFDO1FBQ3ZDLDZCQUF3QixHQUFHLHdCQUF3QixDQUFDO1FBQzdELG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLHdCQUFtQixHQUFtRCxFQUFFLENBQUM7UUFDekUsdUJBQWtCLEdBQStCLEVBQUUsQ0FBQztJQU96RCxDQUFDOzs7O0lBRUosTUFBTSxDQUFDLE1BQU07UUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUN4QixPQUFPLENBQUMsS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7U0FDakY7UUFDRCxPQUFPLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUFFLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFD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b0JBQ2pCLE9BQU87OztvQkFBRSxHQUFHLEVBQUU7d0JBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDM0UsQ0FBQyxDQUFBO2lCQUNGLENBQUMsRUFBQzthQUNKLENBQUM7WUFDRixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEIsQ0FBQztLQUFBOztBQWpHYyxtQkFBTyxHQUFHLEtBQUssQ0FBQztBQUNoQiw2QkFBaUIsR0FBUSxFQUFFLENBQUM7O1lBSjVDLFVBQVU7Ozs7WUFKRixVQUFVO1lBQ1YsT0FBTztZQUNQLHFCQUFxQjtZQUFFLFFBQVE7Ozs7Ozs7SUFLdEMsb0JBQStCOzs7OztJQUMvQiw4QkFBMkM7Ozs7O0lBRTNDLGdDQUF3RDs7Ozs7SUFDeEQsK0NBQXFFOzs7OztJQUNyRSxxQ0FBK0I7Ozs7O0lBQy9CLDBDQUFpRjs7Ozs7SUFDakYseUNBQTREOzs7OztJQUcxRCwyQkFBd0I7Ozs7O0lBQ3hCLDhCQUF3Qjs7Ozs7SUFDeEIsc0NBQThDOzs7OztJQUM5QywrQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IEFjdGlvblNoZWV0Q29udHJvbGxlciwgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgaXNSZWFkeSA9IGZhbHNlO1xuICBwcml2YXRlIHN0YXRpYyBlbnZpcm9ubWVudENvbmZpZzogYW55ID0ge307XG5cbiAgcHJpdmF0ZSByZWFkb25seSBKU09OX1BBVEggPSAnYXNzZXRzL2Vudmlyb25tZW50cy5qc29uJztcbiAgcHJpdmF0ZSByZWFkb25seSBTRUxFQ1RFRF9FTlZJUk9OTUVOVF9LRVkgPSAnc2VsZWN0ZWRFbnZpcm9ubWVudEtleSc7XG4gIHByaXZhdGUgaXNJbml0aWFsaXppbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZWFkeVByb21pc2VSZXNvbHZlOiAoKHZhbHVlPzogdm9pZCB8IFByb21pc2VMaWtlPHZvaWQ+KSA9PiB2b2lkKVtdID0gW107XG4gIHByaXZhdGUgcmVhZHlQcm9taXNlUmVqZWN0OiAoKHJlYXNvbj86IGFueSkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsXG4gICAgcHJpdmF0ZSBhY3Rpb25TaGVldEN0cmw6IEFjdGlvblNoZWV0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHt9XG5cbiAgc3RhdGljIGNvbmZpZygpIHtcbiAgICBpZiAoIUVudmlyb25tZW50LmlzUmVhZHkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVudmlyb25tZW50IGNvbmZpZyBpcyBub3QgcmVhZHkgKHdhaXQgZm9yIEVudmlyb25tZW50LnJlYWR5KCkpYCk7XG4gICAgfVxuICAgIHJldHVybiBFbnZpcm9ubWVudC5lbnZpcm9ubWVudENvbmZpZztcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIGlmIChFbnZpcm9ubWVudC5pc1JlYWR5KSB7wqByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IH1cbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXppbmcpIHtcbiAgICAgIHRoaXMuaXNJbml0aWFsaXppbmcgPSB0cnVlO1xuICAgICAgdGhpcy5pbml0RW52cygpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5yZWFkeVByb21pc2VSZXNvbHZlLnB1c2gocmVzb2x2ZSk7XG4gICAgICB0aGlzLnJlYWR5UHJvbWlzZVJlamVjdC5wdXNoKHJlamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRFbnZzKCkge1xuICAgIHRoaXMuaHR0cC5nZXQodGhpcy5KU09OX1BBVEgpLnN1YnNjcmliZShqc29uID0+IHtcbiAgICAgIGlmIChqc29uID09IG51bGwgfHwgT2JqZWN0LmtleXMoanNvbikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucmVhZHlQcm9taXNlUmVqZWN0LmZvckVhY2goKHJlamVjdCkgPT4gcmVqZWN0KCkpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFbnZpcm9ubWVudFNlcnZpY2UgZmFpbHM6ICcke3RoaXMuSlNPTl9QQVRIfScgaXMgZW1wdHkgb3IgaW52YWxpZGApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBlbnZpcm9ubWVudHMgPSBPYmplY3Qua2V5cyhqc29uKS5maWx0ZXIoZW52aXJvbm1lbnQgPT4gZW52aXJvbm1lbnQgIT09ICdkZWZhdWx0Jyk7XG4gICAgICBpZiAoZW52aXJvbm1lbnRzID09IG51bGwgfHwgZW52aXJvbm1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnNldEVudihmYWxzZSwgJ2RlZmF1bHQnLCBqc29uWydkZWZhdWx0J10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldCh0aGlzLlNFTEVDVEVEX0VOVklST05NRU5UX0tFWSkudGhlbihzdG9yZWRFbnZpcm9ubWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoc3RvcmVkRW52aXJvbm1lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICBpZiAoZW52aXJvbm1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gc2F2ZWQgZW52aXJvbm1lbnQgZGV0ZWN0ZWQsIHdpbGwgcHJvbXB0IHVzZXIgZm9yIHNlbGVjdGlvbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vudmlyb25tZW50QWN0aW9uU2hlZXQoZW52aXJvbm1lbnRzLCBqc29uKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnZpcm9ubWVudCA9IGVudmlyb25tZW50c1swXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVudih0cnVlLCBlbnZpcm9ubWVudCwganNvblsnZGVmYXVsdCddLCBqc29uW2Vudmlyb25tZW50XSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEZXRlY3RlZCBzYXZlZCBlbnZpcm9ubWVudDogJHtzdG9yZWRFbnZpcm9ubWVudH1gKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRFbnYoZmFsc2UsIHN0b3JlZEVudmlyb25tZW50LCBqc29uWydkZWZhdWx0J10sIGpzb25bc3RvcmVkRW52aXJvbm1lbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBjb25zb2xlLmVycm9yKGBFbnZpcm9ubWVudFNlcnZpY2UgZmFpbHM6IE5vdCBmb3VuZCAnJHt0aGlzLkpTT05fUEFUSH0nYCk7XG4gICAgICB0aGlzLnJlYWR5UHJvbWlzZVJlamVjdC5mb3JFYWNoKChyZWplY3QpID0+IHJlamVjdCgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RW52KHNhdmU6IGJvb2xlYW4sIGVudmlyb25tZW50S2V5OiBzdHJpbmcsIGNvbmZpZ0Jhc2U6IGFueSwgY29uZmlnRW52aXJvbm1lbnQ/OiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhgQXBwbHlpbmcgZW52aXJvbm1lbnQ6ICR7ZW52aXJvbm1lbnRLZXl9YCk7XG4gICAgRW52aXJvbm1lbnQuZW52aXJvbm1lbnRDb25maWcgPSBjb25maWdCYXNlO1xuICAgIGlmIChjb25maWdFbnZpcm9ubWVudCAhPSBudWxsKSB7XG4gICAgICBFbnZpcm9ubWVudC5lbnZpcm9ubWVudENvbmZpZyA9IHvCoC4uLmNvbmZpZ0Jhc2UsIC4uLmNvbmZpZ0Vudmlyb25tZW50IH07XG4gICAgfVxuICAgIGlmIChzYXZlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgU2F2aW5nIGVudmlyb25tZW50OiAke2Vudmlyb25tZW50S2V5fWApO1xuICAgICAgdGhpcy5zdG9yYWdlLnNldCh0aGlzLlNFTEVDVEVEX0VOVklST05NRU5UX0tFWSwgZW52aXJvbm1lbnRLZXkpO1xuICAgIH1cbiAgICBFbnZpcm9ubWVudC5pc1JlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLnJlYWR5UHJvbWlzZVJlc29sdmUuZm9yRWFjaCgocmVzb2x2ZSkgPT4gcmVzb2x2ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2hvd0Vudmlyb25tZW50QWN0aW9uU2hlZXQoZW52aXJvbm1lbnRzOiBzdHJpbmdbXSwgY29uZmlnczogYW55KSB7XG4gICAgYXdhaXQgdGhpcy5wbGF0Zm9ybS5yZWFkeSgpO1xuICAgIGNvbnN0IGFjdGlvblNoZWV0ID0gYXdhaXQgdGhpcy5hY3Rpb25TaGVldEN0cmwuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogJ1NlbGVjdCBlbnZpcm9ubWVudCcsXG4gICAgICBiYWNrZHJvcERpc21pc3M6IGZhbHNlLFxuICAgICAgYnV0dG9uczogZW52aXJvbm1lbnRzLm1hcChlbnZpcm9ubWVudCA9PiAoe1xuICAgICAgICB0ZXh0OiBlbnZpcm9ubWVudCxcbiAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0RW52KHRydWUsIGVudmlyb25tZW50LCBjb25maWdzWydkZWZhdWx0J10sIGNvbmZpZ3NbZW52aXJvbm1lbnRdKTtcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgfSk7XG4gICAgYWN0aW9uU2hlZXQucHJlc2VudCgpO1xuICB9XG5cbn1cbiJdfQ==