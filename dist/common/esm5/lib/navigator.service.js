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
        if (animation === void 0) { animation = 'push'; }
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
            var animPlatform = ((opts && opts.mode === 'ios') ? 'ios' : 'md') + '_' + anim;
            switch (animPlatform) {
                case 'ios_push': return animationPush(AnimationC, baseEl, opts);
                case 'ios_modal': return animationModal(AnimationC, baseEl, opts);
                case 'ios_fade': return animationFade(AnimationC, baseEl, opts);
                case 'md_push': return animationModal(AnimationC, baseEl, opts);
                case 'md_modal': return animationModal(AnimationC, baseEl, opts);
                case 'md_fade': return animationFade(AnimationC, baseEl, opts);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNyRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUVuRztJQU1FLG1CQUNVLE9BQXNCLEVBQ3RCLE1BQWM7UUFEZCxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKaEIsY0FBUyxHQUE4QixNQUFNLENBQUM7UUFNcEQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELDZCQUFTOzs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7Ozs7O0lBRUQsd0JBQUk7Ozs7OztJQUFKLFVBQUssR0FBVyxFQUFFLE1BQVcsRUFBRSxTQUE2QztRQUE3QywwQkFBQSxFQUFBLGtCQUE2QztRQUMxRSxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVELHVCQUFHOzs7OztJQUFILFVBQUksR0FBWSxFQUFFLE1BQVc7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLElB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QUssTUFBTSxDQUFDLEVBQUUsRUFBRSxrQkFBa0I7UUFDaEUsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDOztZQUNuRixXQUFXLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDcEMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdFLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDakM7SUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDekMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIENvbmZpZyB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmltcG9ydCB7IGlvc1RyYW5zaXRpb25BbmltYXRpb24gfSBmcm9tICdAaW9uaWMvY29yZS9kaXN0L2NvbGxlY3Rpb24vdXRpbHMvdHJhbnNpdGlvbi9pb3MudHJhbnNpdGlvbic7XG5pbXBvcnQgeyBtZFRyYW5zaXRpb25BbmltYXRpb24gfSBmcm9tICdAaW9uaWMvY29yZS9kaXN0L2NvbGxlY3Rpb24vdXRpbHMvdHJhbnNpdGlvbi9tZC50cmFuc2l0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvciB7XG5cbiAgcHJpdmF0ZSBwYXJhbXM7XG4gIHByaXZhdGUgYW5pbWF0aW9uOiAncHVzaCcgfCAnbW9kYWwnIHwgJ2ZhZGUnID0gJ3B1c2gnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmF2Q3RybDogTmF2Q29udHJvbGxlcixcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnXG4gICkge1xuICAgIHRoaXMuc2V0QW5pbWF0aW9uQ29uZmlnKCk7XG4gIH1cblxuICBnZXRQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICB9XG5cbiAgcHVzaCh1cmw6IHN0cmluZywgcGFyYW1zPzoge30sIGFuaW1hdGlvbjogJ3B1c2gnIHwgJ21vZGFsJyB8ICdmYWRlJyA9ICdwdXNoJykge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgIHJldHVybiB0aGlzLm5hdkN0cmwubmF2aWdhdGVGb3J3YXJkKHVybCk7XG4gIH1cblxuICBwb3AodXJsPzogc3RyaW5nLCBwYXJhbXM/OiB7fSkge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHJldHVybiB0aGlzLm5hdkN0cmwubmF2aWdhdGVCYWNrKHVybCB8fMKgdGhpcy5nZXRQcmV2aW91c1BhZ2VVcmwoKSk7XG4gIH1cblxuICBwb3BUb1Jvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZUJhY2sodGhpcy5nZXRSb290UGFnZVVybCgpKTtcbiAgfVxuXG4gIHNldFJvb3QodXJsOiBzdHJpbmcsIHBhcmFtcz86IHt9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZVJvb3QodXJsKTtcbiAgfVxuXG4gIGdldFZpZXdzKCkge1xuICAgIGNvbnN0IGM6IGFueSA9IHsgLi4udGhpcy5uYXZDdHJsIH07XG4gICAgbGV0IHZpZXdzID0gW107XG4gICAgaWYgKGMgJiYgYy50b3BPdXRsZXQgJiYgYy50b3BPdXRsZXQuc3RhY2tDdHJsKSB7IHZpZXdzID0gYy50b3BPdXRsZXQuc3RhY2tDdHJsLnZpZXdzOyB9XG4gICAgcmV0dXJuIHZpZXdzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcmV2aW91c1BhZ2VVcmwoKSB7XG4gICAgY29uc3Qgdmlld3MgPSB0aGlzLmdldFZpZXdzKCk7XG4gICAgcmV0dXJuICh2aWV3cyAmJiB2aWV3cy5sZW5ndGggPiAxKSA/IHZpZXdzW3ZpZXdzLmxlbmd0aCAtIDJdLnVybCA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb290UGFnZVVybCgpIHtcbiAgICBjb25zdCB2aWV3cyA9IHRoaXMuZ2V0Vmlld3MoKTtcbiAgICByZXR1cm4gKHZpZXdzICYmIHZpZXdzLmxlbmd0aCkgPyB2aWV3c1swXS51cmwgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgc2V0QW5pbWF0aW9uQ29uZmlnKCkge1xuICAgIHRoaXMuY29uZmlnLnNldCgnbmF2QW5pbWF0aW9uJyxcbiAgICAgIChBbmltYXRpb25DOiBBbmltYXRpb24sIGJhc2VFbDogSFRNTEVsZW1lbnQsIG9wdHM6IGFueSk6IFByb21pc2U8QW5pbWF0aW9uPiA9PiB7XG4gICAgICAgIGxldCBhbmltID3CoHRoaXMuYW5pbWF0aW9uO1xuICAgICAgICBpZiAob3B0cy5kaXJlY3Rpb24gPT09ICdiYWNrJykgeyBhbmltID0gb3B0cy5lbnRlcmluZ0VsLmdldEF0dHJpYnV0ZSgnYW5pbWF0aW9uLWxlYXZlJyk7IH1cbiAgICAgICAgb3B0cy5lbnRlcmluZ0VsLnNldEF0dHJpYnV0ZSgnYW5pbWF0aW9uLWVudGVyJywgdGhpcy5hbmltYXRpb24pO1xuICAgICAgICBvcHRzLmxlYXZpbmdFbC5zZXRBdHRyaWJ1dGUoJ2FuaW1hdGlvbi1sZWF2ZScsIHRoaXMuYW5pbWF0aW9uKTtcbiAgICAgICAgY29uc3QgYW5pbVBsYXRmb3JtID0gKChvcHRzICYmIG9wdHMubW9kZSA9PT0gJ2lvcycpID8gJ2lvcycgOiAnbWQnKSArICdfJyArIGFuaW07XG4gICAgICAgIHN3aXRjaCAoYW5pbVBsYXRmb3JtKSB7XG4gICAgICAgICAgY2FzZSAnaW9zX3B1c2gnOiAgcmV0dXJuIGFuaW1hdGlvblB1c2goQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgICBjYXNlICdpb3NfbW9kYWwnOiByZXR1cm4gYW5pbWF0aW9uTW9kYWwoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgICBjYXNlICdpb3NfZmFkZSc6ICByZXR1cm4gYW5pbWF0aW9uRmFkZShBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpO1xuICAgICAgICAgIGNhc2UgJ21kX3B1c2gnOiAgIHJldHVybiBhbmltYXRpb25Nb2RhbChBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpO1xuICAgICAgICAgIGNhc2UgJ21kX21vZGFsJzogIHJldHVybiBhbmltYXRpb25Nb2RhbChBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpO1xuICAgICAgICAgIGNhc2UgJ21kX2ZhZGUnOiAgIHJldHVybiBhbmltYXRpb25GYWRlKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgZGVmYXVsdDogICAgICAgICAgcmV0dXJuIGFuaW1hdGlvbk1vZGFsKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gYW5pbWF0aW9uUHVzaCAgICAoYSwgYiwgbykgIHsgcmV0dXJuIGlvc1RyYW5zaXRpb25BbmltYXRpb24oYSwgYiwgbyk7IH1cbmZ1bmN0aW9uIGFuaW1hdGlvbk1vZGFsICAgKGEsIGIsIG8pICB7IHJldHVybiBtZFRyYW5zaXRpb25BbmltYXRpb24oYSwgYiwgbyk7IH1cbmZ1bmN0aW9uIGFuaW1hdGlvbkZhZGUgICAgKGEsIGIsIG8pICB7IHJldHVybiBmYWRlQW5pbWF0aW9uKGEsIGIsIG8pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmYWRlQW5pbWF0aW9uKEFuaW1hdGlvbkM6IEFuaW1hdGlvbiwgXzogSFRNTEVsZW1lbnQsIG9wdHM6IGFueSkge1xuICBjb25zdCBnZXRJb25QYWdlRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaW9uLXBhZ2UnKSkgeyByZXR1cm4gZWxlbWVudDsgfVxuICAgIGNvbnN0IHBhZ2UgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC5pb24tcGFnZSwgOnNjb3BlID4gaW9uLW5hdiwgOnNjb3BlID4gaW9uLXRhYnMnKTtcbiAgICByZXR1cm4gcGFnZSB8fCBlbGVtZW50O1xuICB9O1xuICBjb25zdCBlbnRlcmluZ0VsID0gb3B0cy5lbnRlcmluZ0VsO1xuICBjb25zdCBsZWF2aW5nRWwgPSBvcHRzLmxlYXZpbmdFbDtcbiAgY29uc3QgaW9uUGFnZUVsZW1lbnQgPSBnZXRJb25QYWdlRWxlbWVudChlbnRlcmluZ0VsKTtcbiAgY29uc3Qgcm9vdFRyYW5zaXRpb24gPSBuZXcgQW5pbWF0aW9uQygpO1xuICByb290VHJhbnNpdGlvbi5hZGRFbGVtZW50KGlvblBhZ2VFbGVtZW50KS5iZWZvcmVSZW1vdmVDbGFzcygnaW9uLXBhZ2UtaW52aXNpYmxlJyk7XG4gIGlmIChvcHRzLmRpcmVjdGlvbiA9PT0gJ2JhY2snKSB7IC8vIGFuaW1hdGUgdGhlIGNvbXBvbmVudCBpdHNlbGZcbiAgICByb290VHJhbnNpdGlvbi5kdXJhdGlvbihvcHRzLmR1cmF0aW9uIHx8IDIwMCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40NywwLDAuNzQ1LDAuNzE1KScpO1xuICB9IGVsc2Uge1xuICAgIHJvb3RUcmFuc2l0aW9uLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgMjgwKVxuICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuMzYsMC42NiwwLjA0LDEpJykuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSwgdHJ1ZSk7XG4gIH1cbiAgY29uc3QgZW50ZXJpbmdUb29sYmFyRWxlID0gaW9uUGFnZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXRvb2xiYXInKTtcbiAgaWYgKGVudGVyaW5nVG9vbGJhckVsZSkgeyAvLyBBbmltYXRlIHRvb2xiYXIgaWYgaXQncyB0aGVyZVxuICAgIGNvbnN0IGVudGVyaW5nVG9vbEJhciA9IG5ldyBBbmltYXRpb25DKCk7XG4gICAgZW50ZXJpbmdUb29sQmFyLmFkZEVsZW1lbnQoZW50ZXJpbmdUb29sYmFyRWxlKTtcbiAgICByb290VHJhbnNpdGlvbi5hZGQoZW50ZXJpbmdUb29sQmFyKTtcbiAgfVxuICAvLyBzZXR1cCBsZWF2aW5nIHZpZXdcbiAgaWYgKGxlYXZpbmdFbCAmJiAob3B0cy5kaXJlY3Rpb24gPT09ICdiYWNrJykpIHsgLy8gbGVhdmluZyBjb250ZW50XG4gICAgcm9vdFRyYW5zaXRpb24uZHVyYXRpb24ob3B0cy5kdXJhdGlvbiB8fCAyMDApLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuNDcsMCwwLjc0NSwwLjcxNSknKTtcbiAgICBjb25zdCBsZWF2aW5nUGFnZSA9IG5ldyBBbmltYXRpb25DKCk7XG4gICAgbGVhdmluZ1BhZ2UuYWRkRWxlbWVudChnZXRJb25QYWdlRWxlbWVudChsZWF2aW5nRWwpKS5mcm9tVG8oJ29wYWNpdHknLCAxLCAwKTtcbiAgICByb290VHJhbnNpdGlvbi5hZGQobGVhdmluZ1BhZ2UpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUocm9vdFRyYW5zaXRpb24pO1xufVxuIl19