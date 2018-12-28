/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ActionSheetController, Platform } from '@ionic/angular';
var Environment = /** @class */ (function () {
    function Environment(http, storage, actionSheetCtrl, platform) {
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
    Environment.config = /**
     * @return {?}
     */
    function () {
        if (!Environment.isReady) {
            console.error("Environment config is not ready (wait for Environment.ready())");
        }
        return Environment.environmentConfig;
    };
    /**
     * @return {?}
     */
    Environment.prototype.ready = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (Environment.isReady) {
            return Promise.resolve();
        }
        if (!this.isInitializing) {
            this.isInitializing = true;
            this.initEnvs();
        }
        return new Promise(function (resolve, reject) {
            _this.readyPromiseResolve.push(resolve);
            _this.readyPromiseReject.push(reject);
        });
    };
    /**
     * @private
     * @return {?}
     */
    Environment.prototype.initEnvs = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.http.get(this.JSON_PATH).subscribe(function (json) {
            if (json == null || Object.keys(json).length === 0) {
                _this.readyPromiseReject.forEach(function (reject) { return reject(); });
                console.error("EnvironmentService fails: '" + _this.JSON_PATH + "' is empty or invalid");
                return;
            }
            /** @type {?} */
            var environments = Object.keys(json).filter(function (environment) { return environment !== 'default'; });
            if (environments == null || environments.length === 0) {
                _this.setEnv(false, 'default', json['default']);
            }
            else {
                _this.storage.ready().then(function () {
                    _this.storage.get(_this.SELECTED_ENVIRONMENT_KEY).then(function (storedEnvironment) {
                        if (storedEnvironment == null) {
                            if (environments.length > 1) {
                                console.log('No saved environment detected, will prompt user for selection');
                                _this.showEnvironmentActionSheet(environments, json);
                            }
                            else {
                                /** @type {?} */
                                var environment = environments[0];
                                _this.setEnv(true, environment, json['default'], json[environment]);
                            }
                        }
                        else {
                            console.log("Detected saved environment: " + storedEnvironment);
                            _this.setEnv(false, storedEnvironment, json['default'], json[storedEnvironment]);
                        }
                    });
                });
            }
        }, function (err) {
            console.log(err);
            console.error("EnvironmentService fails: Not found '" + _this.JSON_PATH + "'");
            _this.readyPromiseReject.forEach(function (reject) { return reject(); });
        });
    };
    /**
     * @private
     * @param {?} save
     * @param {?} environmentKey
     * @param {?} configBase
     * @param {?=} configEnvironment
     * @return {?}
     */
    Environment.prototype.setEnv = /**
     * @private
     * @param {?} save
     * @param {?} environmentKey
     * @param {?} configBase
     * @param {?=} configEnvironment
     * @return {?}
     */
    function (save, environmentKey, configBase, configEnvironment) {
        console.log("Applying environment: " + environmentKey);
        Environment.environmentConfig = configBase;
        if (configEnvironment != null) {
            Environment.environmentConfig = tslib_1.__assign({}, configBase, configEnvironment);
        }
        if (save) {
            console.log("Saving environment: " + environmentKey);
            this.storage.set(this.SELECTED_ENVIRONMENT_KEY, environmentKey);
        }
        Environment.isReady = true;
        this.readyPromiseResolve.forEach(function (resolve) { return resolve(); });
    };
    /**
     * @private
     * @param {?} environments
     * @param {?} configs
     * @return {?}
     */
    Environment.prototype.showEnvironmentActionSheet = /**
     * @private
     * @param {?} environments
     * @param {?} configs
     * @return {?}
     */
    function (environments, configs) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.actionSheetCtrl.create({
                                header: 'Select environment',
                                backdropDismiss: false,
                                buttons: environments.map(function (environment) { return ({
                                    text: environment,
                                    handler: function () {
                                        _this.setEnv(true, environment, configs['default'], configs[environment]);
                                    }
                                }); })
                            })];
                    case 2:
                        actionSheet = _a.sent();
                        actionSheet.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Environment.isReady = false;
    Environment.environmentConfig = {};
    Environment.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    Environment.ctorParameters = function () { return [
        { type: HttpClient },
        { type: Storage },
        { type: ActionSheetController },
        { type: Platform }
    ]; };
    return Environment;
}());
export { Environment };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1va29kZS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZW52aXJvbm1lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakU7SUFZRSxxQkFDVSxJQUFnQixFQUNoQixPQUFnQixFQUNoQixlQUFzQyxFQUN0QyxRQUFrQjtRQUhsQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsb0JBQWUsR0FBZixlQUFlLENBQXVCO1FBQ3RDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFWWCxjQUFTLEdBQUcsMEJBQTBCLENBQUM7UUFDdkMsNkJBQXdCLEdBQUcsd0JBQXdCLENBQUM7UUFDN0QsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsd0JBQW1CLEdBQW1ELEVBQUUsQ0FBQztRQUN6RSx1QkFBa0IsR0FBK0IsRUFBRSxDQUFDO0lBT3pELENBQUM7Ozs7SUFFRyxrQkFBTTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUN4QixPQUFPLENBQUMsS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7U0FDakY7UUFDRCxPQUFPLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztJQUN2QyxDQUFDOzs7O0lBRUQsMkJBQUs7OztJQUFMO1FBQUEsaUJBVUM7UUFUQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUFF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VztvQ0FDakIsT0FBTyxFQUFFO3dDQUNQLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0NBQzNFLENBQUM7aUNBQ0YsQ0FBQyxFQUx1QyxDQUt2QyxDQUFDOzZCQUNKLENBQUMsRUFBQTs7d0JBVEksV0FBVyxHQUFHLFNBU2xCO3dCQUNGLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7Ozs7S0FDdkI7SUFqR2MsbUJBQU8sR0FBRyxLQUFLLENBQUM7SUFDaEIsNkJBQWlCLEdBQVEsRUFBRSxDQUFDOztnQkFKNUMsVUFBVTs7OztnQkFKRixVQUFVO2dCQUNWLE9BQU87Z0JBQ1AscUJBQXFCO2dCQUFFLFFBQVE7O0lBd0d4QyxrQkFBQztDQUFBLEFBdEdELElBc0dDO1NBckdZLFdBQVc7Ozs7OztJQUV0QixvQkFBK0I7Ozs7O0lBQy9CLDhCQUEyQzs7Ozs7SUFFM0MsZ0NBQXdEOzs7OztJQUN4RCwrQ0FBcUU7Ozs7O0lBQ3JFLHFDQUErQjs7Ozs7SUFDL0IsMENBQWlGOzs7OztJQUNqRix5Q0FBNEQ7Ozs7O0lBRzFELDJCQUF3Qjs7Ozs7SUFDeEIsOEJBQXdCOzs7OztJQUN4QixzQ0FBOEM7Ozs7O0lBQzlDLCtCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGlvbmljL3N0b3JhZ2UnO1xuaW1wb3J0IHsgQWN0aW9uU2hlZXRDb250cm9sbGVyLCBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblxuICBwcml2YXRlIHN0YXRpYyBpc1JlYWR5ID0gZmFsc2U7XG4gIHByaXZhdGUgc3RhdGljIGVudmlyb25tZW50Q29uZmlnOiBhbnkgPSB7fTtcblxuICBwcml2YXRlIHJlYWRvbmx5IEpTT05fUEFUSCA9ICdhc3NldHMvZW52aXJvbm1lbnRzLmpzb24nO1xuICBwcml2YXRlIHJlYWRvbmx5IFNFTEVDVEVEX0VOVklST05NRU5UX0tFWSA9ICdzZWxlY3RlZEVudmlyb25tZW50S2V5JztcbiAgcHJpdmF0ZSBpc0luaXRpYWxpemluZyA9IGZhbHNlO1xuICBwcml2YXRlIHJlYWR5UHJvbWlzZVJlc29sdmU6ICgodmFsdWU/OiB2b2lkIHwgUHJvbWlzZUxpa2U8dm9pZD4pID0+IHZvaWQpW10gPSBbXTtcbiAgcHJpdmF0ZSByZWFkeVByb21pc2VSZWplY3Q6ICgocmVhc29uPzogYW55KSA9PiB2b2lkKVtdID0gW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgc3RvcmFnZTogU3RvcmFnZSxcbiAgICBwcml2YXRlIGFjdGlvblNoZWV0Q3RybDogQWN0aW9uU2hlZXRDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge31cblxuICBzdGF0aWMgY29uZmlnKCkge1xuICAgIGlmICghRW52aXJvbm1lbnQuaXNSZWFkeSkge1xuICAgICAgY29uc29sZS5lcnJvcihgRW52aXJvbm1lbnQgY29uZmlnIGlzIG5vdCByZWFkeSAod2FpdCBmb3IgRW52aXJvbm1lbnQucmVhZHkoKSlgKTtcbiAgICB9XG4gICAgcmV0dXJuIEVudmlyb25tZW50LmVudmlyb25tZW50Q29uZmlnO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgaWYgKEVudmlyb25tZW50LmlzUmVhZHkpIHvCoHJldHVybiBQcm9taXNlLnJlc29sdmUoKTsgfVxuICAgIGlmICghdGhpcy5pc0luaXRpYWxpemluZykge1xuICAgICAgdGhpcy5pc0luaXRpYWxpemluZyA9IHRydWU7XG4gICAgICB0aGlzLmluaXRFbnZzKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnJlYWR5UHJvbWlzZVJlc29sdmUucHVzaChyZXNvbHZlKTtcbiAgICAgIHRoaXMucmVhZHlQcm9taXNlUmVqZWN0LnB1c2gocmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdEVudnMoKSB7XG4gICAgdGhpcy5odHRwLmdldCh0aGlzLkpTT05fUEFUSCkuc3Vic2NyaWJlKGpzb24gPT4ge1xuICAgICAgaWYgKGpzb24gPT0gbnVsbCB8fCBPYmplY3Qua2V5cyhqc29uKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhpcy5yZWFkeVByb21pc2VSZWplY3QuZm9yRWFjaCgocmVqZWN0KSA9PiByZWplY3QoKSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVudmlyb25tZW50U2VydmljZSBmYWlsczogJyR7dGhpcy5KU09OX1BBVEh9JyBpcyBlbXB0eSBvciBpbnZhbGlkYCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGVudmlyb25tZW50cyA9IE9iamVjdC5rZXlzKGpzb24pLmZpbHRlcihlbnZpcm9ubWVudCA9PiBlbnZpcm9ubWVudCAhPT0gJ2RlZmF1bHQnKTtcbiAgICAgIGlmIChlbnZpcm9ubWVudHMgPT0gbnVsbCB8fCBlbnZpcm9ubWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMuc2V0RW52KGZhbHNlLCAnZGVmYXVsdCcsIGpzb25bJ2RlZmF1bHQnXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0b3JhZ2UucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnN0b3JhZ2UuZ2V0KHRoaXMuU0VMRUNURURfRU5WSVJPTk1FTlRfS0VZKS50aGVuKHN0b3JlZEVudmlyb25tZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChzdG9yZWRFbnZpcm9ubWVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIGlmIChlbnZpcm9ubWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBzYXZlZCBlbnZpcm9ubWVudCBkZXRlY3RlZCwgd2lsbCBwcm9tcHQgdXNlciBmb3Igc2VsZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RW52aXJvbm1lbnRBY3Rpb25TaGVldChlbnZpcm9ubWVudHMsIGpzb24pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVudmlyb25tZW50ID0gZW52aXJvbm1lbnRzWzBdO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RW52KHRydWUsIGVudmlyb25tZW50LCBqc29uWydkZWZhdWx0J10sIGpzb25bZW52aXJvbm1lbnRdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYERldGVjdGVkIHNhdmVkIGVudmlyb25tZW50OiAke3N0b3JlZEVudmlyb25tZW50fWApO1xuICAgICAgICAgICAgICB0aGlzLnNldEVudihmYWxzZSwgc3RvcmVkRW52aXJvbm1lbnQsIGpzb25bJ2RlZmF1bHQnXSwganNvbltzdG9yZWRFbnZpcm9ubWVudF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVudmlyb25tZW50U2VydmljZSBmYWlsczogTm90IGZvdW5kICcke3RoaXMuSlNPTl9QQVRIfSdgKTtcbiAgICAgIHRoaXMucmVhZHlQcm9taXNlUmVqZWN0LmZvckVhY2goKHJlamVjdCkgPT4gcmVqZWN0KCkpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRFbnYoc2F2ZTogYm9vbGVhbiwgZW52aXJvbm1lbnRLZXk6IHN0cmluZywgY29uZmlnQmFzZTogYW55LCBjb25maWdFbnZpcm9ubWVudD86IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGBBcHBseWluZyBlbnZpcm9ubWVudDogJHtlbnZpcm9ubWVudEtleX1gKTtcbiAgICBFbnZpcm9ubWVudC5lbnZpcm9ubWVudENvbmZpZyA9IGNvbmZpZ0Jhc2U7XG4gICAgaWYgKGNvbmZpZ0Vudmlyb25tZW50ICE9IG51bGwpIHtcbiAgICAgIEVudmlyb25tZW50LmVudmlyb25tZW50Q29uZmlnID0ge8KgLi4uY29uZmlnQmFzZSwgLi4uY29uZmlnRW52aXJvbm1lbnQgfTtcbiAgICB9XG4gICAgaWYgKHNhdmUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBTYXZpbmcgZW52aXJvbm1lbnQ6ICR7ZW52aXJvbm1lbnRLZXl9YCk7XG4gICAgICB0aGlzLnN0b3JhZ2Uuc2V0KHRoaXMuU0VMRUNURURfRU5WSVJPTk1FTlRfS0VZLCBlbnZpcm9ubWVudEtleSk7XG4gICAgfVxuICAgIEVudmlyb25tZW50LmlzUmVhZHkgPSB0cnVlO1xuICAgIHRoaXMucmVhZHlQcm9taXNlUmVzb2x2ZS5mb3JFYWNoKChyZXNvbHZlKSA9PiByZXNvbHZlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzaG93RW52aXJvbm1lbnRBY3Rpb25TaGVldChlbnZpcm9ubWVudHM6IHN0cmluZ1tdLCBjb25maWdzOiBhbnkpIHtcbiAgICBhd2FpdCB0aGlzLnBsYXRmb3JtLnJlYWR5KCk7XG4gICAgY29uc3QgYWN0aW9uU2hlZXQgPSBhd2FpdCB0aGlzLmFjdGlvblNoZWV0Q3RybC5jcmVhdGUoe1xuICAgICAgaGVhZGVyOiAnU2VsZWN0IGVudmlyb25tZW50JyxcbiAgICAgIGJhY2tkcm9wRGlzbWlzczogZmFsc2UsXG4gICAgICBidXR0b25zOiBlbnZpcm9ubWVudHMubWFwKGVudmlyb25tZW50ID0+ICh7XG4gICAgICAgIHRleHQ6IGVudmlyb25tZW50LFxuICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRFbnYodHJ1ZSwgZW52aXJvbm1lbnQsIGNvbmZpZ3NbJ2RlZmF1bHQnXSwgY29uZmlnc1tlbnZpcm9ubWVudF0pO1xuICAgICAgICB9XG4gICAgICB9KSlcbiAgICB9KTtcbiAgICBhY3Rpb25TaGVldC5wcmVzZW50KCk7XG4gIH1cblxufVxuIl19