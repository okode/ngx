import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { iosTransitionAnimation } from '@ionic/core/dist/collection/utils/transition/ios.transition';
import { mdTransitionAnimation } from '@ionic/core/dist/collection/utils/transition/md.transition';
import { Subject } from 'rxjs';
import { throttleTime, filter } from 'rxjs/operators';
import { ActionSheetController, Platform, NavController, Config } from '@ionic/angular';
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
var Navigator = /** @class */ (function () {
    function Navigator(navCtrl, config) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.animation = 'default';
        this.animationConfigReady = false;
        this.startNavFlow = false;
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
     * @param {?=} startNavFlow
     * @return {?}
     */
    Navigator.prototype.push = /**
     * @param {?} url
     * @param {?=} params
     * @param {?=} animation
     * @param {?=} startNavFlow
     * @return {?}
     */
    function (url, params, animation, startNavFlow) {
        if (animation === void 0) { animation = 'default'; }
        if (startNavFlow === void 0) { startNavFlow = false; }
        if (!this.animationConfigReady) {
            this.setAnimationConfig();
        }
        this.params = params;
        this.animation = animation;
        this.startNavFlow = startNavFlow;
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
     * @param {?=} params
     * @return {?}
     */
    Navigator.prototype.closeCurrentNavFlow = /**
     * @param {?=} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var views = this.getViews().reverse();
        /** @type {?} */
        var currentNavFlow = views.findIndex(function (v) { return v.element.getAttribute('new-nav-flow'); });
        /** @type {?} */
        var targetPage = currentNavFlow >= 0 && views.length > 1 ? views[currentNavFlow + 1] : null;
        return targetPage ? this.pop(targetPage.url, params) : this.popToRoot();
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
            else if (opts.direction === 'forward' && _this.startNavFlow) {
                opts.enteringEl.setAttribute('new-nav-flow', true);
                _this.startNavFlow = false;
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
        { type: Injectable }
    ];
    /** @nocollapse */
    Navigator.ctorParameters = function () { return [
        { type: NavController },
        { type: Config }
    ]; };
    return Navigator;
}());
/**
 * @param {?} a
 * @param {?} b
 * @param {?} o
 * @return {?}
 */
function animationPush(a, b, o) { return iosTransitionAnimation(a, b, o); }
/**
 * @param {?} a
 * @param {?} b
 * @param {?} o
 * @return {?}
 */
function animationModal(a, b, o) { return mdTransitionAnimation(a, b, o); }
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
    function HardwareBackButton(navCtrl, nav, platform) {
        this.navCtrl = navCtrl;
        this.nav = nav;
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
        var hwBackSubject = new Subject();
        hwBackSubject.pipe(throttleTime(500), filter(function () { return _this.filterCondition(); })).subscribe(function () { return __awaiter(_this, void 0, void 0, function () {
            var overlaySelector, overlay, view;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('HardwareBackButton: back button action');
                        // check ionic overlays (dismiss if is presented and backdropDismiss == true)
                        overlaySelector = 'ion-alert-controller, ion-action-sheet, ion-loading-controller';
                        overlay = document.querySelector(overlaySelector);
                        if (!(overlay && overlay.getTop)) return [3 /*break*/, 2];
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
        }); });
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
        var nav = __assign({}, this.navCtrl);
        if (nav && nav.topOutlet && nav.topOutlet.stackCtrl && nav.topOutlet.stackCtrl.activeView &&
            nav.topOutlet.stackCtrl.activeView && nav.topOutlet.stackCtrl.activeView.ref) {
            return nav.topOutlet.stackCtrl.activeView.ref.instance;
        }
        return null;
    };
    HardwareBackButton.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HardwareBackButton.ctorParameters = function () { return [
        { type: NavController },
        { type: Navigator },
        { type: Platform }
    ]; };
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
                    provide: APP_INITIALIZER,
                    useFactory: moduleInitializer,
                    deps: [Environment],
                    multi: true
                },
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
function moduleInitializer(environment) {
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

export { Environment, fadeAnimation, safePushAnimation, Navigator, HardwareBackButton, moduleInitializer, OkodeNgxCommonModule };

//# sourceMappingURL=okode-ngx-common.js.map