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
        if (animation === void 0) { animation = 'default'; }
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
    Navigator.prototype.animationConfigReady;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNyRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUVuRztJQU9FLG1CQUNVLE9BQXNCLEVBQ3RCLE1BQWM7UUFEZCxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMaEIsY0FBUyxHQUEwQyxNQUFNLENBQUM7UUFDMUQseUJBQW9CLEdBQUcsS0FBSyxDQUFDO0lBS2xDLENBQUM7Ozs7SUFFSiw2QkFBUzs7O0lBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7OztJQUVELHdCQUFJOzs7Ozs7SUFBSixVQUFLLEdBQVcsRUFBRSxNQUFXLEVBQUUsU0FBNEQ7UUFBNUQsMEJBQUEsRUFBQSxxQkFBNEQ7UUFDekYsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQUU7UUFDOUQsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFRCx1QkFBRzs7Ozs7SUFBSCxVQUFJLEdBQVksRUFBRSxNQUFXO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7OztJQUVELDZCQUFTOzs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7O0lBRUQsMkJBQU87Ozs7O0lBQVAsVUFBUSxHQUFXLEVBQUUsTUFBVztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCw0QkFBUTs7O0lBQVI7O1lBQ1EsQ0FBQyx3QkFBYSxJQUFJLENBQUMsT0FBTyxDQUFFOztZQUM5QixLQUFLLEdBQUcsRUFBRTtRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1NBQUU7UUFDdkYsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVPLHNDQUFrQjs7OztJQUExQjs7WUFDUSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUM3QixPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hFLENBQUM7Ozs7O0lBRU8sa0NBQWM7Ozs7SUFBdEI7O1lBQ1EsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDN0IsT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVPLHNDQUFrQjs7OztJQUExQjtRQUFBLGlCQW9CQztRQW5CQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFDNUIsVUFBQyxVQUFxQixFQUFFLE1BQW1CLEVBQUUsSUFBUzs7Z0JBQ2hELElBQUksR0FBRyxLQUFJLENBQUMsU0FBUztZQUN6QixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssTUFBTSxFQUFFO2dCQUFFLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2FBQUU7WUFDMUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Z0JBQ3pELEdBQUcsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQztZQUN6QyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLFNBQVM7b0JBQ1osSUFBSSxHQUFHLEVBQUU7d0JBQUcsT0FBTyxhQUFhLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFBRTt5QkFDeEQ7d0JBQU8sT0FBTyxjQUFjLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFBRTtnQkFDaEUsS0FBSyxNQUFNLENBQUMsQ0FBRSxPQUFPLGFBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUM3RCxLQUFLLE9BQU8sQ0FBQyxDQUFDLE9BQU8sY0FBYyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzlELEtBQUssTUFBTSxDQUFDLENBQUUsT0FBTyxhQUFhLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDN0QsT0FBTyxDQUFDLENBQU0sT0FBTyxjQUFjLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzthQUMvRDtRQUNILENBQUMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBMUVGLFVBQVU7Ozs7Z0JBTEYsYUFBYTtnQkFBRSxNQUFNOztJQWlGOUIsZ0JBQUM7Q0FBQSxBQTVFRCxJQTRFQztTQTNFWSxTQUFTOzs7Ozs7SUFFcEIsMkJBQWU7Ozs7O0lBQ2YsOEJBQWtFOzs7OztJQUNsRSx5Q0FBcUM7Ozs7O0lBR25DLDRCQUE4Qjs7Ozs7SUFDOUIsMkJBQXNCOzs7Ozs7OztBQXFFMUIsU0FBUyxhQUFhLENBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUssT0FBTyxzQkFBc0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7OztBQUNoRixTQUFTLGNBQWMsQ0FBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFPLHFCQUFxQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0FBQy9FLFNBQVMsYUFBYSxDQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0FBRXZFLE1BQU0sVUFBVSxhQUFhLENBQUMsVUFBcUIsRUFBRSxDQUFjLEVBQUUsSUFBUzs7UUFDdEUsaUJBQWlCLEdBQUcsVUFBVSxPQUFvQjtRQUN0RCxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQUUsT0FBTyxPQUFPLENBQUM7U0FBRTs7WUFDekQsSUFBSSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMseURBQXlELENBQUM7UUFDN0YsT0FBTyxJQUFJLElBQUksT0FBTyxDQUFDO0lBQ3pCLENBQUM7O1FBQ0ssVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVOztRQUM1QixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVM7O1FBQzFCLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxVQUFVLENBQUM7O1FBQzlDLGNBQWMsR0FBRyxJQUFJLFVBQVUsRUFBRTtJQUN2QyxjQUFjLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEYsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRSxFQUFFLCtCQUErQjtRQUM5RCxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLGtDQUFrQyxDQUFDLENBQUM7S0FDMUY7U0FBTTtRQUNMLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUM7YUFDMUMsTUFBTSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzlFOztRQUNLLGtCQUFrQixHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDO0lBQ3RFLElBQUksa0JBQWtCLEVBQUUsRUFBRSxnQ0FBZ0M7OztZQUNsRCxlQUFlLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDeEMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQy9DLGNBQWMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDckM7SUFDRCxxQkFBcUI7SUFDckIsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxFQUFFLEVBQUUsa0JBQWtCO1FBQ2hFLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsa0NBQWtDLENBQUMsQ0FBQzs7WUFDbkYsV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFO1FBQ3BDLFdBQVcsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3RSxjQUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ2pDO0lBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBDb25maWcgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tICdAaW9uaWMvY29yZSc7XG5pbXBvcnQgeyBpb3NUcmFuc2l0aW9uQW5pbWF0aW9uIH0gZnJvbSAnQGlvbmljL2NvcmUvZGlzdC9jb2xsZWN0aW9uL3V0aWxzL3RyYW5zaXRpb24vaW9zLnRyYW5zaXRpb24nO1xuaW1wb3J0IHsgbWRUcmFuc2l0aW9uQW5pbWF0aW9uIH0gZnJvbSAnQGlvbmljL2NvcmUvZGlzdC9jb2xsZWN0aW9uL3V0aWxzL3RyYW5zaXRpb24vbWQudHJhbnNpdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0b3Ige1xuXG4gIHByaXZhdGUgcGFyYW1zO1xuICBwcml2YXRlIGFuaW1hdGlvbjogJ2RlZmF1bHQnIHwgJ3B1c2gnIHwgJ21vZGFsJyB8ICdmYWRlJyA9ICdwdXNoJztcbiAgcHJpdmF0ZSBhbmltYXRpb25Db25maWdSZWFkeSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmF2Q3RybDogTmF2Q29udHJvbGxlcixcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnXG4gICkge31cblxuICBnZXRQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICB9XG5cbiAgcHVzaCh1cmw6IHN0cmluZywgcGFyYW1zPzoge30sIGFuaW1hdGlvbjogJ2RlZmF1bHQnIHzCoCdwdXNoJyB8ICdtb2RhbCcgfCAnZmFkZScgPSAnZGVmYXVsdCcpIHtcbiAgICBpZiAoIXRoaXMuYW5pbWF0aW9uQ29uZmlnUmVhZHkpIHsgdGhpcy5zZXRBbmltYXRpb25Db25maWcoKTsgfVxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgIHJldHVybiB0aGlzLm5hdkN0cmwubmF2aWdhdGVGb3J3YXJkKHVybCk7XG4gIH1cblxuICBwb3AodXJsPzogc3RyaW5nLCBwYXJhbXM/OiB7fSkge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHJldHVybiB0aGlzLm5hdkN0cmwubmF2aWdhdGVCYWNrKHVybCB8fMKgdGhpcy5nZXRQcmV2aW91c1BhZ2VVcmwoKSk7XG4gIH1cblxuICBwb3BUb1Jvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZUJhY2sodGhpcy5nZXRSb290UGFnZVVybCgpKTtcbiAgfVxuXG4gIHNldFJvb3QodXJsOiBzdHJpbmcsIHBhcmFtcz86IHt9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZVJvb3QodXJsKTtcbiAgfVxuXG4gIGdldFZpZXdzKCkge1xuICAgIGNvbnN0IGM6IGFueSA9IHsgLi4udGhpcy5uYXZDdHJsIH07XG4gICAgbGV0IHZpZXdzID0gW107XG4gICAgaWYgKGMgJiYgYy50b3BPdXRsZXQgJiYgYy50b3BPdXRsZXQuc3RhY2tDdHJsKSB7IHZpZXdzID0gYy50b3BPdXRsZXQuc3RhY2tDdHJsLnZpZXdzOyB9XG4gICAgcmV0dXJuIHZpZXdzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcmV2aW91c1BhZ2VVcmwoKSB7XG4gICAgY29uc3Qgdmlld3MgPSB0aGlzLmdldFZpZXdzKCk7XG4gICAgcmV0dXJuICh2aWV3cyAmJiB2aWV3cy5sZW5ndGggPiAxKSA/IHZpZXdzW3ZpZXdzLmxlbmd0aCAtIDJdLnVybCA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb290UGFnZVVybCgpIHtcbiAgICBjb25zdCB2aWV3cyA9IHRoaXMuZ2V0Vmlld3MoKTtcbiAgICByZXR1cm4gKHZpZXdzICYmIHZpZXdzLmxlbmd0aCkgPyB2aWV3c1swXS51cmwgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgc2V0QW5pbWF0aW9uQ29uZmlnKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnUmVhZHkgPSB0cnVlO1xuICAgIHRoaXMuY29uZmlnLnNldCgnbmF2QW5pbWF0aW9uJyxcbiAgICAgIChBbmltYXRpb25DOiBBbmltYXRpb24sIGJhc2VFbDogSFRNTEVsZW1lbnQsIG9wdHM6IGFueSk6IFByb21pc2U8QW5pbWF0aW9uPiA9PiB7XG4gICAgICAgIGxldCBhbmltID3CoHRoaXMuYW5pbWF0aW9uO1xuICAgICAgICBpZiAob3B0cy5kaXJlY3Rpb24gPT09ICdiYWNrJykgeyBhbmltID0gb3B0cy5lbnRlcmluZ0VsLmdldEF0dHJpYnV0ZSgnYW5pbWF0aW9uLWxlYXZlJyk7IH1cbiAgICAgICAgb3B0cy5lbnRlcmluZ0VsLnNldEF0dHJpYnV0ZSgnYW5pbWF0aW9uLWVudGVyJywgdGhpcy5hbmltYXRpb24pO1xuICAgICAgICBvcHRzLmxlYXZpbmdFbC5zZXRBdHRyaWJ1dGUoJ2FuaW1hdGlvbi1sZWF2ZScsIHRoaXMuYW5pbWF0aW9uKTtcbiAgICAgICAgY29uc3QgaW9zID0gKG9wdHMgJiYgb3B0cy5tb2RlID09PSAnaW9zJyk7XG4gICAgICAgIHN3aXRjaCAoYW5pbSkge1xuICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgaWYgKGlvcykgeyAgcmV0dXJuIGFuaW1hdGlvblB1c2goQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTsgfVxuICAgICAgICAgICAgZWxzZSB7ICAgICAgcmV0dXJuIGFuaW1hdGlvbk1vZGFsKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7IH1cbiAgICAgICAgICBjYXNlICdwdXNoJzogIHJldHVybiBhbmltYXRpb25QdXNoKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgY2FzZSAnbW9kYWwnOiByZXR1cm4gYW5pbWF0aW9uTW9kYWwoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgICBjYXNlICdmYWRlJzogIHJldHVybiBhbmltYXRpb25GYWRlKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgZGVmYXVsdDogICAgICByZXR1cm4gYW5pbWF0aW9uTW9kYWwoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBhbmltYXRpb25QdXNoICAgIChhLCBiLCBvKSAgeyByZXR1cm4gaW9zVHJhbnNpdGlvbkFuaW1hdGlvbihhLCBiLCBvKTsgfVxuZnVuY3Rpb24gYW5pbWF0aW9uTW9kYWwgICAoYSwgYiwgbykgIHsgcmV0dXJuIG1kVHJhbnNpdGlvbkFuaW1hdGlvbihhLCBiLCBvKTsgfVxuZnVuY3Rpb24gYW5pbWF0aW9uRmFkZSAgICAoYSwgYiwgbykgIHsgcmV0dXJuIGZhZGVBbmltYXRpb24oYSwgYiwgbyk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZhZGVBbmltYXRpb24oQW5pbWF0aW9uQzogQW5pbWF0aW9uLCBfOiBIVE1MRWxlbWVudCwgb3B0czogYW55KSB7XG4gIGNvbnN0IGdldElvblBhZ2VFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpb24tcGFnZScpKSB7IHJldHVybiBlbGVtZW50OyB9XG4gICAgY29uc3QgcGFnZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignOnNjb3BlID4gLmlvbi1wYWdlLCA6c2NvcGUgPiBpb24tbmF2LCA6c2NvcGUgPiBpb24tdGFicycpO1xuICAgIHJldHVybiBwYWdlIHx8IGVsZW1lbnQ7XG4gIH07XG4gIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XG4gIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xuICBjb25zdCBpb25QYWdlRWxlbWVudCA9IGdldElvblBhZ2VFbGVtZW50KGVudGVyaW5nRWwpO1xuICBjb25zdCByb290VHJhbnNpdGlvbiA9IG5ldyBBbmltYXRpb25DKCk7XG4gIHJvb3RUcmFuc2l0aW9uLmFkZEVsZW1lbnQoaW9uUGFnZUVsZW1lbnQpLmJlZm9yZVJlbW92ZUNsYXNzKCdpb24tcGFnZS1pbnZpc2libGUnKTtcbiAgaWYgKG9wdHMuZGlyZWN0aW9uID09PSAnYmFjaycpIHsgLy8gYW5pbWF0ZSB0aGUgY29tcG9uZW50IGl0c2VsZlxuICAgIHJvb3RUcmFuc2l0aW9uLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgMjAwKS5lYXNpbmcoJ2N1YmljLWJlemllcigwLjQ3LDAsMC43NDUsMC43MTUpJyk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdFRyYW5zaXRpb24uZHVyYXRpb24ob3B0cy5kdXJhdGlvbiB8fCAyODApXG4gICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC4zNiwwLjY2LDAuMDQsMSknKS5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxLCB0cnVlKTtcbiAgfVxuICBjb25zdCBlbnRlcmluZ1Rvb2xiYXJFbGUgPSBpb25QYWdlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24tdG9vbGJhcicpO1xuICBpZiAoZW50ZXJpbmdUb29sYmFyRWxlKSB7IC8vIEFuaW1hdGUgdG9vbGJhciBpZiBpdCdzIHRoZXJlXG4gICAgY29uc3QgZW50ZXJpbmdUb29sQmFyID0gbmV3IEFuaW1hdGlvbkMoKTtcbiAgICBlbnRlcmluZ1Rvb2xCYXIuYWRkRWxlbWVudChlbnRlcmluZ1Rvb2xiYXJFbGUpO1xuICAgIHJvb3RUcmFuc2l0aW9uLmFkZChlbnRlcmluZ1Rvb2xCYXIpO1xuICB9XG4gIC8vIHNldHVwIGxlYXZpbmcgdmlld1xuICBpZiAobGVhdmluZ0VsICYmIChvcHRzLmRpcmVjdGlvbiA9PT0gJ2JhY2snKSkgeyAvLyBsZWF2aW5nIGNvbnRlbnRcbiAgICByb290VHJhbnNpdGlvbi5kdXJhdGlvbihvcHRzLmR1cmF0aW9uIHx8IDIwMCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40NywwLDAuNzQ1LDAuNzE1KScpO1xuICAgIGNvbnN0IGxlYXZpbmdQYWdlID0gbmV3IEFuaW1hdGlvbkMoKTtcbiAgICBsZWF2aW5nUGFnZS5hZGRFbGVtZW50KGdldElvblBhZ2VFbGVtZW50KGxlYXZpbmdFbCkpLmZyb21Ubygnb3BhY2l0eScsIDEsIDApO1xuICAgIHJvb3RUcmFuc2l0aW9uLmFkZChsZWF2aW5nUGFnZSk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyb290VHJhbnNpdGlvbik7XG59XG4iXX0=