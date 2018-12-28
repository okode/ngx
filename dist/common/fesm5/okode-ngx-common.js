import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ActionSheetController, Platform } from '@ionic/angular';
import { __awaiter, __generator, __assign } from 'tslib';
import { Injectable, NgModule, APP_INITIALIZER } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            Environment.environmentConfig = __assign({}, configBase, configEnvironment);
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
        return __awaiter(this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return __generator(this, function (_a) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// @dynamic
var OkodeNgxCommonModule = /** @class */ (function () {
    function OkodeNgxCommonModule() {
    }
    /**
     * @return {?}
     */
    OkodeNgxCommonModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: OkodeNgxCommonModule,
            providers: [
                Environment,
                { provide: APP_INITIALIZER, useFactory: envInitializer, deps: [Environment], multi: true },
            ]
        };
    };
    OkodeNgxCommonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [],
                    exports: []
                },] }
    ];
    return OkodeNgxCommonModule;
}());
/**
 * @param {?} environment
 * @return {?}
 */
function envInitializer(environment) {
    var _this = this;
    return function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, environment.ready()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
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