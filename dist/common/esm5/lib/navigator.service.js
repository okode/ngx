/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NavController, Config } from '@ionic/angular';
import { iosTransitionAnimation } from '@ionic/core/dist/collection/utils/transition/ios.transition';
import { mdTransitionAnimation } from '@ionic/core/dist/collection/utils/transition/md.transition';
var Navigator = /** @class */ (function () {
    function Navigator(navCtrl, config) {
        this.navCtrl = navCtrl;
        this.config = config;
        this.animation = 'default';
        this.animationConfigReady = false;
        this.startNavFlow = false;
        this.defaultAnimation = 'default';
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
        /** @type {?} */
        var targetUrl = url || this.getPreviousPageUrl();
        if (!targetUrl) {
            return Promise.resolve(false);
        }
        return this.navCtrl.navigateBack(targetUrl);
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
        var views = tslib_1.__spread(this.getViews()).reverse();
        /** @type {?} */
        var currentNavFlow = views.findIndex((/**
         * @param {?} v
         * @return {?}
         */
        function (v) { return v.element.getAttribute('new-nav-flow'); }));
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
        var c = tslib_1.__assign({}, this.navCtrl);
        /** @type {?} */
        var views = [];
        if (c && c.topOutlet && c.topOutlet.stackCtrl) {
            views = c.topOutlet.stackCtrl.views;
        }
        return views;
    };
    /**
     * @param {?} animation
     * @return {?}
     */
    Navigator.prototype.setDefaultAnimation = /**
     * @param {?} animation
     * @return {?}
     */
    function (animation) {
        this.defaultAnimation = animation;
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
        return (views && views.length > 1) ? views[views.length - 2].url : null;
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
        this.config.set('navAnimation', (/**
         * @param {?} AnimationC
         * @param {?} baseEl
         * @param {?} opts
         * @return {?}
         */
        function (AnimationC, baseEl, opts) {
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
            if (anim === 'default') {
                anim = _this.defaultAnimation;
            }
            switch (anim) {
                case 'default':
                    return ios ? animationPush(AnimationC, baseEl, opts)
                        : animationModal(AnimationC, baseEl, opts);
                case 'push': return animationPush(AnimationC, baseEl, opts);
                case 'modal': return animationModal(AnimationC, baseEl, opts);
                case 'fade': return animationFade(AnimationC, baseEl, opts);
                case 'safepush': return animationSafePush(AnimationC, baseEl, opts);
                default: return animationModal(AnimationC, baseEl, opts);
            }
        }));
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
export { Navigator };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Navigator.prototype.params;
    /**
     * @type {?}
     * @private
     */
    Navigator.prototype.animation;
    /**
     * @type {?}
     * @private
     */
    Navigator.prototype.animationConfigReady;
    /**
     * @type {?}
     * @private
     */
    Navigator.prototype.startNavFlow;
    /**
     * @type {?}
     * @private
     */
    Navigator.prototype.defaultAnimation;
    /**
     * @type {?}
     * @private
     */
    Navigator.prototype.navCtrl;
    /**
     * @type {?}
     * @private
     */
    Navigator.prototype.config;
}
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
export function fadeAnimation(AnimationC, _, opts) {
    /** @type {?} */
    var getIonPageElement = (/**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element.classList.contains('ion-page')) {
            return element;
        }
        /** @type {?} */
        var page = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
        return page || element;
    });
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
export function safePushAnimation(AnimationC, _, opts) {
    /** @type {?} */
    var getIonPageElement = (/**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element.classList.contains('ion-page')) {
            return element;
        }
        /** @type {?} */
        var page = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
        return page || element;
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNyRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUVuRztJQVNFLG1CQUNVLE9BQXNCLEVBQ3RCLE1BQWM7UUFEZCxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFQaEIsY0FBUyxHQUF1RCxTQUFTLENBQUM7UUFDMUUseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHFCQUFnQixHQUF1RCxTQUFTLENBQUM7SUFLdEYsQ0FBQzs7OztJQUVKLDZCQUFTOzs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7Ozs7OztJQUVELHdCQUFJOzs7Ozs7O0lBQUosVUFDRSxHQUFXLEVBQ1gsTUFBVyxFQUNYLFNBQXlFLEVBQ3pFLFlBQW9CO1FBRHBCLDBCQUFBLEVBQUEscUJBQXlFO1FBQ3pFLDZCQUFBLEVBQUEsb0JBQW9CO1FBRXBCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUFFO1FBQzlELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Ozs7O0lBRUQsdUJBQUc7Ozs7O0lBQUgsVUFBSSxHQUFZLEVBQUUsTUFBVztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7WUFDZixTQUFTLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtRQUNsRCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsNkJBQVM7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFFRCwyQkFBTzs7Ozs7SUFBUCxVQUFRLEdBQVcsRUFBRSxNQUFXO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFRCx1Q0FBbUI7Ozs7SUFBbkIsVUFBb0IsTUFBVzs7WUFDdkIsS0FBSyxHQUFHLGlCQUFJLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUU7O1lBQ3RDLGNBQWMsR0FBRyxLQUFLLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLEVBQXRDLENBQXNDLEVBQUM7O1lBQzdFLFVBQVUsR0FBRyxjQUFjLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO1FBQzdGLE9BQU8sVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMxRSxDQUFDOzs7O0lBRUQsNEJBQVE7OztJQUFSOztZQUNRLENBQUMsd0JBQWEsSUFBSSxDQUFDLE9BQU8sQ0FBRTs7WUFDOUIsS0FBSyxHQUFHLEVBQUU7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztTQUFFO1FBQ3ZGLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCx1Q0FBbUI7Ozs7SUFBbkIsVUFBb0IsU0FBNkQ7UUFDL0UsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztJQUNwQyxDQUFDOzs7OztJQUVPLHNDQUFrQjs7OztJQUExQjs7WUFDUSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUM3QixPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzFFLENBQUM7Ozs7O0lBRU8sa0NBQWM7Ozs7SUFBdEI7O1lBQ1EsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDN0IsT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVPLHNDQUFrQjs7OztJQUExQjtRQUFBLGlCQTJCQztRQTFCQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWM7Ozs7OztRQUM1QixVQUFDLFVBQXFCLEVBQUUsTUFBbUIsRUFBRSxJQUFTOztnQkFDaEQsSUFBSSxHQUFHLEtBQUksQ0FBQyxTQUFTO1lBQ3pCLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7Z0JBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQ3hEO2lCQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLElBQUksS0FBSSxDQUFDLFlBQVksRUFBRTtnQkFDNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNuRCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQzthQUMzQjtZQUNELElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7O2dCQUN6RCxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLENBQUM7WUFDekMsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUFFLElBQUksR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUM7YUFBRTtZQUN6RCxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLFNBQVM7b0JBQ1osT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFXLGFBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQzt3QkFDbkQsQ0FBQyxDQUFXLGNBQWMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNsRSxLQUFLLE1BQU0sQ0FBQyxDQUFNLE9BQU8sYUFBYSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2pFLEtBQUssT0FBTyxDQUFDLENBQUssT0FBTyxjQUFjLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbEUsS0FBSyxNQUFNLENBQUMsQ0FBTSxPQUFPLGFBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqRSxLQUFLLFVBQVUsQ0FBQyxDQUFFLE9BQU8saUJBQWlCLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDckUsT0FBTyxDQUFDLENBQVUsT0FBTyxjQUFjLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNuRTtRQUNILENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBeEdGLFVBQVU7Ozs7Z0JBTEYsYUFBYTtnQkFBRSxNQUFNOztJQStHOUIsZ0JBQUM7Q0FBQSxBQTFHRCxJQTBHQztTQXpHWSxTQUFTOzs7Ozs7SUFFcEIsMkJBQWU7Ozs7O0lBQ2YsOEJBQWtGOzs7OztJQUNsRix5Q0FBcUM7Ozs7O0lBQ3JDLGlDQUE2Qjs7Ozs7SUFDN0IscUNBQXlGOzs7OztJQUd2Riw0QkFBOEI7Ozs7O0lBQzlCLDJCQUFzQjs7Ozs7Ozs7QUFpRzFCLFNBQVMsYUFBYSxDQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQU8sc0JBQXNCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7QUFDakYsU0FBUyxjQUFjLENBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUssT0FBTyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztBQUNoRixTQUFTLGFBQWEsQ0FBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztBQUN4RSxTQUFTLGlCQUFpQixDQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQU8saUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7QUFFNUUsTUFBTSxVQUFVLGFBQWEsQ0FBQyxVQUFxQixFQUFFLENBQWMsRUFBRSxJQUFTOztRQUN0RSxpQkFBaUI7Ozs7SUFBRyxVQUFVLE9BQW9CO1FBQ3RELElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFBRSxPQUFPLE9BQU8sQ0FBQztTQUFFOztZQUN6RCxJQUFJLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyx5REFBeUQsQ0FBQztRQUM3RixPQUFPLElBQUksSUFBSSxPQUFPLENBQUM7SUFDekIsQ0FBQyxDQUFBOztRQUNLLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVTs7UUFDNUIsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTOztRQUMxQixjQUFjLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDOztRQUM5QyxjQUFjLEdBQUcsSUFBSSxVQUFVLEVBQUU7SUFDdkMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2xGLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUUsRUFBRSwrQkFBK0I7UUFDOUQsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0tBQzFGO1NBQU07UUFDTCxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDO2FBQzFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM5RTs7UUFDSyxrQkFBa0IsR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztJQUN0RSxJQUFJLGtCQUFrQixFQUFFLEVBQUUsZ0NBQWdDOzs7WUFDbEQsZUFBZSxHQUFHLElBQUksVUFBVSxFQUFFO1FBQ3hDLGVBQWUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUMvQyxjQUFjLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QscUJBQXFCO0lBQ3JCLElBQUksU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUMsRUFBRSxFQUFFLGtCQUFrQjtRQUNoRSxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7O1lBQ25GLFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUNwQyxXQUFXLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0UsY0FBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUNqQztJQUNELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN6QyxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLFVBQXFCLEVBQUUsQ0FBYyxFQUFFLElBQVM7O1FBQzFFLGlCQUFpQjs7OztJQUFHLFVBQVUsT0FBb0I7UUFDdEQsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUFFLE9BQU8sT0FBTyxDQUFDO1NBQUU7O1lBQ3pELElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLHlEQUF5RCxDQUFDO1FBQzdGLE9BQU8sSUFBSSxJQUFJLE9BQU8sQ0FBQztJQUN6QixDQUFDLENBQUE7O1FBQ0ssVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVOztRQUM1QixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVM7O1FBQzFCLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUM7O1FBQzlDLGNBQWMsR0FBRyxJQUFJLFVBQVUsRUFBRTtJQUN2QyxjQUFjLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEYsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDOztRQUNqRixXQUFXLEdBQUcsSUFBSSxVQUFVLEVBQUU7O1FBQzlCLFlBQVksR0FBRyxJQUFJLFVBQVUsRUFBRTtJQUNyQyxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO1FBQzdCLFdBQVcsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RixZQUFZLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDM0Y7U0FBTTtRQUNMLFdBQVcsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUN4RixZQUFZLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDMUY7SUFDRCxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2hDLGNBQWMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakMsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBDb25maWcgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tICdAaW9uaWMvY29yZSc7XG5pbXBvcnQgeyBpb3NUcmFuc2l0aW9uQW5pbWF0aW9uIH0gZnJvbSAnQGlvbmljL2NvcmUvZGlzdC9jb2xsZWN0aW9uL3V0aWxzL3RyYW5zaXRpb24vaW9zLnRyYW5zaXRpb24nO1xuaW1wb3J0IHsgbWRUcmFuc2l0aW9uQW5pbWF0aW9uIH0gZnJvbSAnQGlvbmljL2NvcmUvZGlzdC9jb2xsZWN0aW9uL3V0aWxzL3RyYW5zaXRpb24vbWQudHJhbnNpdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0b3Ige1xuXG4gIHByaXZhdGUgcGFyYW1zO1xuICBwcml2YXRlIGFuaW1hdGlvbjogJ2RlZmF1bHQnIHwgJ3B1c2gnIHwgJ21vZGFsJyB8ICdmYWRlJyB8wqAnc2FmZXB1c2gnID0gJ2RlZmF1bHQnO1xuICBwcml2YXRlIGFuaW1hdGlvbkNvbmZpZ1JlYWR5ID0gZmFsc2U7XG4gIHByaXZhdGUgc3RhcnROYXZGbG93ID0gZmFsc2U7XG4gIHByaXZhdGUgZGVmYXVsdEFuaW1hdGlvbjogJ2RlZmF1bHQnIHwgJ3B1c2gnIHwgJ21vZGFsJyB8ICdmYWRlJyB8wqAnc2FmZXB1c2gnID0gJ2RlZmF1bHQnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmF2Q3RybDogTmF2Q29udHJvbGxlcixcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnXG4gICkge31cblxuICBnZXRQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICB9XG5cbiAgcHVzaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM/OiB7fSxcbiAgICBhbmltYXRpb246ICdkZWZhdWx0JyB8wqAncHVzaCcgfCAnbW9kYWwnIHwgJ2ZhZGUnIHwgJ3NhZmVwdXNoJyA9ICdkZWZhdWx0JyxcbiAgICBzdGFydE5hdkZsb3cgPSBmYWxzZVxuICApIHtcbiAgICBpZiAoIXRoaXMuYW5pbWF0aW9uQ29uZmlnUmVhZHkpIHsgdGhpcy5zZXRBbmltYXRpb25Db25maWcoKTsgfVxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgIHRoaXMuc3RhcnROYXZGbG93ID0gc3RhcnROYXZGbG93O1xuICAgIHJldHVybiB0aGlzLm5hdkN0cmwubmF2aWdhdGVGb3J3YXJkKHVybCk7XG4gIH1cblxuICBwb3AodXJsPzogc3RyaW5nLCBwYXJhbXM/OiB7fSkge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIGNvbnN0IHRhcmdldFVybCA9IHVybCB8fMKgdGhpcy5nZXRQcmV2aW91c1BhZ2VVcmwoKTtcbiAgICBpZiAoIXRhcmdldFVybCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm5hdkN0cmwubmF2aWdhdGVCYWNrKHRhcmdldFVybCk7XG4gIH1cblxuICBwb3BUb1Jvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZUJhY2sodGhpcy5nZXRSb290UGFnZVVybCgpKTtcbiAgfVxuXG4gIHNldFJvb3QodXJsOiBzdHJpbmcsIHBhcmFtcz86IHt9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZVJvb3QodXJsKTtcbiAgfVxuXG4gIGNsb3NlQ3VycmVudE5hdkZsb3cocGFyYW1zPzoge30pIHtcbiAgICBjb25zdCB2aWV3cyA9IFsuLi50aGlzLmdldFZpZXdzKCldLnJldmVyc2UoKTtcbiAgICBjb25zdCBjdXJyZW50TmF2RmxvdyA9IHZpZXdzLmZpbmRJbmRleCh2ID0+IHYuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25ldy1uYXYtZmxvdycpKTtcbiAgICBjb25zdCB0YXJnZXRQYWdlID0gY3VycmVudE5hdkZsb3cgPj0gMCAmJiB2aWV3cy5sZW5ndGggPiAxID8gdmlld3NbY3VycmVudE5hdkZsb3cgKyAxXSA6IG51bGw7XG4gICAgcmV0dXJuIHRhcmdldFBhZ2UgPyB0aGlzLnBvcCh0YXJnZXRQYWdlLnVybCwgcGFyYW1zKSA6IHRoaXMucG9wVG9Sb290KCk7XG4gIH1cblxuICBnZXRWaWV3cygpIHtcbiAgICBjb25zdCBjOiBhbnkgPSB7IC4uLnRoaXMubmF2Q3RybCB9O1xuICAgIGxldCB2aWV3cyA9IFtdO1xuICAgIGlmIChjICYmIGMudG9wT3V0bGV0ICYmIGMudG9wT3V0bGV0LnN0YWNrQ3RybCkgeyB2aWV3cyA9IGMudG9wT3V0bGV0LnN0YWNrQ3RybC52aWV3czsgfVxuICAgIHJldHVybiB2aWV3cztcbiAgfVxuXG4gIHNldERlZmF1bHRBbmltYXRpb24oYW5pbWF0aW9uOiAnZGVmYXVsdCcgfCAncHVzaCcgfCAnbW9kYWwnIHwgJ2ZhZGUnIHzCoCdzYWZlcHVzaCcpIHtcbiAgICB0aGlzLmRlZmF1bHRBbmltYXRpb24gPSBhbmltYXRpb247XG4gIH1cblxuICBwcml2YXRlIGdldFByZXZpb3VzUGFnZVVybCgpIHtcbiAgICBjb25zdCB2aWV3cyA9IHRoaXMuZ2V0Vmlld3MoKTtcbiAgICByZXR1cm4gKHZpZXdzICYmIHZpZXdzLmxlbmd0aCA+IDEpID8gdmlld3Nbdmlld3MubGVuZ3RoIC0gMl0udXJsIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um9vdFBhZ2VVcmwoKSB7XG4gICAgY29uc3Qgdmlld3MgPSB0aGlzLmdldFZpZXdzKCk7XG4gICAgcmV0dXJuICh2aWV3cyAmJiB2aWV3cy5sZW5ndGgpID8gdmlld3NbMF0udXJsIDogJyc7XG4gIH1cblxuICBwcml2YXRlIHNldEFuaW1hdGlvbkNvbmZpZygpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZ1JlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLmNvbmZpZy5zZXQoJ25hdkFuaW1hdGlvbicsXG4gICAgICAoQW5pbWF0aW9uQzogQW5pbWF0aW9uLCBiYXNlRWw6IEhUTUxFbGVtZW50LCBvcHRzOiBhbnkpOiBQcm9taXNlPEFuaW1hdGlvbj4gPT4ge1xuICAgICAgICBsZXQgYW5pbSA9wqB0aGlzLmFuaW1hdGlvbjtcbiAgICAgICAgaWYgKG9wdHMuZGlyZWN0aW9uID09PSAnYmFjaycpIHtcbiAgICAgICAgICBhbmltID0gb3B0cy5lbnRlcmluZ0VsLmdldEF0dHJpYnV0ZSgnYW5pbWF0aW9uLWxlYXZlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0cy5kaXJlY3Rpb24gPT09ICdmb3J3YXJkJyAmJiB0aGlzLnN0YXJ0TmF2Rmxvdykge1xuICAgICAgICAgIG9wdHMuZW50ZXJpbmdFbC5zZXRBdHRyaWJ1dGUoJ25ldy1uYXYtZmxvdycsIHRydWUpO1xuICAgICAgICAgIHRoaXMuc3RhcnROYXZGbG93ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgb3B0cy5lbnRlcmluZ0VsLnNldEF0dHJpYnV0ZSgnYW5pbWF0aW9uLWVudGVyJywgdGhpcy5hbmltYXRpb24pO1xuICAgICAgICBvcHRzLmxlYXZpbmdFbC5zZXRBdHRyaWJ1dGUoJ2FuaW1hdGlvbi1sZWF2ZScsIHRoaXMuYW5pbWF0aW9uKTtcbiAgICAgICAgY29uc3QgaW9zID0gKG9wdHMgJiYgb3B0cy5tb2RlID09PSAnaW9zJyk7XG4gICAgICAgIGlmIChhbmltID09PSAnZGVmYXVsdCcpIHsgYW5pbSA9IHRoaXMuZGVmYXVsdEFuaW1hdGlvbjsgfVxuICAgICAgICBzd2l0Y2ggKGFuaW0pIHtcbiAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgIHJldHVybiBpb3MgPyAgICAgICAgICAgYW5pbWF0aW9uUHVzaChBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpXG4gICAgICAgICAgICAgICAgICAgICAgIDogICAgICAgICAgIGFuaW1hdGlvbk1vZGFsKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgY2FzZSAncHVzaCc6ICAgICAgcmV0dXJuIGFuaW1hdGlvblB1c2goQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgICBjYXNlICdtb2RhbCc6ICAgICByZXR1cm4gYW5pbWF0aW9uTW9kYWwoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgICBjYXNlICdmYWRlJzogICAgICByZXR1cm4gYW5pbWF0aW9uRmFkZShBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpO1xuICAgICAgICAgIGNhc2UgJ3NhZmVwdXNoJzogIHJldHVybiBhbmltYXRpb25TYWZlUHVzaChBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpO1xuICAgICAgICAgIGRlZmF1bHQ6ICAgICAgICAgIHJldHVybiBhbmltYXRpb25Nb2RhbChBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGFuaW1hdGlvblB1c2ggICAgIChhLCBiLCBvKSAgeyByZXR1cm4gaW9zVHJhbnNpdGlvbkFuaW1hdGlvbihhLCBiLCBvKTsgfVxuZnVuY3Rpb24gYW5pbWF0aW9uTW9kYWwgICAgKGEsIGIsIG8pICB7IHJldHVybiBtZFRyYW5zaXRpb25BbmltYXRpb24oYSwgYiwgbyk7IH1cbmZ1bmN0aW9uIGFuaW1hdGlvbkZhZGUgICAgIChhLCBiLCBvKSAgeyByZXR1cm4gZmFkZUFuaW1hdGlvbihhLCBiLCBvKTsgfVxuZnVuY3Rpb24gYW5pbWF0aW9uU2FmZVB1c2ggKGEsIGIsIG8pICB7IHJldHVybiBzYWZlUHVzaEFuaW1hdGlvbihhLCBiLCBvKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmFkZUFuaW1hdGlvbihBbmltYXRpb25DOiBBbmltYXRpb24sIF86IEhUTUxFbGVtZW50LCBvcHRzOiBhbnkpIHtcbiAgY29uc3QgZ2V0SW9uUGFnZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lvbi1wYWdlJykpIHsgcmV0dXJuIGVsZW1lbnQ7IH1cbiAgICBjb25zdCBwYWdlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAuaW9uLXBhZ2UsIDpzY29wZSA+IGlvbi1uYXYsIDpzY29wZSA+IGlvbi10YWJzJyk7XG4gICAgcmV0dXJuIHBhZ2UgfHwgZWxlbWVudDtcbiAgfTtcbiAgY29uc3QgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcbiAgY29uc3QgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XG4gIGNvbnN0IGlvblBhZ2VFbGVtZW50ID0gZ2V0SW9uUGFnZUVsZW1lbnQoZW50ZXJpbmdFbCk7XG4gIGNvbnN0IHJvb3RUcmFuc2l0aW9uID0gbmV3IEFuaW1hdGlvbkMoKTtcbiAgcm9vdFRyYW5zaXRpb24uYWRkRWxlbWVudChpb25QYWdlRWxlbWVudCkuYmVmb3JlUmVtb3ZlQ2xhc3MoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xuICBpZiAob3B0cy5kaXJlY3Rpb24gPT09ICdiYWNrJykgeyAvLyBhbmltYXRlIHRoZSBjb21wb25lbnQgaXRzZWxmXG4gICAgcm9vdFRyYW5zaXRpb24uZHVyYXRpb24ob3B0cy5kdXJhdGlvbiB8fCAzMDApLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuNDcsMCwwLjc0NSwwLjcxNSknKTtcbiAgfSBlbHNlIHtcbiAgICByb290VHJhbnNpdGlvbi5kdXJhdGlvbihvcHRzLmR1cmF0aW9uIHx8IDQwMClcbiAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllcigwLjM2LDAuNjYsMC4wNCwxKScpLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDEsIHRydWUpO1xuICB9XG4gIGNvbnN0IGVudGVyaW5nVG9vbGJhckVsZSA9IGlvblBhZ2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi10b29sYmFyJyk7XG4gIGlmIChlbnRlcmluZ1Rvb2xiYXJFbGUpIHsgLy8gQW5pbWF0ZSB0b29sYmFyIGlmIGl0J3MgdGhlcmVcbiAgICBjb25zdCBlbnRlcmluZ1Rvb2xCYXIgPSBuZXcgQW5pbWF0aW9uQygpO1xuICAgIGVudGVyaW5nVG9vbEJhci5hZGRFbGVtZW50KGVudGVyaW5nVG9vbGJhckVsZSk7XG4gICAgcm9vdFRyYW5zaXRpb24uYWRkKGVudGVyaW5nVG9vbEJhcik7XG4gIH1cbiAgLy8gc2V0dXAgbGVhdmluZyB2aWV3XG4gIGlmIChsZWF2aW5nRWwgJiYgKG9wdHMuZGlyZWN0aW9uID09PSAnYmFjaycpKSB7IC8vIGxlYXZpbmcgY29udGVudFxuICAgIHJvb3RUcmFuc2l0aW9uLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgMzAwKS5lYXNpbmcoJ2N1YmljLWJlemllcigwLjQ3LDAsMC43NDUsMC43MTUpJyk7XG4gICAgY29uc3QgbGVhdmluZ1BhZ2UgPSBuZXcgQW5pbWF0aW9uQygpO1xuICAgIGxlYXZpbmdQYWdlLmFkZEVsZW1lbnQoZ2V0SW9uUGFnZUVsZW1lbnQobGVhdmluZ0VsKSkuZnJvbVRvKCdvcGFjaXR5JywgMSwgMCk7XG4gICAgcm9vdFRyYW5zaXRpb24uYWRkKGxlYXZpbmdQYWdlKTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJvb3RUcmFuc2l0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhZmVQdXNoQW5pbWF0aW9uKEFuaW1hdGlvbkM6IEFuaW1hdGlvbiwgXzogSFRNTEVsZW1lbnQsIG9wdHM6IGFueSkge1xuICBjb25zdCBnZXRJb25QYWdlRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaW9uLXBhZ2UnKSkgeyByZXR1cm4gZWxlbWVudDsgfVxuICAgIGNvbnN0IHBhZ2UgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC5pb24tcGFnZSwgOnNjb3BlID4gaW9uLW5hdiwgOnNjb3BlID4gaW9uLXRhYnMnKTtcbiAgICByZXR1cm4gcGFnZSB8fCBlbGVtZW50O1xuICB9O1xuICBjb25zdCBlbnRlcmluZ0VsID0gb3B0cy5lbnRlcmluZ0VsO1xuICBjb25zdCBsZWF2aW5nRWwgPSBvcHRzLmxlYXZpbmdFbDtcbiAgY29uc3QgaW9uUGFnZUVsZW1lbnQgPSBnZXRJb25QYWdlRWxlbWVudChlbnRlcmluZ0VsKTtcbiAgY29uc3Qgcm9vdFRyYW5zaXRpb24gPSBuZXcgQW5pbWF0aW9uQygpO1xuICByb290VHJhbnNpdGlvbi5hZGRFbGVtZW50KGlvblBhZ2VFbGVtZW50KS5iZWZvcmVSZW1vdmVDbGFzcygnaW9uLXBhZ2UtaW52aXNpYmxlJyk7XG4gIHJvb3RUcmFuc2l0aW9uLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgNTAwKS5lYXNpbmcoJ2N1YmljLWJlemllcigwLjM2LDAuNjYsMC4wNCwxKScpO1xuICBjb25zdCBsZWF2aW5nUGFnZSA9IG5ldyBBbmltYXRpb25DKCk7XG4gIGNvbnN0IGVudGVyaW5nUGFnZSA9IG5ldyBBbmltYXRpb25DKCk7XG4gIGlmIChvcHRzLmRpcmVjdGlvbiA9PT0gJ2JhY2snKSB7XG4gICAgbGVhdmluZ1BhZ2UuYWRkRWxlbWVudChnZXRJb25QYWdlRWxlbWVudChsZWF2aW5nRWwpKS5mcm9tVG8oJ3RyYW5zbGF0ZVgnLCAnMCcsICcxMDAlJyk7XG4gICAgZW50ZXJpbmdQYWdlLmFkZEVsZW1lbnQoZ2V0SW9uUGFnZUVsZW1lbnQoZW50ZXJpbmdFbCkpLmZyb21UbygndHJhbnNsYXRlWCcsICctMTAwJScsICcwJyk7XG4gIH0gZWxzZSB7XG4gICAgbGVhdmluZ1BhZ2UuYWRkRWxlbWVudChnZXRJb25QYWdlRWxlbWVudChsZWF2aW5nRWwpKS5mcm9tVG8oJ3RyYW5zbGF0ZVgnLCAnMCcsICctMTAwJScpO1xuICAgIGVudGVyaW5nUGFnZS5hZGRFbGVtZW50KGdldElvblBhZ2VFbGVtZW50KGVudGVyaW5nRWwpKS5mcm9tVG8oJ3RyYW5zbGF0ZVgnLCAnMTAwJScsICcwJyk7XG4gIH1cbiAgcm9vdFRyYW5zaXRpb24uYWRkKGxlYXZpbmdQYWdlKTtcbiAgcm9vdFRyYW5zaXRpb24uYWRkKGVudGVyaW5nUGFnZSk7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUocm9vdFRyYW5zaXRpb24pO1xufVxuXG4iXX0=