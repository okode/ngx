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
        var views = tslib_1.__spread(this.getViews()).reverse();
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
export function safePushAnimation(AnimationC, _, opts) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNyRyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUVuRztJQVFFLG1CQUNVLE9BQXNCLEVBQ3RCLE1BQWM7UUFEZCxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFOaEIsY0FBUyxHQUF1RCxTQUFTLENBQUM7UUFDMUUseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBSzFCLENBQUM7Ozs7SUFFSiw2QkFBUzs7O0lBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7Ozs7SUFFRCx3QkFBSTs7Ozs7OztJQUFKLFVBQ0UsR0FBVyxFQUNYLE1BQVcsRUFDWCxTQUF5RSxFQUN6RSxZQUFvQjtRQURwQiwwQkFBQSxFQUFBLHFCQUF5RTtRQUN6RSw2QkFBQSxFQUFBLG9CQUFvQjtRQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FBRTtRQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFP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LFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsZ0NBQWdDLENBQUMsQ0FBQzs7UUFDakYsV0FBVyxHQUFHLElBQUksVUFBVSxFQUFFOztRQUM5QixZQUFZLEdBQUcsSUFBSSxVQUFVLEVBQUU7SUFDckMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtRQUM3QixXQUFXLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkYsWUFBWSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzNGO1NBQU07UUFDTCxXQUFXLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDeEYsWUFBWSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQzFGO0lBQ0QsY0FBYyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoQyxjQUFjLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN6QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2Q29udHJvbGxlciwgQ29uZmlnIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSAnQGlvbmljL2NvcmUnO1xuaW1wb3J0IHsgaW9zVHJhbnNpdGlvbkFuaW1hdGlvbiB9IGZyb20gJ0Bpb25pYy9jb3JlL2Rpc3QvY29sbGVjdGlvbi91dGlscy90cmFuc2l0aW9uL2lvcy50cmFuc2l0aW9uJztcbmltcG9ydCB7IG1kVHJhbnNpdGlvbkFuaW1hdGlvbiB9IGZyb20gJ0Bpb25pYy9jb3JlL2Rpc3QvY29sbGVjdGlvbi91dGlscy90cmFuc2l0aW9uL21kLnRyYW5zaXRpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF2aWdhdG9yIHtcblxuICBwcml2YXRlIHBhcmFtcztcbiAgcHJpdmF0ZSBhbmltYXRpb246ICdkZWZhdWx0JyB8ICdwdXNoJyB8ICdtb2RhbCcgfCAnZmFkZScgfMKgJ3NhZmVwdXNoJyA9ICdkZWZhdWx0JztcbiAgcHJpdmF0ZSBhbmltYXRpb25Db25maWdSZWFkeSA9IGZhbHNlO1xuICBwcml2YXRlIHN0YXJ0TmF2RmxvdyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmF2Q3RybDogTmF2Q29udHJvbGxlcixcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnXG4gICkge31cblxuICBnZXRQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICB9XG5cbiAgcHVzaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBwYXJhbXM/OiB7fSxcbiAgICBhbmltYXRpb246ICdkZWZhdWx0JyB8wqAncHVzaCcgfCAnbW9kYWwnIHwgJ2ZhZGUnIHwgJ3NhZmVwdXNoJyA9ICdkZWZhdWx0JyxcbiAgICBzdGFydE5hdkZsb3cgPSBmYWxzZVxuICApIHtcbiAgICBpZiAoIXRoaXMuYW5pbWF0aW9uQ29uZmlnUmVhZHkpIHsgdGhpcy5zZXRBbmltYXRpb25Db25maWcoKTsgfVxuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgIHRoaXMuc3RhcnROYXZGbG93ID0gc3RhcnROYXZGbG93O1xuICAgIHJldHVybiB0aGlzLm5hdkN0cmwubmF2aWdhdGVGb3J3YXJkKHVybCk7XG4gIH1cblxuICBwb3AodXJsPzogc3RyaW5nLCBwYXJhbXM/OiB7fSkge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHJldHVybiB0aGlzLm5hdkN0cmwubmF2aWdhdGVCYWNrKHVybCB8fMKgdGhpcy5nZXRQcmV2aW91c1BhZ2VVcmwoKSk7XG4gIH1cblxuICBwb3BUb1Jvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZUJhY2sodGhpcy5nZXRSb290UGFnZVVybCgpKTtcbiAgfVxuXG4gIHNldFJvb3QodXJsOiBzdHJpbmcsIHBhcmFtcz86IHt9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZVJvb3QodXJsKTtcbiAgfVxuXG4gIGNsb3NlQ3VycmVudE5hdkZsb3cocGFyYW1zPzoge30pIHtcbiAgICBjb25zdCB2aWV3cyA9IFsuLi50aGlzLmdldFZpZXdzKCldLnJldmVyc2UoKTtcbiAgICBjb25zdCBjdXJyZW50TmF2RmxvdyA9IHZpZXdzLmZpbmRJbmRleCh2ID0+IHYuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25ldy1uYXYtZmxvdycpKTtcbiAgICBjb25zdCB0YXJnZXRQYWdlID0gY3VycmVudE5hdkZsb3cgPj0gMCAmJiB2aWV3cy5sZW5ndGggPiAxID8gdmlld3NbY3VycmVudE5hdkZsb3cgKyAxXSA6IG51bGw7XG4gICAgcmV0dXJuIHRhcmdldFBhZ2UgPyB0aGlzLnBvcCh0YXJnZXRQYWdlLnVybCwgcGFyYW1zKSA6IHRoaXMucG9wVG9Sb290KCk7XG4gIH1cblxuICBnZXRWaWV3cygpIHtcbiAgICBjb25zdCBjOiBhbnkgPSB7IC4uLnRoaXMubmF2Q3RybCB9O1xuICAgIGxldCB2aWV3cyA9IFtdO1xuICAgIGlmIChjICYmIGMudG9wT3V0bGV0ICYmIGMudG9wT3V0bGV0LnN0YWNrQ3RybCkgeyB2aWV3cyA9IGMudG9wT3V0bGV0LnN0YWNrQ3RybC52aWV3czsgfVxuICAgIHJldHVybiB2aWV3cztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJldmlvdXNQYWdlVXJsKCkge1xuICAgIGNvbnN0IHZpZXdzID0gdGhpcy5nZXRWaWV3cygpO1xuICAgIHJldHVybiAodmlld3MgJiYgdmlld3MubGVuZ3RoID4gMSkgPyB2aWV3c1t2aWV3cy5sZW5ndGggLSAyXS51cmwgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um9vdFBhZ2VVcmwoKSB7XG4gICAgY29uc3Qgdmlld3MgPSB0aGlzLmdldFZpZXdzKCk7XG4gICAgcmV0dXJuICh2aWV3cyAmJiB2aWV3cy5sZW5ndGgpID8gdmlld3NbMF0udXJsIDogJyc7XG4gIH1cblxuICBwcml2YXRlIHNldEFuaW1hdGlvbkNvbmZpZygpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZ1JlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLmNvbmZpZy5zZXQoJ25hdkFuaW1hdGlvbicsXG4gICAgICAoQW5pbWF0aW9uQzogQW5pbWF0aW9uLCBiYXNlRWw6IEhUTUxFbGVtZW50LCBvcHRzOiBhbnkpOiBQcm9taXNlPEFuaW1hdGlvbj4gPT4ge1xuICAgICAgICBsZXQgYW5pbSA9wqB0aGlzLmFuaW1hdGlvbjtcbiAgICAgICAgaWYgKG9wdHMuZGlyZWN0aW9uID09PSAnYmFjaycpIHtcbiAgICAgICAgICBhbmltID0gb3B0cy5lbnRlcmluZ0VsLmdldEF0dHJpYnV0ZSgnYW5pbWF0aW9uLWxlYXZlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0cy5kaXJlY3Rpb24gPT09ICdmb3J3YXJkJyAmJiB0aGlzLnN0YXJ0TmF2Rmxvdykge1xuICAgICAgICAgIG9wdHMuZW50ZXJpbmdFbC5zZXRBdHRyaWJ1dGUoJ25ldy1uYXYtZmxvdycsIHRydWUpO1xuICAgICAgICAgIHRoaXMuc3RhcnROYXZGbG93ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgb3B0cy5lbnRlcmluZ0VsLnNldEF0dHJpYnV0ZSgnYW5pbWF0aW9uLWVudGVyJywgdGhpcy5hbmltYXRpb24pO1xuICAgICAgICBvcHRzLmxlYXZpbmdFbC5zZXRBdHRyaWJ1dGUoJ2FuaW1hdGlvbi1sZWF2ZScsIHRoaXMuYW5pbWF0aW9uKTtcbiAgICAgICAgY29uc3QgaW9zID0gKG9wdHMgJiYgb3B0cy5tb2RlID09PSAnaW9zJyk7XG4gICAgICAgIHN3aXRjaCAoYW5pbSkge1xuICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgaWYgKGlvcykgeyAgICAgIHJldHVybiBhbmltYXRpb25QdXNoKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7IH1cbiAgICAgICAgICAgIGVsc2UgeyAgICAgICAgICByZXR1cm4gYW5pbWF0aW9uTW9kYWwoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTsgfVxuICAgICAgICAgIGNhc2UgJ3B1c2gnOiAgICAgIHJldHVybiBhbmltYXRpb25QdXNoKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgY2FzZSAnbW9kYWwnOiAgICAgcmV0dXJuIGFuaW1hdGlvbk1vZGFsKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgY2FzZSAnZmFkZSc6ICAgICAgcmV0dXJuIGFuaW1hdGlvbkZhZGUoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgICBjYXNlICdzYWZlcHVzaCc6ICByZXR1cm4gYW5pbWF0aW9uU2FmZVB1c2goQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgICBkZWZhdWx0OiAgICAgICAgICByZXR1cm4gYW5pbWF0aW9uTW9kYWwoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBhbmltYXRpb25QdXNoICAgICAoYSwgYiwgbykgIHsgcmV0dXJuIGlvc1RyYW5zaXRpb25BbmltYXRpb24oYSwgYiwgbyk7IH1cbmZ1bmN0aW9uIGFuaW1hdGlvbk1vZGFsICAgIChhLCBiLCBvKSAgeyByZXR1cm4gbWRUcmFuc2l0aW9uQW5pbWF0aW9uKGEsIGIsIG8pOyB9XG5mdW5jdGlvbiBhbmltYXRpb25GYWRlICAgICAoYSwgYiwgbykgIHsgcmV0dXJuIGZhZGVBbmltYXRpb24oYSwgYiwgbyk7IH1cbmZ1bmN0aW9uIGFuaW1hdGlvblNhZmVQdXNoIChhLCBiLCBvKSAgeyByZXR1cm4gc2FmZVB1c2hBbmltYXRpb24oYSwgYiwgbyk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZhZGVBbmltYXRpb24oQW5pbWF0aW9uQzogQW5pbWF0aW9uLCBfOiBIVE1MRWxlbWVudCwgb3B0czogYW55KSB7XG4gIGNvbnN0IGdldElvblBhZ2VFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpb24tcGFnZScpKSB7IHJldHVybiBlbGVtZW50OyB9XG4gICAgY29uc3QgcGFnZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignOnNjb3BlID4gLmlvbi1wYWdlLCA6c2NvcGUgPiBpb24tbmF2LCA6c2NvcGUgPiBpb24tdGFicycpO1xuICAgIHJldHVybiBwYWdlIHx8IGVsZW1lbnQ7XG4gIH07XG4gIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XG4gIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xuICBjb25zdCBpb25QYWdlRWxlbWVudCA9IGdldElvblBhZ2VFbGVtZW50KGVudGVyaW5nRWwpO1xuICBjb25zdCByb290VHJhbnNpdGlvbiA9IG5ldyBBbmltYXRpb25DKCk7XG4gIHJvb3RUcmFuc2l0aW9uLmFkZEVsZW1lbnQoaW9uUGFnZUVsZW1lbnQpLmJlZm9yZVJlbW92ZUNsYXNzKCdpb24tcGFnZS1pbnZpc2libGUnKTtcbiAgaWYgKG9wdHMuZGlyZWN0aW9uID09PSAnYmFjaycpIHsgLy8gYW5pbWF0ZSB0aGUgY29tcG9uZW50IGl0c2VsZlxuICAgIHJvb3RUcmFuc2l0aW9uLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgMzAwKS5lYXNpbmcoJ2N1YmljLWJlemllcigwLjQ3LDAsMC43NDUsMC43MTUpJyk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdFRyYW5zaXRpb24uZHVyYXRpb24ob3B0cy5kdXJhdGlvbiB8fCA0MDApXG4gICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC4zNiwwLjY2LDAuMDQsMSknKS5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxLCB0cnVlKTtcbiAgfVxuICBjb25zdCBlbnRlcmluZ1Rvb2xiYXJFbGUgPSBpb25QYWdlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24tdG9vbGJhcicpO1xuICBpZiAoZW50ZXJpbmdUb29sYmFyRWxlKSB7IC8vIEFuaW1hdGUgdG9vbGJhciBpZiBpdCdzIHRoZXJlXG4gICAgY29uc3QgZW50ZXJpbmdUb29sQmFyID0gbmV3IEFuaW1hdGlvbkMoKTtcbiAgICBlbnRlcmluZ1Rvb2xCYXIuYWRkRWxlbWVudChlbnRlcmluZ1Rvb2xiYXJFbGUpO1xuICAgIHJvb3RUcmFuc2l0aW9uLmFkZChlbnRlcmluZ1Rvb2xCYXIpO1xuICB9XG4gIC8vIHNldHVwIGxlYXZpbmcgdmlld1xuICBpZiAobGVhdmluZ0VsICYmIChvcHRzLmRpcmVjdGlvbiA9PT0gJ2JhY2snKSkgeyAvLyBsZWF2aW5nIGNvbnRlbnRcbiAgICByb290VHJhbnNpdGlvbi5kdXJhdGlvbihvcHRzLmR1cmF0aW9uIHx8IDMwMCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40NywwLDAuNzQ1LDAuNzE1KScpO1xuICAgIGNvbnN0IGxlYXZpbmdQYWdlID0gbmV3IEFuaW1hdGlvbkMoKTtcbiAgICBsZWF2aW5nUGFnZS5hZGRFbGVtZW50KGdldElvblBhZ2VFbGVtZW50KGxlYXZpbmdFbCkpLmZyb21Ubygnb3BhY2l0eScsIDEsIDApO1xuICAgIHJvb3RUcmFuc2l0aW9uLmFkZChsZWF2aW5nUGFnZSk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyb290VHJhbnNpdGlvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWZlUHVzaEFuaW1hdGlvbihBbmltYXRpb25DOiBBbmltYXRpb24sIF86IEhUTUxFbGVtZW50LCBvcHRzOiBhbnkpIHtcbiAgY29uc3QgZ2V0SW9uUGFnZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lvbi1wYWdlJykpIHsgcmV0dXJuIGVsZW1lbnQ7IH1cbiAgICBjb25zdCBwYWdlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAuaW9uLXBhZ2UsIDpzY29wZSA+IGlvbi1uYXYsIDpzY29wZSA+IGlvbi10YWJzJyk7XG4gICAgcmV0dXJuIHBhZ2UgfHwgZWxlbWVudDtcbiAgfTtcbiAgY29uc3QgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcbiAgY29uc3QgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XG4gIGNvbnN0IGlvblBhZ2VFbGVtZW50ID0gZ2V0SW9uUGFnZUVsZW1lbnQoZW50ZXJpbmdFbCk7XG4gIGNvbnN0IHJvb3RUcmFuc2l0aW9uID0gbmV3IEFuaW1hdGlvbkMoKTtcbiAgcm9vdFRyYW5zaXRpb24uYWRkRWxlbWVudChpb25QYWdlRWxlbWVudCkuYmVmb3JlUmVtb3ZlQ2xhc3MoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xuICByb290VHJhbnNpdGlvbi5kdXJhdGlvbihvcHRzLmR1cmF0aW9uIHx8IDUwMCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC4zNiwwLjY2LDAuMDQsMSknKTtcbiAgY29uc3QgbGVhdmluZ1BhZ2UgPSBuZXcgQW5pbWF0aW9uQygpO1xuICBjb25zdCBlbnRlcmluZ1BhZ2UgPSBuZXcgQW5pbWF0aW9uQygpO1xuICBpZiAob3B0cy5kaXJlY3Rpb24gPT09ICdiYWNrJykge1xuICAgIGxlYXZpbmdQYWdlLmFkZEVsZW1lbnQoZ2V0SW9uUGFnZUVsZW1lbnQobGVhdmluZ0VsKSkuZnJvbVRvKCd0cmFuc2xhdGVYJywgJzAnLCAnMTAwJScpO1xuICAgIGVudGVyaW5nUGFnZS5hZGRFbGVtZW50KGdldElvblBhZ2VFbGVtZW50KGVudGVyaW5nRWwpKS5mcm9tVG8oJ3RyYW5zbGF0ZVgnLCAnLTEwMCUnLCAnMCcpO1xuICB9IGVsc2Uge1xuICAgIGxlYXZpbmdQYWdlLmFkZEVsZW1lbnQoZ2V0SW9uUGFnZUVsZW1lbnQobGVhdmluZ0VsKSkuZnJvbVRvKCd0cmFuc2xhdGVYJywgJzAnLCAnLTEwMCUnKTtcbiAgICBlbnRlcmluZ1BhZ2UuYWRkRWxlbWVudChnZXRJb25QYWdlRWxlbWVudChlbnRlcmluZ0VsKSkuZnJvbVRvKCd0cmFuc2xhdGVYJywgJzEwMCUnLCAnMCcpO1xuICB9XG4gIHJvb3RUcmFuc2l0aW9uLmFkZChsZWF2aW5nUGFnZSk7XG4gIHJvb3RUcmFuc2l0aW9uLmFkZChlbnRlcmluZ1BhZ2UpO1xuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJvb3RUcmFuc2l0aW9uKTtcbn1cblxuIl19