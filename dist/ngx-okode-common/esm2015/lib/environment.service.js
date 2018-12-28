/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1va29kZS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZW52aXJvbm1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHakUsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7SUFXdEIsWUFDVSxJQUFnQixFQUNoQixPQUFnQixFQUNoQixlQUFzQyxFQUN0QyxRQUFrQjtRQUhsQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsb0JBQWUsR0FBZixlQUFlLENBQXVCO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFWWCxjQUFTLEdBQUcsMEJBQTBCLENBQUM7UUFDdkMsNkJBQXdCLEdBQUcsd0JBQXdCLENBQUM7UUFDN0QsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsd0JBQW1CLEdBQW1ELEVBQUUsQ0FBQztRQUN6RSx1QkFBa0IsR0FBK0IsRUFBRSxDQUFDO0lBT3pELENBQUM7Ozs7SUFFSixNQUFNLENBQUMsTUFBTTtRQUNYLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0VBQWdFLENBQUMsQ0FBQztTQUNqRjtRQUNELE9BQU8sV0FBVyxDQUFDLGlCQUFpQixDQUFDO0lBQ3ZDLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7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QUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQzNFLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO2FBQ0osQ0FBQztZQUNGLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixDQUFDO0tBQUE7O0FBakdjLG1CQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ2hCLDZCQUFpQixHQUFRLEVBQUUsQ0FBQzs7WUFKNUMsVUFBVTs7OztZQUpGLFVBQVU7WUFDVixPQUFPO1lBQ1AscUJBQXFCO1lBQUUsUUFBUTs7Ozs7OztJQUt0QyxvQkFBK0I7Ozs7O0lBQy9CLDhCQUEyQzs7Ozs7SUFFM0MsZ0NBQXdEOzs7OztJQUN4RCwrQ0FBcUU7Ozs7O0lBQ3JFLHFDQUErQjs7Ozs7SUFDL0IsMENBQWlGOzs7OztJQUNqRix5Q0FBNEQ7Ozs7O0lBRzFELDJCQUF3Qjs7Ozs7SUFDeEIsOEJBQXdCOzs7OztJQUN4QixzQ0FBOEM7Ozs7O0lBQzlDLCtCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQWN0aW9uU2hlZXRDb250cm9sbGVyLCBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblxuICBwcml2YXRlIHN0YXRpYyBpc1JlYWR5ID0gZmFsc2U7XG4gIHByaXZhdGUgc3RhdGljIGVudmlyb25tZW50Q29uZmlnOiBhbnkgPSB7fTtcblxuICBwcml2YXRlIHJlYWRvbmx5IEpTT05fUEFUSCA9ICdhc3NldHMvZW52aXJvbm1lbnRzLmpzb24nO1xuICBwcml2YXRlIHJlYWRvbmx5IFNFTEVDVEVEX0VOVklST05NRU5UX0tFWSA9ICdzZWxlY3RlZEVudmlyb25tZW50S2V5JztcbiAgcHJpdmF0ZSBpc0luaXRpYWxpemluZyA9IGZhbHNlO1xuICBwcml2YXRlIHJlYWR5UHJvbWlzZVJlc29sdmU6ICgodmFsdWU/OiB2b2lkIHwgUHJvbWlzZUxpa2U8dm9pZD4pID0+IHZvaWQpW10gPSBbXTtcbiAgcHJpdmF0ZSByZWFkeVByb21pc2VSZWplY3Q6ICgocmVhc29uPzogYW55KSA9PiB2b2lkKVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSxcbiAgICBwcml2YXRlIGFjdGlvblNoZWV0Q3RybDogQWN0aW9uU2hlZXRDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge31cblxuICBzdGF0aWMgY29uZmlnKCkge1xuICAgIGlmICghRW52aXJvbm1lbnQuaXNSZWFkeSkge1xuICAgICAgY29uc29sZS5lcnJvcihgRW52aXJvbm1lbnQgY29uZmlnIGlzIG5vdCByZWFkeSAod2FpdCBmb3IgRW52aXJvbm1lbnQucmVhZHkoKSlgKTtcbiAgICB9XG4gICAgcmV0dXJuIEVudmlyb25tZW50LmVudmlyb25tZW50Q29uZmlnO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgaWYgKEVudmlyb25tZW50LmlzUmVhZHkpIHvCoHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfVxuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemluZykge1xuICAgICAgdGhpcy5pc0luaXRpYWxpemluZyA9IHRydWU7XG4gICAgICB0aGlzLmluaXRFbnZzKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnJlYWR5UHJvbWlzZVJlc29sdmUucHVzaChyZXNvbHZlKTtcbiAgICAgIHRoaXMucmVhZHlQcm9taXNlUmVqZWN0LnB1c2gocmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEVudnMoKSB7XG4gICAgdGhpcy5odHRwLmdldCh0aGlzLkpTT05fUEFUSCkuc3Vic2NyaWJlKGpzb24gPT4ge1xuICAgICAgaWYgKGpzb24gPT0gbnVsbCB8fCBPYmplY3Qua2V5cyhqc29uKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5yZWFkeVByb21pc2VSZWplY3QuZm9yRWFjaCgocmVqZWN0KSA9PiByZWplY3QoKSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVudmlyb25tZW50U2VydmljZSBmYWlsczogJyR7dGhpcy5KU09OX1BBVEh9JyBpcyBlbXB0eSBvciBpbnZhbGlkYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVudmlyb25tZW50cyA9IE9iamVjdC5rZXlzKGpzb24pLmZpbHRlcihlbnZpcm9ubWVudCA9PiBlbnZpcm9ubWVudCAhPT0gJ2RlZmF1bHQnKTtcbiAgICAgIGlmIChlbnZpcm9ubWVudHMgPT0gbnVsbCB8fCBlbnZpcm9ubWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0RW52KGZhbHNlLCAnZGVmYXVsdCcsIGpzb25bJ2RlZmF1bHQnXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0b3JhZ2UucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KHRoaXMuU0VMRUNURURfRU5WSVJPTk1FTlRfS0VZKS50aGVuKHN0b3JlZEVudmlyb25tZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChzdG9yZWRFbnZpcm9ubWVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGlmIChlbnZpcm9ubWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBzYXZlZCBlbnZpcm9ubWVudCBkZXRlY3RlZCwgd2lsbCBwcm9tcHQgdXNlciBmb3Igc2VsZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RW52aXJvbm1lbnRBY3Rpb25TaGVldChlbnZpcm9ubWVudHMsIGpzb24pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVudmlyb25tZW50ID0gZW52aXJvbm1lbnRzWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RW52KHRydWUsIGVudmlyb25tZW50LCBqc29uWydkZWZhdWx0J10sIGpzb25bZW52aXJvbm1lbnRdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYERldGVjdGVkIHNhdmVkIGVudmlyb25tZW50OiAke3N0b3JlZEVudmlyb25tZW50fWApO1xuICAgICAgICAgICAgICB0aGlzLnNldEVudihmYWxzZSwgc3RvcmVkRW52aXJvbm1lbnQsIGpzb25bJ2RlZmF1bHQnXSwganNvbltzdG9yZWRFbnZpcm9ubWVudF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVudmlyb25tZW50U2VydmljZSBmYWlsczogTm90IGZvdW5kICcke3RoaXMuSlNPTl9QQVRIfSdgKTtcbiAgICAgIHRoaXMucmVhZHlQcm9taXNlUmVqZWN0LmZvckVhY2goKHJlamVjdCkgPT4gcmVqZWN0KCkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbnYoc2F2ZTogYm9vbGVhbiwgZW52aXJvbm1lbnRLZXk6IHN0cmluZywgY29uZmlnQmFzZTogYW55LCBjb25maWdFbnZpcm9ubWVudD86IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGBBcHBseWluZyBlbnZpcm9ubWVudDogJHtlbnZpcm9ubWVudEtleX1gKTtcbiAgICBFbnZpcm9ubWVudC5lbnZpcm9ubWVudENvbmZpZyA9IGNvbmZpZ0Jhc2U7XG4gICAgaWYgKGNvbmZpZ0Vudmlyb25tZW50ICE9IG51bGwpIHtcbiAgICAgIEVudmlyb25tZW50LmVudmlyb25tZW50Q29uZmlnID0ge8KgLi4uY29uZmlnQmFzZSwgLi4uY29uZmlnRW52aXJvbm1lbnQgfTtcbiAgICB9XG4gICAgaWYgKHNhdmUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBTYXZpbmcgZW52aXJvbm1lbnQ6ICR7ZW52aXJvbm1lbnRLZXl9YCk7XG4gICAgICB0aGlzLnN0b3JhZ2Uuc2V0KHRoaXMuU0VMRUNURURfRU5WSVJPTk1FTlRfS0VZLCBlbnZpcm9ubWVudEtleSk7XG4gICAgfVxuICAgIEVudmlyb25tZW50LmlzUmVhZHkgPSB0cnVlO1xuICAgIHRoaXMucmVhZHlQcm9taXNlUmVzb2x2ZS5mb3JFYWNoKChyZXNvbHZlKSA9PiByZXNvbHZlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzaG93RW52aXJvbm1lbnRBY3Rpb25TaGVldChlbnZpcm9ubWVudHM6IHN0cmluZ1tdLCBjb25maWdzOiBhbnkpIHtcbiAgICBhd2FpdCB0aGlzLnBsYXRmb3JtLnJlYWR5KCk7XG4gICAgY29uc3QgYWN0aW9uU2hlZXQgPSBhd2FpdCB0aGlzLmFjdGlvblNoZWV0Q3RybC5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiAnU2VsZWN0IGVudmlyb25tZW50JyxcbiAgICAgIGJhY2tkcm9wRGlzbWlzczogZmFsc2UsXG4gICAgICBidXR0b25zOiBlbnZpcm9ubWVudHMubWFwKGVudmlyb25tZW50ID0+ICh7XG4gICAgICAgIHRleHQ6IGVudmlyb25tZW50LFxuICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRFbnYodHJ1ZSwgZW52aXJvbm1lbnQsIGNvbmZpZ3NbJ2RlZmF1bHQnXSwgY29uZmlnc1tlbnZpcm9ubWVudF0pO1xuICAgICAgICB9XG4gICAgICB9KSlcbiAgICB9KTtcbiAgICBhY3Rpb25TaGVldC5wcmVzZW50KCk7XG4gIH1cblxufVxuIl19