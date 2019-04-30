/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
export function safePushAnimation(AnimationC, _, opts) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBR25HLE1BQU0sT0FBTyxTQUFTOzs7OztJQU9wQixZQUNVLE9BQXNCLEVBQ3RCLE1BQWM7UUFEZCxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFOaEIsY0FBUyxHQUF1RCxTQUFTLENBQUM7UUFDMUUseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBQzdCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBSzFCLENBQUM7Ozs7SUFFSixTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7Ozs7O0lBRUQsSUFBSSxDQUNGLEdBQVcsRUFDWCxNQUFXLEVBQ1gsWUFBZ0UsU0FBUyxFQUN6RSxZQUFZLEdBQUcsS0FBSztRQUVwQixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQUUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FBRTtRQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzND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LFdBQVcsR0FBRyxJQUFJLFVBQVUsRUFBRTs7VUFDOUIsWUFBWSxHQUFHLElBQUksVUFBVSxFQUFFO0lBQ3JDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7UUFDN0IsV0FBVyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZGLFlBQVksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMzRjtTQUFNO1FBQ0wsV0FBVyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hGLFlBQVksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztLQUMxRjtJQUNELGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDekMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIENvbmZpZyB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmltcG9ydCB7IGlvc1RyYW5zaXRpb25BbmltYXRpb24gfSBmcm9tICdAaW9uaWMvY29yZS9kaXN0L2NvbGxlY3Rpb24vdXRpbHMvdHJhbnNpdGlvbi9pb3MudHJhbnNpdGlvbic7XG5pbXBvcnQgeyBtZFRyYW5zaXRpb25BbmltYXRpb24gfSBmcm9tICdAaW9uaWMvY29yZS9kaXN0L2NvbGxlY3Rpb24vdXRpbHMvdHJhbnNpdGlvbi9tZC50cmFuc2l0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvciB7XG5cbiAgcHJpdmF0ZSBwYXJhbXM7XG4gIHByaXZhdGUgYW5pbWF0aW9uOiAnZGVmYXVsdCcgfCAncHVzaCcgfCAnbW9kYWwnIHwgJ2ZhZGUnIHzCoCdzYWZlcHVzaCcgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgYW5pbWF0aW9uQ29uZmlnUmVhZHkgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzdGFydE5hdkZsb3cgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ1xuICApIHt9XG5cbiAgZ2V0UGFyYW1zKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtcztcbiAgfVxuXG4gIHB1c2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgcGFyYW1zPzoge30sXG4gICAgYW5pbWF0aW9uOiAnZGVmYXVsdCcgfMKgJ3B1c2gnIHwgJ21vZGFsJyB8ICdmYWRlJyB8ICdzYWZlcHVzaCcgPSAnZGVmYXVsdCcsXG4gICAgc3RhcnROYXZGbG93ID0gZmFsc2VcbiAgKSB7XG4gICAgaWYgKCF0aGlzLmFuaW1hdGlvbkNvbmZpZ1JlYWR5KSB7IHRoaXMuc2V0QW5pbWF0aW9uQ29uZmlnKCk7IH1cbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcbiAgICB0aGlzLnN0YXJ0TmF2RmxvdyA9IHN0YXJ0TmF2RmxvdztcbiAgICByZXR1cm4gdGhpcy5uYXZDdHJsLm5hdmlnYXRlRm9yd2FyZCh1cmwpO1xuICB9XG5cbiAgcG9wKHVybD86IHN0cmluZywgcGFyYW1zPzoge30pIHtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICBjb25zdCB0YXJnZXRVcmwgPSB1cmwgfHzCoHRoaXMuZ2V0UHJldmlvdXNQYWdlVXJsKCk7XG4gICAgaWYgKCF0YXJnZXRVcmwpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5uYXZDdHJsLm5hdmlnYXRlQmFjayh0YXJnZXRVcmwpO1xuICB9XG5cbiAgcG9wVG9Sb290KCkge1xuICAgIHJldHVybiB0aGlzLm5hdkN0cmwubmF2aWdhdGVCYWNrKHRoaXMuZ2V0Um9vdFBhZ2VVcmwoKSk7XG4gIH1cblxuICBzZXRSb290KHVybDogc3RyaW5nLCBwYXJhbXM/OiB7fSkge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHJldHVybiB0aGlzLm5hdkN0cmwubmF2aWdhdGVSb290KHVybCk7XG4gIH1cblxuICBjbG9zZUN1cnJlbnROYXZGbG93KHBhcmFtcz86IHt9KSB7XG4gICAgY29uc3Qgdmlld3MgPSBbLi4udGhpcy5nZXRWaWV3cygpXS5yZXZlcnNlKCk7XG4gICAgY29uc3QgY3VycmVudE5hdkZsb3cgPSB2aWV3cy5maW5kSW5kZXgodiA9PiB2LmVsZW1lbnQuZ2V0QXR0cmlidXRlKCduZXctbmF2LWZsb3cnKSk7XG4gICAgY29uc3QgdGFyZ2V0UGFnZSA9IGN1cnJlbnROYXZGbG93ID49IDAgJiYgdmlld3MubGVuZ3RoID4gMSA/IHZpZXdzW2N1cnJlbnROYXZGbG93ICsgMV0gOiBudWxsO1xuICAgIHJldHVybiB0YXJnZXRQYWdlID8gdGhpcy5wb3AodGFyZ2V0UGFnZS51cmwsIHBhcmFtcykgOiB0aGlzLnBvcFRvUm9vdCgpO1xuICB9XG5cbiAgZ2V0Vmlld3MoKSB7XG4gICAgY29uc3QgYzogYW55ID0geyAuLi50aGlzLm5hdkN0cmwgfTtcbiAgICBsZXQgdmlld3MgPSBbXTtcbiAgICBpZiAoYyAmJiBjLnRvcE91dGxldCAmJiBjLnRvcE91dGxldC5zdGFja0N0cmwpIHsgdmlld3MgPSBjLnRvcE91dGxldC5zdGFja0N0cmwudmlld3M7IH1cbiAgICByZXR1cm4gdmlld3M7XG4gIH1cblxuICBwcml2YXRlIGdldFByZXZpb3VzUGFnZVVybCgpIHtcbiAgICBjb25zdCB2aWV3cyA9IHRoaXMuZ2V0Vmlld3MoKTtcbiAgICByZXR1cm4gKHZpZXdzICYmIHZpZXdzLmxlbmd0aCA+IDEpID8gdmlld3Nbdmlld3MubGVuZ3RoIC0gMl0udXJsIDogbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um9vdFBhZ2VVcmwoKSB7XG4gICAgY29uc3Qgdmlld3MgPSB0aGlzLmdldFZpZXdzKCk7XG4gICAgcmV0dXJuICh2aWV3cyAmJiB2aWV3cy5sZW5ndGgpID8gdmlld3NbMF0udXJsIDogJyc7XG4gIH1cblxuICBwcml2YXRlIHNldEFuaW1hdGlvbkNvbmZpZygpIHtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZ1JlYWR5ID0gdHJ1ZTtcbiAgICB0aGlzLmNvbmZpZy5zZXQoJ25hdkFuaW1hdGlvbicsXG4gICAgICAoQW5pbWF0aW9uQzogQW5pbWF0aW9uLCBiYXNlRWw6IEhUTUxFbGVtZW50LCBvcHRzOiBhbnkpOiBQcm9taXNlPEFuaW1hdGlvbj4gPT4ge1xuICAgICAgICBsZXQgYW5pbSA9wqB0aGlzLmFuaW1hdGlvbjtcbiAgICAgICAgaWYgKG9wdHMuZGlyZWN0aW9uID09PSAnYmFjaycpIHtcbiAgICAgICAgICBhbmltID0gb3B0cy5lbnRlcmluZ0VsLmdldEF0dHJpYnV0ZSgnYW5pbWF0aW9uLWxlYXZlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAob3B0cy5kaXJlY3Rpb24gPT09ICdmb3J3YXJkJyAmJiB0aGlzLnN0YXJ0TmF2Rmxvdykge1xuICAgICAgICAgIG9wdHMuZW50ZXJpbmdFbC5zZXRBdHRyaWJ1dGUoJ25ldy1uYXYtZmxvdycsIHRydWUpO1xuICAgICAgICAgIHRoaXMuc3RhcnROYXZGbG93ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgb3B0cy5lbnRlcmluZ0VsLnNldEF0dHJpYnV0ZSgnYW5pbWF0aW9uLWVudGVyJywgdGhpcy5hbmltYXRpb24pO1xuICAgICAgICBvcHRzLmxlYXZpbmdFbC5zZXRBdHRyaWJ1dGUoJ2FuaW1hdGlvbi1sZWF2ZScsIHRoaXMuYW5pbWF0aW9uKTtcbiAgICAgICAgY29uc3QgaW9zID0gKG9wdHMgJiYgb3B0cy5tb2RlID09PSAnaW9zJyk7XG4gICAgICAgIHN3aXRjaCAoYW5pbSkge1xuICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgaWYgKGlvcykgeyAgICAgIHJldHVybiBhbmltYXRpb25QdXNoKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7IH1cbiAgICAgICAgICAgIGVsc2UgeyAgICAgICAgICByZXR1cm4gYW5pbWF0aW9uTW9kYWwoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTsgfVxuICAgICAgICAgIGNhc2UgJ3B1c2gnOiAgICAgIHJldHVybiBhbmltYXRpb25QdXNoKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgY2FzZSAnbW9kYWwnOiAgICAgcmV0dXJuIGFuaW1hdGlvbk1vZGFsKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgY2FzZSAnZmFkZSc6ICAgICAgcmV0dXJuIGFuaW1hdGlvbkZhZGUoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgICBjYXNlICdzYWZlcHVzaCc6ICByZXR1cm4gYW5pbWF0aW9uU2FmZVB1c2goQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgICBkZWZhdWx0OiAgICAgICAgICByZXR1cm4gYW5pbWF0aW9uTW9kYWwoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBhbmltYXRpb25QdXNoICAgICAoYSwgYiwgbykgIHsgcmV0dXJuIGlvc1RyYW5zaXRpb25BbmltYXRpb24oYSwgYiwgbyk7IH1cbmZ1bmN0aW9uIGFuaW1hdGlvbk1vZGFsICAgIChhLCBiLCBvKSAgeyByZXR1cm4gbWRUcmFuc2l0aW9uQW5pbWF0aW9uKGEsIGIsIG8pOyB9XG5mdW5jdGlvbiBhbmltYXRpb25GYWRlICAgICAoYSwgYiwgbykgIHsgcmV0dXJuIGZhZGVBbmltYXRpb24oYSwgYiwgbyk7IH1cbmZ1bmN0aW9uIGFuaW1hdGlvblNhZmVQdXNoIChhLCBiLCBvKSAgeyByZXR1cm4gc2FmZVB1c2hBbmltYXRpb24oYSwgYiwgbyk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZhZGVBbmltYXRpb24oQW5pbWF0aW9uQzogQW5pbWF0aW9uLCBfOiBIVE1MRWxlbWVudCwgb3B0czogYW55KSB7XG4gIGNvbnN0IGdldElvblBhZ2VFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpb24tcGFnZScpKSB7IHJldHVybiBlbGVtZW50OyB9XG4gICAgY29uc3QgcGFnZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignOnNjb3BlID4gLmlvbi1wYWdlLCA6c2NvcGUgPiBpb24tbmF2LCA6c2NvcGUgPiBpb24tdGFicycpO1xuICAgIHJldHVybiBwYWdlIHx8IGVsZW1lbnQ7XG4gIH07XG4gIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XG4gIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xuICBjb25zdCBpb25QYWdlRWxlbWVudCA9IGdldElvblBhZ2VFbGVtZW50KGVudGVyaW5nRWwpO1xuICBjb25zdCByb290VHJhbnNpdGlvbiA9IG5ldyBBbmltYXRpb25DKCk7XG4gIHJvb3RUcmFuc2l0aW9uLmFkZEVsZW1lbnQoaW9uUGFnZUVsZW1lbnQpLmJlZm9yZVJlbW92ZUNsYXNzKCdpb24tcGFnZS1pbnZpc2libGUnKTtcbiAgaWYgKG9wdHMuZGlyZWN0aW9uID09PSAnYmFjaycpIHsgLy8gYW5pbWF0ZSB0aGUgY29tcG9uZW50IGl0c2VsZlxuICAgIHJvb3RUcmFuc2l0aW9uLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgMzAwKS5lYXNpbmcoJ2N1YmljLWJlemllcigwLjQ3LDAsMC43NDUsMC43MTUpJyk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdFRyYW5zaXRpb24uZHVyYXRpb24ob3B0cy5kdXJhdGlvbiB8fCA0MDApXG4gICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC4zNiwwLjY2LDAuMDQsMSknKS5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxLCB0cnVlKTtcbiAgfVxuICBjb25zdCBlbnRlcmluZ1Rvb2xiYXJFbGUgPSBpb25QYWdlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24tdG9vbGJhcicpO1xuICBpZiAoZW50ZXJpbmdUb29sYmFyRWxlKSB7IC8vIEFuaW1hdGUgdG9vbGJhciBpZiBpdCdzIHRoZXJlXG4gICAgY29uc3QgZW50ZXJpbmdUb29sQmFyID0gbmV3IEFuaW1hdGlvbkMoKTtcbiAgICBlbnRlcmluZ1Rvb2xCYXIuYWRkRWxlbWVudChlbnRlcmluZ1Rvb2xiYXJFbGUpO1xuICAgIHJvb3RUcmFuc2l0aW9uLmFkZChlbnRlcmluZ1Rvb2xCYXIpO1xuICB9XG4gIC8vIHNldHVwIGxlYXZpbmcgdmlld1xuICBpZiAobGVhdmluZ0VsICYmIChvcHRzLmRpcmVjdGlvbiA9PT0gJ2JhY2snKSkgeyAvLyBsZWF2aW5nIGNvbnRlbnRcbiAgICByb290VHJhbnNpdGlvbi5kdXJhdGlvbihvcHRzLmR1cmF0aW9uIHx8IDMwMCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40NywwLDAuNzQ1LDAuNzE1KScpO1xuICAgIGNvbnN0IGxlYXZpbmdQYWdlID0gbmV3IEFuaW1hdGlvbkMoKTtcbiAgICBsZWF2aW5nUGFnZS5hZGRFbGVtZW50KGdldElvblBhZ2VFbGVtZW50KGxlYXZpbmdFbCkpLmZyb21Ubygnb3BhY2l0eScsIDEsIDApO1xuICAgIHJvb3RUcmFuc2l0aW9uLmFkZChsZWF2aW5nUGFnZSk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyb290VHJhbnNpdGlvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWZlUHVzaEFuaW1hdGlvbihBbmltYXRpb25DOiBBbmltYXRpb24sIF86IEhUTUxFbGVtZW50LCBvcHRzOiBhbnkpIHtcbiAgY29uc3QgZ2V0SW9uUGFnZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lvbi1wYWdlJykpIHsgcmV0dXJuIGVsZW1lbnQ7IH1cbiAgICBjb25zdCBwYWdlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAuaW9uLXBhZ2UsIDpzY29wZSA+IGlvbi1uYXYsIDpzY29wZSA+IGlvbi10YWJzJyk7XG4gICAgcmV0dXJuIHBhZ2UgfHwgZWxlbWVudDtcbiAgfTtcbiAgY29uc3QgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcbiAgY29uc3QgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XG4gIGNvbnN0IGlvblBhZ2VFbGVtZW50ID0gZ2V0SW9uUGFnZUVsZW1lbnQoZW50ZXJpbmdFbCk7XG4gIGNvbnN0IHJvb3RUcmFuc2l0aW9uID0gbmV3IEFuaW1hdGlvbkMoKTtcbiAgcm9vdFRyYW5zaXRpb24uYWRkRWxlbWVudChpb25QYWdlRWxlbWVudCkuYmVmb3JlUmVtb3ZlQ2xhc3MoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xuICByb290VHJhbnNpdGlvbi5kdXJhdGlvbihvcHRzLmR1cmF0aW9uIHx8IDUwMCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC4zNiwwLjY2LDAuMDQsMSknKTtcbiAgY29uc3QgbGVhdmluZ1BhZ2UgPSBuZXcgQW5pbWF0aW9uQygpO1xuICBjb25zdCBlbnRlcmluZ1BhZ2UgPSBuZXcgQW5pbWF0aW9uQygpO1xuICBpZiAob3B0cy5kaXJlY3Rpb24gPT09ICdiYWNrJykge1xuICAgIGxlYXZpbmdQYWdlLmFkZEVsZW1lbnQoZ2V0SW9uUGFnZUVsZW1lbnQobGVhdmluZ0VsKSkuZnJvbVRvKCd0cmFuc2xhdGVYJywgJzAnLCAnMTAwJScpO1xuICAgIGVudGVyaW5nUGFnZS5hZGRFbGVtZW50KGdldElvblBhZ2VFbGVtZW50KGVudGVyaW5nRWwpKS5mcm9tVG8oJ3RyYW5zbGF0ZVgnLCAnLTEwMCUnLCAnMCcpO1xuICB9IGVsc2Uge1xuICAgIGxlYXZpbmdQYWdlLmFkZEVsZW1lbnQoZ2V0SW9uUGFnZUVsZW1lbnQobGVhdmluZ0VsKSkuZnJvbVRvKCd0cmFuc2xhdGVYJywgJzAnLCAnLTEwMCUnKTtcbiAgICBlbnRlcmluZ1BhZ2UuYWRkRWxlbWVudChnZXRJb25QYWdlRWxlbWVudChlbnRlcmluZ0VsKSkuZnJvbVRvKCd0cmFuc2xhdGVYJywgJzEwMCUnLCAnMCcpO1xuICB9XG4gIHJvb3RUcmFuc2l0aW9uLmFkZChsZWF2aW5nUGFnZSk7XG4gIHJvb3RUcmFuc2l0aW9uLmFkZChlbnRlcmluZ1BhZ2UpO1xuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJvb3RUcmFuc2l0aW9uKTtcbn1cblxuIl19