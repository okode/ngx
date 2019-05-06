/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NavController, Config } from '@ionic/angular';
import { iosTransitionAnimation } from '@ionic/core/dist/collection/utils/transition/ios.transition';
import { mdTransitionAnimation } from '@ionic/core/dist/collection/utils/transition/md.transition';
export class Navigator {
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
        this.defaultAnimation = 'default';
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
        /** @type {?} */
        const targetUrl = url || this.getPreviousPageUrl();
        if (!targetUrl) {
            return Promise.resolve(false);
        }
        return this.navCtrl.navigateBack(targetUrl);
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
        const currentNavFlow = views.findIndex((/**
         * @param {?} v
         * @return {?}
         */
        v => v.element.getAttribute('new-nav-flow')));
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
     * @param {?} animation
     * @return {?}
     */
    setDefaultAnimation(animation) {
        this.defaultAnimation = animation;
    }
    /**
     * @private
     * @return {?}
     */
    getPreviousPageUrl() {
        /** @type {?} */
        const views = this.getViews();
        return (views && views.length > 1) ? views[views.length - 2].url : null;
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
        this.config.set('navAnimation', (/**
         * @param {?} AnimationC
         * @param {?} baseEl
         * @param {?} opts
         * @return {?}
         */
        (AnimationC, baseEl, opts) => {
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
            if (anim === 'default') {
                anim = this.defaultAnimation;
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
    const getIonPageElement = (/**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element.classList.contains('ion-page')) {
            return element;
        }
        /** @type {?} */
        const page = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
        return page || element;
    });
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
export function safePushAnimation(AnimationC, _, opts) {
    /** @type {?} */
    const getIonPageElement = (/**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (element.classList.contains('ion-page')) {
            return element;
        }
        /** @type {?} */
        const page = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
        return page || element;
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBR25HLE1BQU0sT0FBTyxTQUFTOzs7OztJQVFwQixZQUNVLE9BQXNCLEVBQ3RCLE1BQWM7UUFEZCxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFQaEIsY0FBUyxHQUF1RCxTQUFTLENBQUM7UUFDMUUseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLHFCQUFnQixHQUF1RCxTQUFTLENBQUM7SUFLdEYsQ0FBQzs7OztJQUVKLFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7Ozs7SUFFRCxJQUFJLENBQ0YsR0FBVyxFQUNYLE1BQVcsRUFDWCxZQUFnRSxTQUFTLEVBQ3pFLFlBQVksR0FBRyxLQUFLO1FBRXBCLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUFFO1FBQzlELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxl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dGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIENvbmZpZyB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmltcG9ydCB7IGlvc1RyYW5zaXRpb25BbmltYXRpb24gfSBmcm9tICdAaW9uaWMvY29yZS9kaXN0L2NvbGxlY3Rpb24vdXRpbHMvdHJhbnNpdGlvbi9pb3MudHJhbnNpdGlvbic7XG5pbXBvcnQgeyBtZFRyYW5zaXRpb25BbmltYXRpb24gfSBmcm9tICdAaW9uaWMvY29yZS9kaXN0L2NvbGxlY3Rpb24vdXRpbHMvdHJhbnNpdGlvbi9tZC50cmFuc2l0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvciB7XG5cbiAgcHJpdmF0ZSBwYXJhbXM7XG4gIHByaXZhdGUgYW5pbWF0aW9uOiAnZGVmYXVsdCcgfCAncHVzaCcgfCAnbW9kYWwnIHwgJ2ZhZGUnIHzCoCdzYWZlcHVzaCcgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgYW5pbWF0aW9uQ29uZmlnUmVhZHkgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzdGFydE5hdkZsb3cgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZWZhdWx0QW5pbWF0aW9uOiAnZGVmYXVsdCcgfCAncHVzaCcgfCAnbW9kYWwnIHwgJ2ZhZGUnIHzCoCdzYWZlcHVzaCcgPSAnZGVmYXVsdCc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuYXZDdHJsOiBOYXZDb250cm9sbGVyLFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWdcbiAgKSB7fVxuXG4gIGdldFBhcmFtcygpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbXM7XG4gIH1cblxuICBwdXNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIHBhcmFtcz86IHt9LFxuICAgIGFuaW1hdGlvbjogJ2RlZmF1bHQnIHzCoCdwdXNoJyB8ICdtb2RhbCcgfCAnZmFkZScgfCAnc2FmZXB1c2gnID0gJ2RlZmF1bHQnLFxuICAgIHN0YXJ0TmF2RmxvdyA9IGZhbHNlXG4gICkge1xuICAgIGlmICghdGhpcy5hbmltYXRpb25Db25maWdSZWFkeSkgeyB0aGlzLnNldEFuaW1hdGlvbkNvbmZpZygpOyB9XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb247XG4gICAgdGhpcy5zdGFydE5hdkZsb3cgPSBzdGFydE5hdkZsb3c7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZUZvcndhcmQodXJsKTtcbiAgfVxuXG4gIHBvcCh1cmw/OiBzdHJpbmcsIHBhcmFtcz86IHt9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgY29uc3QgdGFyZ2V0VXJsID0gdXJsIHx8wqB0aGlzLmdldFByZXZpb3VzUGFnZVVybCgpO1xuICAgIGlmICghdGFyZ2V0VXJsKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZUJhY2sodGFyZ2V0VXJsKTtcbiAgfVxuXG4gIHBvcFRvUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZDdHJsLm5hdmlnYXRlQmFjayh0aGlzLmdldFJvb3RQYWdlVXJsKCkpO1xuICB9XG5cbiAgc2V0Um9vdCh1cmw6IHN0cmluZywgcGFyYW1zPzoge30pIHtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICByZXR1cm4gdGhpcy5uYXZDdHJsLm5hdmlnYXRlUm9vdCh1cmwpO1xuICB9XG5cbiAgY2xvc2VDdXJyZW50TmF2RmxvdyhwYXJhbXM/OiB7fSkge1xuICAgIGNvbnN0IHZpZXdzID0gWy4uLnRoaXMuZ2V0Vmlld3MoKV0ucmV2ZXJzZSgpO1xuICAgIGNvbnN0IGN1cnJlbnROYXZGbG93ID0gdmlld3MuZmluZEluZGV4KHYgPT4gdi5lbGVtZW50LmdldEF0dHJpYnV0ZSgnbmV3LW5hdi1mbG93JykpO1xuICAgIGNvbnN0IHRhcmdldFBhZ2UgPSBjdXJyZW50TmF2RmxvdyA+PSAwICYmIHZpZXdzLmxlbmd0aCA+IDEgPyB2aWV3c1tjdXJyZW50TmF2RmxvdyArIDFdIDogbnVsbDtcbiAgICByZXR1cm4gdGFyZ2V0UGFnZSA/IHRoaXMucG9wKHRhcmdldFBhZ2UudXJsLCBwYXJhbXMpIDogdGhpcy5wb3BUb1Jvb3QoKTtcbiAgfVxuXG4gIGdldFZpZXdzKCkge1xuICAgIGNvbnN0IGM6IGFueSA9IHsgLi4udGhpcy5uYXZDdHJsIH07XG4gICAgbGV0IHZpZXdzID0gW107XG4gICAgaWYgKGMgJiYgYy50b3BPdXRsZXQgJiYgYy50b3BPdXRsZXQuc3RhY2tDdHJsKSB7IHZpZXdzID0gYy50b3BPdXRsZXQuc3RhY2tDdHJsLnZpZXdzOyB9XG4gICAgcmV0dXJuIHZpZXdzO1xuICB9XG5cbiAgc2V0RGVmYXVsdEFuaW1hdGlvbihhbmltYXRpb246ICdkZWZhdWx0JyB8ICdwdXNoJyB8ICdtb2RhbCcgfCAnZmFkZScgfMKgJ3NhZmVwdXNoJykge1xuICAgIHRoaXMuZGVmYXVsdEFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJldmlvdXNQYWdlVXJsKCkge1xuICAgIGNvbnN0IHZpZXdzID0gdGhpcy5nZXRWaWV3cygpO1xuICAgIHJldHVybiAodmlld3MgJiYgdmlld3MubGVuZ3RoID4gMSkgPyB2aWV3c1t2aWV3cy5sZW5ndGggLSAyXS51cmwgOiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRSb290UGFnZVVybCgpIHtcbiAgICBjb25zdCB2aWV3cyA9IHRoaXMuZ2V0Vmlld3MoKTtcbiAgICByZXR1cm4gKHZpZXdzICYmIHZpZXdzLmxlbmd0aCkgPyB2aWV3c1swXS51cmwgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgc2V0QW5pbWF0aW9uQ29uZmlnKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uQ29uZmlnUmVhZHkgPSB0cnVlO1xuICAgIHRoaXMuY29uZmlnLnNldCgnbmF2QW5pbWF0aW9uJyxcbiAgICAgIChBbmltYXRpb25DOiBBbmltYXRpb24sIGJhc2VFbDogSFRNTEVsZW1lbnQsIG9wdHM6IGFueSk6IFByb21pc2U8QW5pbWF0aW9uPiA9PiB7XG4gICAgICAgIGxldCBhbmltID3CoHRoaXMuYW5pbWF0aW9uO1xuICAgICAgICBpZiAob3B0cy5kaXJlY3Rpb24gPT09ICdiYWNrJykge1xuICAgICAgICAgIGFuaW0gPSBvcHRzLmVudGVyaW5nRWwuZ2V0QXR0cmlidXRlKCdhbmltYXRpb24tbGVhdmUnKTtcbiAgICAgICAgfSBlbHNlIGlmIChvcHRzLmRpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnICYmIHRoaXMuc3RhcnROYXZGbG93KSB7XG4gICAgICAgICAgb3B0cy5lbnRlcmluZ0VsLnNldEF0dHJpYnV0ZSgnbmV3LW5hdi1mbG93JywgdHJ1ZSk7XG4gICAgICAgICAgdGhpcy5zdGFydE5hdkZsb3cgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBvcHRzLmVudGVyaW5nRWwuc2V0QXR0cmlidXRlKCdhbmltYXRpb24tZW50ZXInLCB0aGlzLmFuaW1hdGlvbik7XG4gICAgICAgIG9wdHMubGVhdmluZ0VsLnNldEF0dHJpYnV0ZSgnYW5pbWF0aW9uLWxlYXZlJywgdGhpcy5hbmltYXRpb24pO1xuICAgICAgICBjb25zdCBpb3MgPSAob3B0cyAmJiBvcHRzLm1vZGUgPT09ICdpb3MnKTtcbiAgICAgICAgaWYgKGFuaW0gPT09ICdkZWZhdWx0JykgeyBhbmltID0gdGhpcy5kZWZhdWx0QW5pbWF0aW9uOyB9XG4gICAgICAgIHN3aXRjaCAoYW5pbSkge1xuICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgcmV0dXJuIGlvcyA/ICAgICAgICAgICBhbmltYXRpb25QdXNoKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cylcbiAgICAgICAgICAgICAgICAgICAgICAgOiAgICAgICAgICAgYW5pbWF0aW9uTW9kYWwoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgICBjYXNlICdwdXNoJzogICAgICByZXR1cm4gYW5pbWF0aW9uUHVzaChBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpO1xuICAgICAgICAgIGNhc2UgJ21vZGFsJzogICAgIHJldHVybiBhbmltYXRpb25Nb2RhbChBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpO1xuICAgICAgICAgIGNhc2UgJ2ZhZGUnOiAgICAgIHJldHVybiBhbmltYXRpb25GYWRlKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgY2FzZSAnc2FmZXB1c2gnOiAgcmV0dXJuIGFuaW1hdGlvblNhZmVQdXNoKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgZGVmYXVsdDogICAgICAgICAgcmV0dXJuIGFuaW1hdGlvbk1vZGFsKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbn1cblxuZnVuY3Rpb24gYW5pbWF0aW9uUHVzaCAgICAgKGEsIGIsIG8pICB7IHJldHVybiBpb3NUcmFuc2l0aW9uQW5pbWF0aW9uKGEsIGIsIG8pOyB9XG5mdW5jdGlvbiBhbmltYXRpb25Nb2RhbCAgICAoYSwgYiwgbykgIHsgcmV0dXJuIG1kVHJhbnNpdGlvbkFuaW1hdGlvbihhLCBiLCBvKTsgfVxuZnVuY3Rpb24gYW5pbWF0aW9uRmFkZSAgICAgKGEsIGIsIG8pICB7IHJldHVybiBmYWRlQW5pbWF0aW9uKGEsIGIsIG8pOyB9XG5mdW5jdGlvbiBhbmltYXRpb25TYWZlUHVzaCAoYSwgYiwgbykgIHsgcmV0dXJuIHNhZmVQdXNoQW5pbWF0aW9uKGEsIGIsIG8pOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmYWRlQW5pbWF0aW9uKEFuaW1hdGlvbkM6IEFuaW1hdGlvbiwgXzogSFRNTEVsZW1lbnQsIG9wdHM6IGFueSkge1xuICBjb25zdCBnZXRJb25QYWdlRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaW9uLXBhZ2UnKSkgeyByZXR1cm4gZWxlbWVudDsgfVxuICAgIGNvbnN0IHBhZ2UgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJzpzY29wZSA+IC5pb24tcGFnZSwgOnNjb3BlID4gaW9uLW5hdiwgOnNjb3BlID4gaW9uLXRhYnMnKTtcbiAgICByZXR1cm4gcGFnZSB8fCBlbGVtZW50O1xuICB9O1xuICBjb25zdCBlbnRlcmluZ0VsID0gb3B0cy5lbnRlcmluZ0VsO1xuICBjb25zdCBsZWF2aW5nRWwgPSBvcHRzLmxlYXZpbmdFbDtcbiAgY29uc3QgaW9uUGFnZUVsZW1lbnQgPSBnZXRJb25QYWdlRWxlbWVudChlbnRlcmluZ0VsKTtcbiAgY29uc3Qgcm9vdFRyYW5zaXRpb24gPSBuZXcgQW5pbWF0aW9uQygpO1xuICByb290VHJhbnNpdGlvbi5hZGRFbGVtZW50KGlvblBhZ2VFbGVtZW50KS5iZWZvcmVSZW1vdmVDbGFzcygnaW9uLXBhZ2UtaW52aXNpYmxlJyk7XG4gIGlmIChvcHRzLmRpcmVjdGlvbiA9PT0gJ2JhY2snKSB7IC8vIGFuaW1hdGUgdGhlIGNvbXBvbmVudCBpdHNlbGZcbiAgICByb290VHJhbnNpdGlvbi5kdXJhdGlvbihvcHRzLmR1cmF0aW9uIHx8IDMwMCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40NywwLDAuNzQ1LDAuNzE1KScpO1xuICB9IGVsc2Uge1xuICAgIHJvb3RUcmFuc2l0aW9uLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgNDAwKVxuICAgICAgLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuMzYsMC42NiwwLjA0LDEpJykuZnJvbVRvKCdvcGFjaXR5JywgMC4wMSwgMSwgdHJ1ZSk7XG4gIH1cbiAgY29uc3QgZW50ZXJpbmdUb29sYmFyRWxlID0gaW9uUGFnZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW9uLXRvb2xiYXInKTtcbiAgaWYgKGVudGVyaW5nVG9vbGJhckVsZSkgeyAvLyBBbmltYXRlIHRvb2xiYXIgaWYgaXQncyB0aGVyZVxuICAgIGNvbnN0IGVudGVyaW5nVG9vbEJhciA9IG5ldyBBbmltYXRpb25DKCk7XG4gICAgZW50ZXJpbmdUb29sQmFyLmFkZEVsZW1lbnQoZW50ZXJpbmdUb29sYmFyRWxlKTtcbiAgICByb290VHJhbnNpdGlvbi5hZGQoZW50ZXJpbmdUb29sQmFyKTtcbiAgfVxuICAvLyBzZXR1cCBsZWF2aW5nIHZpZXdcbiAgaWYgKGxlYXZpbmdFbCAmJiAob3B0cy5kaXJlY3Rpb24gPT09ICdiYWNrJykpIHsgLy8gbGVhdmluZyBjb250ZW50XG4gICAgcm9vdFRyYW5zaXRpb24uZHVyYXRpb24ob3B0cy5kdXJhdGlvbiB8fCAzMDApLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuNDcsMCwwLjc0NSwwLjcxNSknKTtcbiAgICBjb25zdCBsZWF2aW5nUGFnZSA9IG5ldyBBbmltYXRpb25DKCk7XG4gICAgbGVhdmluZ1BhZ2UuYWRkRWxlbWVudChnZXRJb25QYWdlRWxlbWVudChsZWF2aW5nRWwpKS5mcm9tVG8oJ29wYWNpdHknLCAxLCAwKTtcbiAgICByb290VHJhbnNpdGlvbi5hZGQobGVhdmluZ1BhZ2UpO1xuICB9XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUocm9vdFRyYW5zaXRpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2FmZVB1c2hBbmltYXRpb24oQW5pbWF0aW9uQzogQW5pbWF0aW9uLCBfOiBIVE1MRWxlbWVudCwgb3B0czogYW55KSB7XG4gIGNvbnN0IGdldElvblBhZ2VFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpb24tcGFnZScpKSB7IHJldHVybiBlbGVtZW50OyB9XG4gICAgY29uc3QgcGFnZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignOnNjb3BlID4gLmlvbi1wYWdlLCA6c2NvcGUgPiBpb24tbmF2LCA6c2NvcGUgPiBpb24tdGFicycpO1xuICAgIHJldHVybiBwYWdlIHx8IGVsZW1lbnQ7XG4gIH07XG4gIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XG4gIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xuICBjb25zdCBpb25QYWdlRWxlbWVudCA9IGdldElvblBhZ2VFbGVtZW50KGVudGVyaW5nRWwpO1xuICBjb25zdCByb290VHJhbnNpdGlvbiA9IG5ldyBBbmltYXRpb25DKCk7XG4gIHJvb3RUcmFuc2l0aW9uLmFkZEVsZW1lbnQoaW9uUGFnZUVsZW1lbnQpLmJlZm9yZVJlbW92ZUNsYXNzKCdpb24tcGFnZS1pbnZpc2libGUnKTtcbiAgcm9vdFRyYW5zaXRpb24uZHVyYXRpb24ob3B0cy5kdXJhdGlvbiB8fCA1MDApLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuMzYsMC42NiwwLjA0LDEpJyk7XG4gIGNvbnN0IGxlYXZpbmdQYWdlID0gbmV3IEFuaW1hdGlvbkMoKTtcbiAgY29uc3QgZW50ZXJpbmdQYWdlID0gbmV3IEFuaW1hdGlvbkMoKTtcbiAgaWYgKG9wdHMuZGlyZWN0aW9uID09PSAnYmFjaycpIHtcbiAgICBsZWF2aW5nUGFnZS5hZGRFbGVtZW50KGdldElvblBhZ2VFbGVtZW50KGxlYXZpbmdFbCkpLmZyb21UbygndHJhbnNsYXRlWCcsICcwJywgJzEwMCUnKTtcbiAgICBlbnRlcmluZ1BhZ2UuYWRkRWxlbWVudChnZXRJb25QYWdlRWxlbWVudChlbnRlcmluZ0VsKSkuZnJvbVRvKCd0cmFuc2xhdGVYJywgJy0xMDAlJywgJzAnKTtcbiAgfSBlbHNlIHtcbiAgICBsZWF2aW5nUGFnZS5hZGRFbGVtZW50KGdldElvblBhZ2VFbGVtZW50KGxlYXZpbmdFbCkpLmZyb21UbygndHJhbnNsYXRlWCcsICcwJywgJy0xMDAlJyk7XG4gICAgZW50ZXJpbmdQYWdlLmFkZEVsZW1lbnQoZ2V0SW9uUGFnZUVsZW1lbnQoZW50ZXJpbmdFbCkpLmZyb21UbygndHJhbnNsYXRlWCcsICcxMDAlJywgJzAnKTtcbiAgfVxuICByb290VHJhbnNpdGlvbi5hZGQobGVhdmluZ1BhZ2UpO1xuICByb290VHJhbnNpdGlvbi5hZGQoZW50ZXJpbmdQYWdlKTtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyb290VHJhbnNpdGlvbik7XG59XG5cbiJdfQ==