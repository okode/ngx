/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.animation = 'push';
        this.setAnimationConfig();
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
        if (animation === void 0) { animation = 'default'; }
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
        var c = tslib_1.__assign({}, this.navCtrl);
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
                    if (ios)
                        return animationPush(AnimationC, baseEl, opts);
                    else
                        return animationModal(AnimationC, baseEl, opts);
                case 'push': return animationPush(AnimationC, baseEl, opts);
                case 'modal': return animationModal(AnimationC, baseEl, opts);
                case 'fade': return animationFade(AnimationC, baseEl, opts);
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
 * @param {?} AnimationC
 * @param {?} _
 * @param {?} opts
 * @return {?}
 */
export function fadeAnimation(AnimationC, _, opts) {
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
        rootTransition.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
    }
    else {
        rootTransition.duration(opts.duration || 280)
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
        rootTransition.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
        /** @type {?} */
        var leavingPage = new AnimationC();
        leavingPage.addElement(getIonPageElement(leavingEl)).fromTo('opacity', 1, 0);
        rootTransition.add(leavingPage);
    }
    return Promise.resolve(rootTransition);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNyRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUVuRztJQU1FLG1CQUNVLE9BQXNCLEVBQ3RCLE1BQWM7UUFEZCxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKaEIsY0FBUyxHQUEwQyxNQUFNLENBQUM7UUFNaEUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELDZCQUFTOzs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7Ozs7O0lBRUQsd0JBQUk7Ozs7OztJQUFKLFVBQUssR0FBVyxFQUFFLE1BQVcsRUFBRSxTQUE0RDtRQUE1RCwwQkFBQSxFQUFBLHFCQUE0RDtRQUN6RixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVELHVCQUFHOzs7OztJQUFILFVBQUksR0FBWSxFQUFFLE1BQVc7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7O0lBRUQsNkJBQVM7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQztJQUMxRCxDQUFDOzs7Ozs7SUFFRCwyQkFBTzs7Ozs7SUFBUCxVQUFRLEdBQVcsRUFBRSxNQUFXO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELDRCQUFROzs7SUFBUjs7WUFDUSxDQUFDLHdCQUFhLElBQUksQ0FBQyxPQUFPLENBQUU7O1lBQzlCLEtBQUssR0FBRyxFQUFFO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FBRTtRQUN2RixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7O0lBRU8sc0NBQWtCOzs7O0lBQTFCOztZQUNRLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQzdCLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEUsQ0FBQzs7Ozs7SUFFTyxrQ0FBYzs7OztJQUF0Qjs7WUFDUSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUM3QixPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRU8sc0NBQWtCOzs7O0lBQTFCO1FBQUEsaUJBbUJDO1FBbEJDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFDNUIsVUFBQyxVQUFxQixFQUFFLE1BQW1CLEVBQUUsSUFBUzs7Z0JBQ2hELElBQUksR0FBRyxLQUFJLENBQUMsU0FBUztZQUN6QixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO2dCQUFFLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQUU7WUFDMUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Z0JBQ3pELEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQztZQUN6QyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLFNBQVM7b0JBQ1osSUFBSSxHQUFHO3dCQUFLLE9BQU8sYUFBYSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7O3dCQUMvQyxPQUFPLGNBQWMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM5RCxLQUFLLE1BQU0sQ0FBQyxDQUFFLE9BQU8sYUFBYSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzdELEtBQUssT0FBTyxDQUFDLENBQUMsT0FBTyxjQUFjLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDOUQsS0FBSyxNQUFNLENBQUMsQ0FBRSxPQUFPLGFBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM3RCxPQUFPLENBQUMsQ0FBTSxPQUFPLGNBQWMsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQy9EO1FBQ0gsQ0FBQyxDQUNGLENBQUM7SUFDSixDQUFDOztnQkF6RUYsVUFBVTs7OztnQkFMRixhQUFhO2dCQUFFLE1BQU07O0lBZ0Y5QixnQkFBQztDQUFBLEFBM0VELElBMkVDO1NBMUVZLFNBQVM7Ozs7OztJQUVwQiwyQkFBZTs7Ozs7SUFDZiw4QkFBa0U7Ozs7O0lBR2hFLDRCQUE4Qjs7Ozs7SUFDOUIsMkJBQXNCOzs7Ozs7OztBQXFFMUIsU0FBUyxhQUFhLENBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUssT0FBTyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztBQUNoRixTQUFTLGNBQWMsQ0FBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFPLHFCQUFxQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0FBQy9FLFNBQVMsYUFBYSxDQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0FBRXZFLE1BQU0sVUFBVSxhQUFhLENBQUMsVUFBcUIsRUFBRSxDQUFjLEVBQUUsSUFBUzs7UUFDdEUsaUJBQWlCLEdBQUcsVUFBVSxPQUFvQjtRQUN0RCxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsT0FBTyxPQUFPLENBQUM7U0FBRTs7WUFDekQsSUFBSSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMseURBQXlELENBQUM7UUFDN0YsT0FBTyxJQUFJLElBQUksT0FBTyxDQUFDO0lBQ3pCLENBQUM7O1FBQ0ssVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVOztRQUM1QixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVM7O1FBQzFCLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUM7O1FBQzlDLGNBQWMsR0FBRyxJQUFJLFVBQVUsRUFBRTtJQUN2QyxjQUFjLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEYsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRSxFQUFFLCtCQUErQjtRQUM5RCxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7S0FDMUY7U0FBTTtRQUNMLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUM7YUFDMUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzlFOztRQUNLLGtCQUFrQixHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO0lBQ3RFLElBQUksa0JBQWtCLEVBQUUsRUFBRSxnQ0FBZ0M7OztZQUNsRCxlQUFlLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDeEMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQy9DLGNBQWMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDckM7SUFDRCxxQkFBcUI7SUFDckIsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxFQUFFLEVBQUUsa0JBQWtCO1FBQ2hFLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsa0NBQWtDLENBQUMsQ0FBQzs7WUFDbkYsV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFO1FBQ3BDLFdBQVcsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3RSxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ2pDO0lBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBDb25maWcgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tICdAaW9uaWMvY29yZSc7XG5pbXBvcnQgeyBpb3NUcmFuc2l0aW9uQW5pbWF0aW9uIH0gZnJvbSAnQGlvbmljL2NvcmUvZGlzdC9jb2xsZWN0aW9uL3V0aWxzL3RyYW5zaXRpb24vaW9zLnRyYW5zaXRpb24nO1xuaW1wb3J0IHsgbWRUcmFuc2l0aW9uQW5pbWF0aW9uIH0gZnJvbSAnQGlvbmljL2NvcmUvZGlzdC9jb2xsZWN0aW9uL3V0aWxzL3RyYW5zaXRpb24vbWQudHJhbnNpdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0b3Ige1xuXG4gIHByaXZhdGUgcGFyYW1zO1xuICBwcml2YXRlIGFuaW1hdGlvbjogJ2RlZmF1bHQnIHwgJ3B1c2gnIHwgJ21vZGFsJyB8ICdmYWRlJyA9ICdwdXNoJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ1xuICApIHtcbiAgICB0aGlzLnNldEFuaW1hdGlvbkNvbmZpZygpO1xuICB9XG5cbiAgZ2V0UGFyYW1zKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtcztcbiAgfVxuXG4gIHB1c2godXJsOiBzdHJpbmcsIHBhcmFtcz86IHt9LCBhbmltYXRpb246ICdkZWZhdWx0JyB8wqAncHVzaCcgfCAnbW9kYWwnIHwgJ2ZhZGUnID0gJ2RlZmF1bHQnKSB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb247XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZUZvcndhcmQodXJsKTtcbiAgfVxuXG4gIHBvcCh1cmw/OiBzdHJpbmcsIHBhcmFtcz86IHt9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZUJhY2sodXJsIHx8wqB0aGlzLmdldFByZXZpb3VzUGFnZVVybCgpKTtcbiAgfVxuXG4gIHBvcFRvUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZDdHJsLm5hdmlnYXRlQmFjayh0aGlzLmdldFJvb3RQYWdlVXJsKCkpO1xuICB9XG5cbiAgc2V0Um9vdCh1cmw6IHN0cmluZywgcGFyYW1zPzoge30pIHtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICByZXR1cm4gdGhpcy5uYXZDdHJsLm5hdmlnYXRlUm9vdCh1cmwpO1xuICB9XG5cbiAgZ2V0Vmlld3MoKSB7XG4gICAgY29uc3QgYzogYW55ID0geyAuLi50aGlzLm5hdkN0cmwgfTtcbiAgICBsZXQgdmlld3MgPSBbXTtcbiAgICBpZiAoYyAmJiBjLnRvcE91dGxldCAmJiBjLnRvcE91dGxldC5zdGFja0N0cmwpIHsgdmlld3MgPSBjLnRvcE91dGxldC5zdGFja0N0cmwudmlld3M7IH1cbiAgICByZXR1cm4gdmlld3M7XG4gIH1cblxuICBwcml2YXRlIGdldFByZXZpb3VzUGFnZVVybCgpIHtcbiAgICBjb25zdCB2aWV3cyA9IHRoaXMuZ2V0Vmlld3MoKTtcbiAgICByZXR1cm4gKHZpZXdzICYmIHZpZXdzLmxlbmd0aCA+IDEpID8gdmlld3Nbdmlld3MubGVuZ3RoIC0gMl0udXJsIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGdldFJvb3RQYWdlVXJsKCkge1xuICAgIGNvbnN0IHZpZXdzID0gdGhpcy5nZXRWaWV3cygpO1xuICAgIHJldHVybiAodmlld3MgJiYgdmlld3MubGVuZ3RoKSA/IHZpZXdzWzBdLnVybCA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBbmltYXRpb25Db25maWcoKSB7XG4gICAgdGhpcy5jb25maWcuc2V0KCduYXZBbmltYXRpb24nLFxuICAgICAgKEFuaW1hdGlvbkM6IEFuaW1hdGlvbiwgYmFzZUVsOiBIVE1MRWxlbWVudCwgb3B0czogYW55KTogUHJvbWlzZTxBbmltYXRpb24+ID0+IHtcbiAgICAgICAgbGV0IGFuaW0gPcKgdGhpcy5hbmltYXRpb247XG4gICAgICAgIGlmIChvcHRzLmRpcmVjdGlvbiA9PT0gJ2JhY2snKSB7IGFuaW0gPSBvcHRzLmVudGVyaW5nRWwuZ2V0QXR0cmlidXRlKCdhbmltYXRpb24tbGVhdmUnKTsgfVxuICAgICAgICBvcHRzLmVudGVyaW5nRWwuc2V0QXR0cmlidXRlKCdhbmltYXRpb24tZW50ZXInLCB0aGlzLmFuaW1hdGlvbik7XG4gICAgICAgIG9wdHMubGVhdmluZ0VsLnNldEF0dHJpYnV0ZSgnYW5pbWF0aW9uLWxlYXZlJywgdGhpcy5hbmltYXRpb24pO1xuICAgICAgICBjb25zdCBpb3MgPSAob3B0cyAmJiBvcHRzLm1vZGUgPT09ICdpb3MnKTtcbiAgICAgICAgc3dpdGNoIChhbmltKSB7XG4gICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICBpZiAoaW9zKSAgICByZXR1cm4gYW5pbWF0aW9uUHVzaChBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpO1xuICAgICAgICAgICAgZWxzZSAgICAgICAgcmV0dXJuIGFuaW1hdGlvbk1vZGFsKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgY2FzZSAncHVzaCc6ICByZXR1cm4gYW5pbWF0aW9uUHVzaChBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpO1xuICAgICAgICAgIGNhc2UgJ21vZGFsJzogcmV0dXJuIGFuaW1hdGlvbk1vZGFsKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgY2FzZSAnZmFkZSc6ICByZXR1cm4gYW5pbWF0aW9uRmFkZShBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpO1xuICAgICAgICAgIGRlZmF1bHQ6ICAgICAgcmV0dXJuIGFuaW1hdGlvbk1vZGFsKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gYW5pbWF0aW9uUHVzaCAgICAoYSwgYiwgbykgIHsgcmV0dXJuIGlvc1RyYW5zaXRpb25BbmltYXRpb24oYSwgYiwgbyk7IH1cbmZ1bmN0aW9uIGFuaW1hdGlvbk1vZGFsICAgKGEsIGIsIG8pICB7IHJldHVybiBtZFRyYW5zaXRpb25BbmltYXRpb24oYSwgYiwgbyk7IH1cbmZ1bmN0aW9uIGFuaW1hdGlvbkZhZGUgICAgKGEsIGIsIG8pICB7IHJldHVybiBmYWRlQW5pbWF0aW9uKGEsIGIsIG8pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmYWRlQW5pbWF0aW9uKEFuaW1hdGlvbkM6IEFuaW1hdGlvbiwgXzogSFRNTEVsZW1lbnQsIG9wdHM6IGFueSkge1xuICBjb25zdCBnZXRJb25QYWdlRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaW9uLXBhZ2UnKSkgeyByZXR1cm4gZWxlbWVudDsgfVxuICAgIGNvbnN0IHBhZ2UgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC5pb24tcGFnZSwgOnNjb3BlID4gaW9uLW5hdiwgOnNjb3BlID4gaW9uLXRhYnMnKTtcbiAgICByZXR1cm4gcGFnZSB8fCBlbGVtZW50O1xuICB9O1xuICBjb25zdCBlbnRlcmluZ0VsID0gb3B0cy5lbnRlcmluZ0VsO1xuICBjb25zdCBsZWF2aW5nRWwgPSBvcHRzLmxlYXZpbmdFbDtcbiAgY29uc3QgaW9uUGFnZUVsZW1lbnQgPSBnZXRJb25QYWdlRWxlbWVudChlbnRlcmluZ0VsKTtcbiAgY29uc3Qgcm9vdFRyYW5zaXRpb24gPSBuZXcgQW5pbWF0aW9uQygpO1xuICByb290VHJhbnNpdGlvbi5hZGRFbGVtZW50KGlvblBhZ2VFbGVtZW50KS5iZWZvcmVSZW1vdmVDbGFzcygnaW9uLXBhZ2UtaW52aXNpYmxlJyk7XG4gIGlmIChvcHRzLmRpcmVjdGlvbiA9PT0gJ2JhY2snKSB7IC8vIGFuaW1hdGUgdGhlIGNvbXBvbmVudCBpdHNlbGZcbiAgICByb290VHJhbnNpdGlvbi5kdXJhdGlvbihvcHRzLmR1cmF0aW9uIHx8IDIwMCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40NywwLDAuNzQ1LDAuNzE1KScpO1xuICB9IGVsc2Uge1xuICAgIHJvb3RUcmFuc2l0aW9uLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgMjgwKVxuICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuMzYsMC42NiwwLjA0LDEpJykuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSwgdHJ1ZSk7XG4gIH1cbiAgY29uc3QgZW50ZXJpbmdUb29sYmFyRWxlID0gaW9uUGFnZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXRvb2xiYXInKTtcbiAgaWYgKGVudGVyaW5nVG9vbGJhckVsZSkgeyAvLyBBbmltYXRlIHRvb2xiYXIgaWYgaXQncyB0aGVyZVxuICAgIGNvbnN0IGVudGVyaW5nVG9vbEJhciA9IG5ldyBBbmltYXRpb25DKCk7XG4gICAgZW50ZXJpbmdUb29sQmFyLmFkZEVsZW1lbnQoZW50ZXJpbmdUb29sYmFyRWxlKTtcbiAgICByb290VHJhbnNpdGlvbi5hZGQoZW50ZXJpbmdUb29sQmFyKTtcbiAgfVxuICAvLyBzZXR1cCBsZWF2aW5nIHZpZXdcbiAgaWYgKGxlYXZpbmdFbCAmJiAob3B0cy5kaXJlY3Rpb24gPT09ICdiYWNrJykpIHsgLy8gbGVhdmluZyBjb250ZW50XG4gICAgcm9vdFRyYW5zaXRpb24uZHVyYXRpb24ob3B0cy5kdXJhdGlvbiB8fCAyMDApLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuNDcsMCwwLjc0NSwwLjcxNSknKTtcbiAgICBjb25zdCBsZWF2aW5nUGFnZSA9IG5ldyBBbmltYXRpb25DKCk7XG4gICAgbGVhdmluZ1BhZ2UuYWRkRWxlbWVudChnZXRJb25QYWdlRWxlbWVudChsZWF2aW5nRWwpKS5mcm9tVG8oJ29wYWNpdHknLCAxLCAwKTtcbiAgICByb290VHJhbnNpdGlvbi5hZGQobGVhdmluZ1BhZ2UpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUocm9vdFRyYW5zaXRpb24pO1xufVxuIl19