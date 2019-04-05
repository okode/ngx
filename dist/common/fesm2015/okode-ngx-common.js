import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { iosTransitionAnimation } from '@ionic/core/dist/collection/utils/transition/ios.transition';
import { mdTransitionAnimation } from '@ionic/core/dist/collection/utils/transition/md.transition';
import { Subject } from 'rxjs';
import { throttleTime, filter } from 'rxjs/operators';
import { ActionSheetController, Platform, NavController, Config } from '@ionic/angular';
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
class Navigator {
    /**
     * @param {?} navCtrl
     * @param {?} config
     */
    constructor(navCtrl, config) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.animation = 'default';
        this.animationConfigReady = false;
        this.startNavFlow = false;
    }
    /**
     * @return {?}
     */
    getParams() {
        return this.params;
    }
    /**
     * @param {?} url
     * @param {?=} params
     * @param {?=} animation
     * @param {?=} startNavFlow
     * @return {?}
     */
    push(url, params, animation = 'default', startNavFlow = false) {
        if (!this.animationConfigReady) {
            this.setAnimationConfig();
        }
        this.params = params;
        this.animation = animation;
        this.startNavFlow = startNavFlow;
        return this.navCtrl.navigateForward(url);
    }
    /**
     * @param {?=} url
     * @param {?=} params
     * @return {?}
     */
    pop(url, params) {
        this.params = params;
        return this.navCtrl.navigateBack(url || this.getPreviousPageUrl());
    }
    /**
     * @return {?}
     */
    popToRoot() {
        return this.navCtrl.navigateBack(this.getRootPageUrl());
    }
    /**
     * @param {?} url
     * @param {?=} params
     * @return {?}
     */
    setRoot(url, params) {
        this.params = params;
        return this.navCtrl.navigateRoot(url);
    }
    /**
     * @param {?=} params
     * @return {?}
     */
    closeCurrentNavFlow(params) {
        /** @type {?} */
        const views = [...this.getViews()].reverse();
        /** @type {?} */
        const currentNavFlow = views.findIndex(v => v.element.getAttribute('new-nav-flow'));
        /** @type {?} */
        const targetPage = currentNavFlow >= 0 && views.length > 1 ? views[currentNavFlow + 1] : null;
        return targetPage ? this.pop(targetPage.url, params) : this.popToRoot();
    }
    /**
     * @return {?}
     */
    getViews() {
        /** @type {?} */
        const c = Object.assign({}, this.navCtrl);
        /** @type {?} */
        let views = [];
        if (c && c.topOutlet && c.topOutlet.stackCtrl) {
            views = c.topOutlet.stackCtrl.views;
        }
        return views;
    }
    /**
     * @private
     * @return {?}
     */
    getPreviousPageUrl() {
        /** @type {?} */
        const views = this.getViews();
        return (views && views.length > 1) ? views[views.length - 2].url : '';
    }
    /**
     * @private
     * @return {?}
     */
    getRootPageUrl() {
        /** @type {?} */
        const views = this.getViews();
        return (views && views.length) ? views[0].url : '';
    }
    /**
     * @private
     * @return {?}
     */
    setAnimationConfig() {
        this.animationConfigReady = true;
        this.config.set('navAnimation', (AnimationC, baseEl, opts) => {
            /** @type {?} */
            let anim = this.animation;
            if (opts.direction === 'back') {
                anim = opts.enteringEl.getAttribute('animation-leave');
            }
            else if (opts.direction === 'forward' && this.startNavFlow) {
                opts.enteringEl.setAttribute('new-nav-flow', true);
                this.startNavFlow = false;
            }
            opts.enteringEl.setAttribute('animation-enter', this.animation);
            opts.leavingEl.setAttribute('animation-leave', this.animation);
            /** @type {?} */
            const ios = (opts && opts.mode === 'ios');
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
    }
}
Navigator.decorators = [
    { type: Injectable }
];
/** @nocollapse */
Navigator.ctorParameters = () => [
    { type: NavController },
    { type: Config }
];
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
    const getIonPageElement = function (element) {
        if (element.classList.contains('ion-page')) {
            return element;
        }
        /** @type {?} */
        const page = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
        return page || element;
    };
    /** @type {?} */
    const enteringEl = opts.enteringEl;
    /** @type {?} */
    const leavingEl = opts.leavingEl;
    /** @type {?} */
    const ionPageElement = getIonPageElement(enteringEl);
    /** @type {?} */
    const rootTransition = new AnimationC();
    rootTransition.addElement(ionPageElement).beforeRemoveClass('ion-page-invisible');
    if (opts.direction === 'back') { // animate the component itself
        rootTransition.duration(opts.duration || 300).easing('cubic-bezier(0.47,0,0.745,0.715)');
    }
    else {
        rootTransition.duration(opts.duration || 400)
            .easing('cubic-bezier(0.36,0.66,0.04,1)').fromTo('opacity', 0.01, 1, true);
    }
    /** @type {?} */
    const enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
    if (enteringToolbarEle) { // Animate toolbar if it's there
        // Animate toolbar if it's there
        /** @type {?} */
        const enteringToolBar = new AnimationC();
        enteringToolBar.addElement(enteringToolbarEle);
        rootTransition.add(enteringToolBar);
    }
    // setup leaving view
    if (leavingEl && (opts.direction === 'back')) { // leaving content
        rootTransition.duration(opts.duration || 300).easing('cubic-bezier(0.47,0,0.745,0.715)');
        /** @type {?} */
        const leavingPage = new AnimationC();
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
    const getIonPageElement = function (element) {
        if (element.classList.contains('ion-page')) {
            return element;
        }
        /** @type {?} */
        const page = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
        return page || element;
    };
    /** @type {?} */
    const enteringEl = opts.enteringEl;
    /** @type {?} */
    const leavingEl = opts.leavingEl;
    /** @type {?} */
    const ionPageElement = getIonPageElement(enteringEl);
    /** @type {?} */
    const rootTransition = new AnimationC();
    rootTransition.addElement(ionPageElement).beforeRemoveClass('ion-page-invisible');
    rootTransition.duration(opts.duration || 500).easing('cubic-bezier(0.36,0.66,0.04,1)');
    /** @type {?} */
    const leavingPage = new AnimationC();
    /** @type {?} */
    const enteringPage = new AnimationC();
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
class HardwareBackButton {
    /**
     * @param {?} navCtrl
     * @param {?} nav
     * @param {?} platform
     */
    constructor(navCtrl, nav, platform) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.platform = platform;
        this.filterCondition = () => true;
        this.intialized = false;
    }
    /**
     * @param {?=} condition
     * @return {?}
     */
    enable(condition) {
        if (!this.intialized) {
            this.init();
        }
        this.filterCondition = condition || (() => true);
    }
    /**
     * @return {?}
     */
    disable() {
        if (!this.intialized) {
            this.init();
        }
        this.filterCondition = () => false;
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this.intialized = true;
        /** @type {?} */
        const hwBackSubject = new Subject();
        hwBackSubject.pipe(throttleTime(500), filter(() => this.filterCondition())).subscribe(() => __awaiter(this, void 0, void 0, function* () {
            console.log('HardwareBackButton: back button action');
            // check ionic overlays (dismiss if is presented and backdropDismiss == true)
            /** @type {?} */
            const overlaySelector = 'ion-alert-controller, ion-action-sheet, ion-loading-controller';
            /** @type {?} */
            let overlay = document.querySelector(overlaySelector);
            if (overlay && overlay.getTop) {
                overlay = yield overlay.getTop();
            }
            if (overlay) {
                if (overlay && overlay.backdropDismiss === true) {
                    overlay.dismiss();
                }
                return;
            }
            // check if active view has implemented `onHardwareBack()`, else performs nav.pop()
            /** @type {?} */
            let view = this.getActiveViewRefInstance();
            if (view && view.kdOnHardwareBackButton) {
                view.kdOnHardwareBackButton();
            }
            else {
                this.nav.pop();
            }
        }));
        // Overring default hardware back button behaviour
        this.platform.ready().then(() => {
            this.platform.backButton.subscribeWithPriority(9999, () => { hwBackSubject.next(event); });
        });
    }
    /**
     * @private
     * @return {?}
     */
    getActiveViewRefInstance() {
        /** @type {?} */
        const nav = Object.assign({}, this.navCtrl);
        if (nav && nav.topOutlet && nav.topOutlet.stackCtrl && nav.topOutlet.stackCtrl.activeView &&
            nav.topOutlet.stackCtrl.activeView && nav.topOutlet.stackCtrl.activeView.ref) {
            return nav.topOutlet.stackCtrl.activeView.ref.instance;
        }
        return null;
    }
}
HardwareBackButton.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HardwareBackButton.ctorParameters = () => [
    { type: NavController },
    { type: Navigator },
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
function moduleInitializer(environment) {
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

export { Environment, fadeAnimation, safePushAnimation, Navigator, HardwareBackButton, moduleInitializer, OkodeNgxCommonModule };

//# sourceMappingURL=okode-ngx-common.js.map