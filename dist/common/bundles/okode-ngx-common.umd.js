(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common/http'), require('@ionic/storage'), require('@ionic/core/dist/collection/utils/transition/ios.transition'), require('@ionic/core/dist/collection/utils/transition/md.transition'), require('rxjs'), require('rxjs/operators'), require('@ionic/angular'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@okode/ngx-common', ['exports', '@angular/common/http', '@ionic/storage', '@ionic/core/dist/collection/utils/transition/ios.transition', '@ionic/core/dist/collection/utils/transition/md.transition', 'rxjs', 'rxjs/operators', '@ionic/angular', '@angular/core'], factory) :
    (factory((global.okode = global.okode || {}, global.okode['ngx-common'] = {}),global.ng.common.http,global.storage,global.ios_transition,global.md_transition,global.rxjs,global.rxjs.operators,global.angular,global.ng.core));
}(this, (function (exports,http,storage,ios_transition,md_transition,rxjs,operators,angular,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Environment = /** @class */ (function () {
        function Environment(http$$1, storage$$1, actionSheetCtrl, platform) {
            this.http = http$$1;
            this.storage = storage$$1;
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
                                        buttons: environments.map(function (environment) {
                                            return ({
                                                text: environment,
                                                handler: function () {
                                                    _this.setEnv(true, environment, configs['default'], configs[environment]);
                                                }
                                            });
                                        })
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        Environment.ctorParameters = function () {
            return [
                { type: http.HttpClient },
                { type: storage.Storage },
                { type: angular.ActionSheetController },
                { type: angular.Platform }
            ];
        };
        return Environment;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Navigator = /** @class */ (function () {
        function Navigator(navCtrl, config) {
            this.navCtrl = navCtrl;
            this.config = config;
            this.animation = 'default';
            this.animationConfigReady = false;
        }
        /**
         * @return {?}
         */
        Navigator.prototype.getParams = /**
         * @return {?}
         */
            function () {
                return this.params;
            };
        /**
         * @param {?} url
         * @param {?=} params
         * @param {?=} animation
         * @return {?}
         */
        Navigator.prototype.push = /**
         * @param {?} url
         * @param {?=} params
         * @param {?=} animation
         * @return {?}
         */
            function (url, params, animation) {
                if (animation === void 0) {
                    animation = 'default';
                }
                if (!this.animationConfigReady) {
                    this.setAnimationConfig();
                }
                this.params = params;
                this.animation = animation;
                return this.navCtrl.navigateForward(url);
            };
        /**
         * @param {?=} url
         * @param {?=} params
         * @return {?}
         */
        Navigator.prototype.pop = /**
         * @param {?=} url
         * @param {?=} params
         * @return {?}
         */
            function (url, params) {
                this.params = params;
                return this.navCtrl.navigateBack(url || this.getPreviousPageUrl());
            };
        /**
         * @return {?}
         */
        Navigator.prototype.popToRoot = /**
         * @return {?}
         */
            function () {
                return this.navCtrl.navigateBack(this.getRootPageUrl());
            };
        /**
         * @param {?} url
         * @param {?=} params
         * @return {?}
         */
        Navigator.prototype.setRoot = /**
         * @param {?} url
         * @param {?=} params
         * @return {?}
         */
            function (url, params) {
                this.params = params;
                return this.navCtrl.navigateRoot(url);
            };
        /**
         * @return {?}
         */
        Navigator.prototype.getViews = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var c = __assign({}, this.navCtrl);
                /** @type {?} */
                var views = [];
                if (c && c.topOutlet && c.topOutlet.stackCtrl) {
                    views = c.topOutlet.stackCtrl.views;
                }
                return views;
            };
        /**
         * @private
         * @return {?}
         */
        Navigator.prototype.getPreviousPageUrl = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var views = this.getViews();
                return (views && views.length > 1) ? views[views.length - 2].url : '';
            };
        /**
         * @private
         * @return {?}
         */
        Navigator.prototype.getRootPageUrl = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var views = this.getViews();
                return (views && views.length) ? views[0].url : '';
            };
        /**
         * @private
         * @return {?}
         */
        Navigator.prototype.setAnimationConfig = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.animationConfigReady = true;
                this.config.set('navAnimation', function (AnimationC, baseEl, opts) {
                    /** @type {?} */
                    var anim = _this.animation;
                    if (opts.direction === 'back') {
                        anim = opts.enteringEl.getAttribute('animation-leave');
                    }
                    opts.enteringEl.setAttribute('animation-enter', _this.animation);
                    opts.leavingEl.setAttribute('animation-leave', _this.animation);
                    /** @type {?} */
                    var ios = (opts && opts.mode === 'ios');
                    switch (anim) {
                        case 'default':
                            if (ios) {
                                return animationPush(AnimationC, baseEl, opts);
                            }
                            else {
                                return animationModal(AnimationC, baseEl, opts);
                            }
                        case 'push': return animationPush(AnimationC, baseEl, opts);
                        case 'modal': return animationModal(AnimationC, baseEl, opts);
                        case 'fade': return animationFade(AnimationC, baseEl, opts);
                        case 'safepush': return animationSafePush(AnimationC, baseEl, opts);
                        default: return animationModal(AnimationC, baseEl, opts);
                    }
                });
            };
        Navigator.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        Navigator.ctorParameters = function () {
            return [
                { type: angular.NavController },
                { type: angular.Config }
            ];
        };
        return Navigator;
    }());
    /**
     * @param {?} a
     * @param {?} b
     * @param {?} o
     * @return {?}
     */
    function animationPush(a, b, o) { return ios_transition.iosTransitionAnimation(a, b, o); }
    /**
     * @param {?} a
     * @param {?} b
     * @param {?} o
     * @return {?}
     */
    function animationModal(a, b, o) { return md_transition.mdTransitionAnimation(a, b, o); }
    /**
     * @param {?} a
     * @param {?} b
     * @param {?} o
     * @return {?}
     */
    function animationFade(a, b, o) { return fadeAnimation(a, b, o); }
    /**
     * @param {?} a
     * @param {?} b
     * @param {?} o
     * @return {?}
     */
    function animationSafePush(a, b, o) { return safePushAnimation(a, b, o); }
    /**
     * @param {?} AnimationC
     * @param {?} _
     * @param {?} opts
     * @return {?}
     */
    function fadeAnimation(AnimationC, _, opts) {
        /** @type {?} */
        var getIonPageElement = function (element) {
            if (element.classList.contains('ion-page')) {
                return element;
            }
            /** @type {?} */
            var page = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
            return page || element;
        };
        /** @type {?} */
        var enteringEl = opts.enteringEl;
        /** @type {?} */
        var leavingEl = opts.leavingEl;
        /** @type {?} */
        var ionPageElement = getIonPageElement(enteringEl);
        /** @type {?} */
        var rootTransition = new AnimationC();
        rootTransition.addElement(ionPageElement).beforeRemoveClass('ion-page-invisible');
        if (opts.direction === 'back') { // animate the component itself
            rootTransition.duration(opts.duration || 300).easing('cubic-bezier(0.47,0,0.745,0.715)');
        }
        else {
            rootTransition.duration(opts.duration || 400)
                .easing('cubic-bezier(0.36,0.66,0.04,1)').fromTo('opacity', 0.01, 1, true);
        }
        /** @type {?} */
        var enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
        if (enteringToolbarEle) { // Animate toolbar if it's there
            // Animate toolbar if it's there
            /** @type {?} */
            var enteringToolBar = new AnimationC();
            enteringToolBar.addElement(enteringToolbarEle);
            rootTransition.add(enteringToolBar);
        }
        // setup leaving view
        if (leavingEl && (opts.direction === 'back')) { // leaving content
            rootTransition.duration(opts.duration || 300).easing('cubic-bezier(0.47,0,0.745,0.715)');
            /** @type {?} */
            var leavingPage = new AnimationC();
            leavingPage.addElement(getIonPageElement(leavingEl)).fromTo('opacity', 1, 0);
            rootTransition.add(leavingPage);
        }
        return Promise.resolve(rootTransition);
    }
    /**
     * @param {?} AnimationC
     * @param {?} _
     * @param {?} opts
     * @return {?}
     */
    function safePushAnimation(AnimationC, _, opts) {
        /** @type {?} */
        var getIonPageElement = function (element) {
            if (element.classList.contains('ion-page')) {
                return element;
            }
            /** @type {?} */
            var page = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
            return page || element;
        };
        /** @type {?} */
        var enteringEl = opts.enteringEl;
        /** @type {?} */
        var leavingEl = opts.leavingEl;
        /** @type {?} */
        var ionPageElement = getIonPageElement(enteringEl);
        /** @type {?} */
        var rootTransition = new AnimationC();
        rootTransition.addElement(ionPageElement).beforeRemoveClass('ion-page-invisible');
        rootTransition.duration(opts.duration || 500).easing('cubic-bezier(0.36,0.66,0.04,1)');
        /** @type {?} */
        var leavingPage = new AnimationC();
        /** @type {?} */
        var enteringPage = new AnimationC();
        if (opts.direction === 'back') {
            leavingPage.addElement(getIonPageElement(leavingEl)).fromTo('translateX', '0', '100%');
            enteringPage.addElement(getIonPageElement(enteringEl)).fromTo('translateX', '-100%', '0');
        }
        else {
            leavingPage.addElement(getIonPageElement(leavingEl)).fromTo('translateX', '0', '-100%');
            enteringPage.addElement(getIonPageElement(enteringEl)).fromTo('translateX', '100%', '0');
        }
        rootTransition.add(leavingPage);
        rootTransition.add(enteringPage);
        return Promise.resolve(rootTransition);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HardwareBackButton = /** @class */ (function () {
        function HardwareBackButton(nav, navController, platform) {
            this.nav = nav;
            this.navController = navController;
            this.platform = platform;
            this.filterCondition = function () { return true; };
            this.intialized = false;
        }
        /**
         * @param {?=} condition
         * @return {?}
         */
        HardwareBackButton.prototype.enable = /**
         * @param {?=} condition
         * @return {?}
         */
            function (condition) {
                if (!this.intialized) {
                    this.init();
                }
                this.filterCondition = condition || (function () { return true; });
            };
        /**
         * @return {?}
         */
        HardwareBackButton.prototype.disable = /**
         * @return {?}
         */
            function () {
                if (!this.intialized) {
                    this.init();
                }
                this.filterCondition = function () { return false; };
            };
        /**
         * @private
         * @return {?}
         */
        HardwareBackButton.prototype.init = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                this.intialized = true;
                /** @type {?} */
                var hwBackSubject = new rxjs.Subject();
                hwBackSubject.pipe(operators.throttleTime(500), operators.filter(this.filterCondition)).subscribe(function () {
                    return __awaiter(_this, void 0, void 0, function () {
                        var overlaySelector, overlay, view;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log('HardwareBackButton: back button action');
                                    // check ionic overlays (dismiss if is presented and backdropDismiss == true)
                                    overlaySelector = 'ion-alert-controller, ion-action-sheet, ion-loading-controller';
                                    overlay = document.querySelector(overlaySelector);
                                    if (!(overlay && overlay.getTop))
                                        return [3 /*break*/, 2];
                                    return [4 /*yield*/, overlay.getTop()];
                                case 1:
                                    overlay = _a.sent();
                                    _a.label = 2;
                                case 2:
                                    if (overlay) {
                                        if (overlay && overlay.backdropDismiss === true) {
                                            overlay.dismiss();
                                        }
                                        return [2 /*return*/];
                                    }
                                    // check if active view has implemented `onHardwareBack()`, else performs nav.pop()
                                    view = this.getActiveViewRefInstance();
                                    if (view && view.kdOnHardwareBackButton) {
                                        view.kdOnHardwareBackButton();
                                    }
                                    else {
                                        this.nav.pop();
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                });
                // Overring default hardware back button behaviour
                this.platform.ready().then(function () {
                    _this.platform.backButton.subscribeWithPriority(9999, function () { hwBackSubject.next(event); });
                });
            };
        /**
         * @private
         * @return {?}
         */
        HardwareBackButton.prototype.getActiveViewRefInstance = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var nav = __assign({}, this.navController);
                if (nav && nav.topOutlet && nav.topOutlet.stackCtrl && nav.topOutlet.stackCtrl.activeView &&
                    nav.topOutlet.stackCtrl.activeView && nav.topOutlet.stackCtrl.activeView.ref) {
                    return nav.topOutlet.stackCtrl.activeView.ref.instance;
                }
                return null;
            };
        HardwareBackButton.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        HardwareBackButton.ctorParameters = function () {
            return [
                { type: Navigator },
                { type: angular.NavController },
                { type: angular.Platform }
            ];
        };
        return HardwareBackButton;
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
                        Navigator,
                        HardwareBackButton,
                        {
                            provide: core.APP_INITIALIZER,
                            useFactory: moduleInitializer,
                            deps: [Environment, HardwareBackButton],
                            multi: true
                        },
                    ]
                };
            };
        OkodeNgxCommonModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [],
                        exports: []
                    },] }
        ];
        return OkodeNgxCommonModule;
    }());
    /**
     * @param {?} environment
     * @param {?} hardwareBackButton
     * @return {?}
     */
    function moduleInitializer(environment, hardwareBackButton) {
        var _this = this;
        return function () {
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, environment.ready()];
                        case 1:
                            _a.sent();
                            hardwareBackButton.enable();
                            return [2 /*return*/];
                    }
                });
            });
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.Environment = Environment;
    exports.fadeAnimation = fadeAnimation;
    exports.safePushAnimation = safePushAnimation;
    exports.Navigator = Navigator;
    exports.HardwareBackButton = HardwareBackButton;
    exports.moduleInitializer = moduleInitializer;
    exports.OkodeNgxCommonModule = OkodeNgxCommonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=okode-ngx-common.umd.js.map