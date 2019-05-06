/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.readyPromiseResolve.push(resolve);
            _this.readyPromiseReject.push(reject);
        }));
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
        this.http.get(this.JSON_PATH).subscribe((/**
         * @param {?} json
         * @return {?}
         */
        function (json) {
            if (json == null || Object.keys(json).length === 0) {
                _this.readyPromiseReject.forEach((/**
                 * @param {?} reject
                 * @return {?}
                 */
                function (reject) { return reject(); }));
                console.error("EnvironmentService fails: '" + _this.JSON_PATH + "' is empty or invalid");
                return;
            }
            /** @type {?} */
            var environments = Object.keys(json).filter((/**
             * @param {?} environment
             * @return {?}
             */
            function (environment) { return environment !== 'default'; }));
            if (environments == null || environments.length === 0) {
                _this.setEnv(false, 'default', json['default']);
            }
            else {
                _this.storage.ready().then((/**
                 * @return {?}
                 */
                function () {
                    _this.storage.get(_this.SELECTED_ENVIRONMENT_KEY).then((/**
                     * @param {?} storedEnvironment
                     * @return {?}
                     */
                    function (storedEnvironment) {
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
                    }));
                }));
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log(err);
            console.error("EnvironmentService fails: Not found '" + _this.JSON_PATH + "'");
            _this.readyPromiseReject.forEach((/**
             * @param {?} reject
             * @return {?}
             */
            function (reject) { return reject(); }));
        }));
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
        this.readyPromiseResolve.forEach((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) { return resolve(); }));
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
                                buttons: environments.map((/**
                                 * @param {?} environment
                                 * @return {?}
                                 */
                                function (environment) { return ({
                                    text: environment,
                                    handler: (/**
                                     * @return {?}
                                     */
                                    function () {
                                        _this.setEnv(true, environment, configs['default'], configs[environment]);
                                    })
                                }); }))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2Vudmlyb25tZW50LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWpFO0lBWUUscUJBQ1UsSUFBZ0IsRUFDaEIsT0FBZ0IsRUFDaEIsZUFBc0MsRUFDdEMsUUFBa0I7UUFIbEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQUN0QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBVlgsY0FBUyxHQUFHLDBCQUEwQixDQUFDO1FBQ3ZDLDZCQUF3QixHQUFHLHdCQUF3QixDQUFDO1FBQzdELG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLHdCQUFtQixHQUFtRCxFQUFFLENBQUM7UUFDekUsdUJBQWtCLEdBQStCLEVBQUUsQ0FBQztJQU96RCxDQUFDOzs7O0lBRUcsa0JBQU07OztJQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDO1NBQ2pGO1FBQ0QsT0FBTyxXQUFXLENBQUMsaUJBQWlCLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVELDJCQUFLOzs7SUFBTDtRQUFBLGlCQVVDO1FBVEMsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQUUsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7U0FB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SUFBSSxPQUFBLENBQUM7b0NBQ3hDLElBQUksRUFBRSxXQUFXO29DQUNqQixPQUFPOzs7b0NBQUU7d0NBQ1AsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQ0FDM0UsQ0FBQyxDQUFBO2lDQUNGLENBQUMsRUFMdUMsQ0FLdkMsRUFBQzs2QkFDSixDQUFDLEVBQUE7O3dCQVRJLFdBQVcsR0FBRyxTQVNsQjt3QkFDRixXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7Ozs7O0tBQ3ZCO0lBakdjLG1CQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ2hCLDZCQUFpQixHQUFRLEVBQUUsQ0FBQzs7Z0JBSjVDLFVBQVU7Ozs7Z0JBSkYsVUFBVTtnQkFDVixPQUFPO2dCQUNQLHFCQUFxQjtnQkFBRSxRQUFROztJQXdHeEMsa0JBQUM7Q0FBQSxBQXRHRCxJQXNHQztTQXJHWSxXQUFXOzs7Ozs7SUFFdEIsb0JBQStCOzs7OztJQUMvQiw4QkFBMkM7Ozs7O0lBRTNDLGdDQUF3RDs7Ozs7SUFDeEQsK0NBQXFFOzs7OztJQUNyRSxxQ0FBK0I7Ozs7O0lBQy9CLDBDQUFpRjs7Ozs7SUFDakYseUNBQTREOzs7OztJQUcxRCwyQkFBd0I7Ozs7O0lBQ3hCLDhCQUF3Qjs7Ozs7SUFDeEIsc0NBQThDOzs7OztJQUM5QywrQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU3RvcmFnZSB9IGZyb20gJ0Bpb25pYy9zdG9yYWdlJztcbmltcG9ydCB7IEFjdGlvblNoZWV0Q29udHJvbGxlciwgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudCB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgaXNSZWFkeSA9IGZhbHNlO1xuICBwcml2YXRlIHN0YXRpYyBlbnZpcm9ubWVudENvbmZpZzogYW55ID0ge307XG5cbiAgcHJpdmF0ZSByZWFkb25seSBKU09OX1BBVEggPSAnYXNzZXRzL2Vudmlyb25tZW50cy5qc29uJztcbiAgcHJpdmF0ZSByZWFkb25seSBTRUxFQ1RFRF9FTlZJUk9OTUVOVF9LRVkgPSAnc2VsZWN0ZWRFbnZpcm9ubWVudEtleSc7XG4gIHByaXZhdGUgaXNJbml0aWFsaXppbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSByZWFkeVByb21pc2VSZXNvbHZlOiAoKHZhbHVlPzogdm9pZCB8IFByb21pc2VMaWtlPHZvaWQ+KSA9PiB2b2lkKVtdID0gW107XG4gIHByaXZhdGUgcmVhZHlQcm9taXNlUmVqZWN0OiAoKHJlYXNvbj86IGFueSkgPT4gdm9pZClbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIHN0b3JhZ2U6IFN0b3JhZ2UsXG4gICAgcHJpdmF0ZSBhY3Rpb25TaGVldEN0cmw6IEFjdGlvblNoZWV0Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHt9XG5cbiAgc3RhdGljIGNvbmZpZygpIHtcbiAgICBpZiAoIUVudmlyb25tZW50LmlzUmVhZHkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVudmlyb25tZW50IGNvbmZpZyBpcyBub3QgcmVhZHkgKHdhaXQgZm9yIEVudmlyb25tZW50LnJlYWR5KCkpYCk7XG4gICAgfVxuICAgIHJldHVybiBFbnZpcm9ubWVudC5lbnZpcm9ubWVudENvbmZpZztcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIGlmIChFbnZpcm9ubWVudC5pc1JlYWR5KSB7wqByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7IH1cbiAgICBpZiAoIXRoaXMuaXNJbml0aWFsaXppbmcpIHtcbiAgICAgIHRoaXMuaXNJbml0aWFsaXppbmcgPSB0cnVlO1xuICAgICAgdGhpcy5pbml0RW52cygpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5yZWFkeVByb21pc2VSZXNvbHZlLnB1c2gocmVzb2x2ZSk7XG4gICAgICB0aGlzLnJlYWR5UHJvbWlzZVJlamVjdC5wdXNoKHJlamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRFbnZzKCkge1xuICAgIHRoaXMuaHR0cC5nZXQodGhpcy5KU09OX1BBVEgpLnN1YnNjcmliZShqc29uID0+IHtcbiAgICAgIGlmIChqc29uID09IG51bGwgfHwgT2JqZWN0LmtleXMoanNvbikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMucmVhZHlQcm9taXNlUmVqZWN0LmZvckVhY2goKHJlamVjdCkgPT4gcmVqZWN0KCkpO1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFbnZpcm9ubWVudFNlcnZpY2UgZmFpbHM6ICcke3RoaXMuSlNPTl9QQVRIfScgaXMgZW1wdHkgb3IgaW52YWxpZGApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBlbnZpcm9ubWVudHMgPSBPYmplY3Qua2V5cyhqc29uKS5maWx0ZXIoZW52aXJvbm1lbnQgPT4gZW52aXJvbm1lbnQgIT09ICdkZWZhdWx0Jyk7XG4gICAgICBpZiAoZW52aXJvbm1lbnRzID09IG51bGwgfHwgZW52aXJvbm1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLnNldEVudihmYWxzZSwgJ2RlZmF1bHQnLCBqc29uWydkZWZhdWx0J10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdG9yYWdlLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy5zdG9yYWdlLmdldCh0aGlzLlNFTEVDVEVEX0VOVklST05NRU5UX0tFWSkudGhlbihzdG9yZWRFbnZpcm9ubWVudCA9PiB7XG4gICAgICAgICAgICBpZiAoc3RvcmVkRW52aXJvbm1lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICBpZiAoZW52aXJvbm1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gc2F2ZWQgZW52aXJvbm1lbnQgZGV0ZWN0ZWQsIHdpbGwgcHJvbXB0IHVzZXIgZm9yIHNlbGVjdGlvbicpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vudmlyb25tZW50QWN0aW9uU2hlZXQoZW52aXJvbm1lbnRzLCBqc29uKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnZpcm9ubWVudCA9IGVudmlyb25tZW50c1swXTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEVudih0cnVlLCBlbnZpcm9ubWVudCwganNvblsnZGVmYXVsdCddLCBqc29uW2Vudmlyb25tZW50XSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBEZXRlY3RlZCBzYXZlZCBlbnZpcm9ubWVudDogJHtzdG9yZWRFbnZpcm9ubWVudH1gKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRFbnYoZmFsc2UsIHN0b3JlZEVudmlyb25tZW50LCBqc29uWydkZWZhdWx0J10sIGpzb25bc3RvcmVkRW52aXJvbm1lbnRdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSwgZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICBjb25zb2xlLmVycm9yKGBFbnZpcm9ubWVudFNlcnZpY2UgZmFpbHM6IE5vdCBmb3VuZCAnJHt0aGlzLkpTT05fUEFUSH0nYCk7XG4gICAgICB0aGlzLnJlYWR5UHJvbWlzZVJlamVjdC5mb3JFYWNoKChyZWplY3QpID0+IHJlamVjdCgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0RW52KHNhdmU6IGJvb2xlYW4sIGVudmlyb25tZW50S2V5OiBzdHJpbmcsIGNvbmZpZ0Jhc2U6IGFueSwgY29uZmlnRW52aXJvbm1lbnQ/OiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhgQXBwbHlpbmcgZW52aXJvbm1lbnQ6ICR7ZW52aXJvbm1lbnRLZXl9YCk7XG4gICAgRW52aXJvbm1lbnQuZW52aXJvbm1lbnRDb25maWcgPSBjb25maWdCYXNlO1xuICAgIGlmIChjb25maWdFbnZpcm9ubWVudCAhPSBudWxsKSB7XG4gICAgICBFbnZpcm9ubWVudC5lbnZpcm9ubWVudENvbmZpZyA9IHvCoC4uLmNvbmZpZ0Jhc2UsIC4uLmNvbmZpZ0Vudmlyb25tZW50IH07XG4gICAgfVxuICAgIGlmIChzYXZlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgU2F2aW5nIGVudmlyb25tZW50OiAke2Vudmlyb25tZW50S2V5fWApO1xuICAgICAgdGhpcy5zdG9yYWdlLnNldCh0aGlzLlNFTEVDVEVEX0VOVklST05NRU5UX0tFWSwgZW52aXJvbm1lbnRLZXkpO1xuICAgIH1cbiAgICBFbnZpcm9ubWVudC5pc1JlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLnJlYWR5UHJvbWlzZVJlc29sdmUuZm9yRWFjaCgocmVzb2x2ZSkgPT4gcmVzb2x2ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2hvd0Vudmlyb25tZW50QWN0aW9uU2hlZXQoZW52aXJvbm1lbnRzOiBzdHJpbmdbXSwgY29uZmlnczogYW55KSB7XG4gICAgYXdhaXQgdGhpcy5wbGF0Zm9ybS5yZWFkeSgpO1xuICAgIGNvbnN0IGFjdGlvblNoZWV0ID0gYXdhaXQgdGhpcy5hY3Rpb25TaGVldEN0cmwuY3JlYXRlKHtcbiAgICAgIGhlYWRlcjogJ1NlbGVjdCBlbnZpcm9ubWVudCcsXG4gICAgICBiYWNrZHJvcERpc21pc3M6IGZhbHNlLFxuICAgICAgYnV0dG9uczogZW52aXJvbm1lbnRzLm1hcChlbnZpcm9ubWVudCA9PiAoe1xuICAgICAgICB0ZXh0OiBlbnZpcm9ubWVudCxcbiAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0RW52KHRydWUsIGVudmlyb25tZW50LCBjb25maWdzWydkZWZhdWx0J10sIGNvbmZpZ3NbZW52aXJvbm1lbnRdKTtcbiAgICAgICAgfVxuICAgICAgfSkpXG4gICAgfSk7XG4gICAgYWN0aW9uU2hlZXQucHJlc2VudCgpO1xuICB9XG5cbn1cbiJdfQ==