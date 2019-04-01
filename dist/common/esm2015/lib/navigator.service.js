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
        this.animation = 'push';
        this.setAnimationConfig();
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
     * @return {?}
     */
    push(url, params, animation = 'default') {
        this.params = params;
        this.animation = animation;
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
        this.config.set('navAnimation', (AnimationC, baseEl, opts) => {
            /** @type {?} */
            let anim = this.animation;
            if (opts.direction === 'back') {
                anim = opts.enteringEl.getAttribute('animation-leave');
            }
            opts.enteringEl.setAttribute('animation-enter', this.animation);
            opts.leavingEl.setAttribute('animation-leave', this.animation);
            /** @type {?} */
            const ios = (opts && opts.mode === 'ios');
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
        rootTransition.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
    }
    else {
        rootTransition.duration(opts.duration || 280)
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
        rootTransition.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
        /** @type {?} */
        const leavingPage = new AnimationC();
        leavingPage.addElement(getIonPageElement(leavingEl)).fromTo('opacity', 1, 0);
        rootTransition.add(leavingPage);
    }
    return Promise.resolve(rootTransition);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBR25HLE1BQU0sT0FBTyxTQUFTOzs7OztJQUtwQixZQUNVLE9BQXNCLEVBQ3RCLE1BQWM7UUFEZCxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKaEIsY0FBUyxHQUEwQyxNQUFNLENBQUM7UUFNaEUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7OztJQUVELElBQUksQ0FBQyxHQUFXLEVBQUUsTUFBVyxFQUFFLFlBQW1ELFNBQVM7UUFDekYsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBWSxFQUFFLE1BQVc7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMs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VyxDQUFDLENBQUM7S0FDakM7SUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDekMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIENvbmZpZyB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmltcG9ydCB7IGlvc1RyYW5zaXRpb25BbmltYXRpb24gfSBmcm9tICdAaW9uaWMvY29yZS9kaXN0L2NvbGxlY3Rpb24vdXRpbHMvdHJhbnNpdGlvbi9pb3MudHJhbnNpdGlvbic7XG5pbXBvcnQgeyBtZFRyYW5zaXRpb25BbmltYXRpb24gfSBmcm9tICdAaW9uaWMvY29yZS9kaXN0L2NvbGxlY3Rpb24vdXRpbHMvdHJhbnNpdGlvbi9tZC50cmFuc2l0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvciB7XG5cbiAgcHJpdmF0ZSBwYXJhbXM7XG4gIHByaXZhdGUgYW5pbWF0aW9uOiAnZGVmYXVsdCcgfCAncHVzaCcgfCAnbW9kYWwnIHwgJ2ZhZGUnID0gJ3B1c2gnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmF2Q3RybDogTmF2Q29udHJvbGxlcixcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnXG4gICkge1xuICAgIHRoaXMuc2V0QW5pbWF0aW9uQ29uZmlnKCk7XG4gIH1cblxuICBnZXRQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICB9XG5cbiAgcHVzaCh1cmw6IHN0cmluZywgcGFyYW1zPzoge30sIGFuaW1hdGlvbjogJ2RlZmF1bHQnIHzCoCdwdXNoJyB8ICdtb2RhbCcgfCAnZmFkZScgPSAnZGVmYXVsdCcpIHtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvbjtcbiAgICByZXR1cm4gdGhpcy5uYXZDdHJsLm5hdmlnYXRlRm9yd2FyZCh1cmwpO1xuICB9XG5cbiAgcG9wKHVybD86IHN0cmluZywgcGFyYW1zPzoge30pIHtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICByZXR1cm4gdGhpcy5uYXZDdHJsLm5hdmlnYXRlQmFjayh1cmwgfHzCoHRoaXMuZ2V0UHJldmlvdXNQYWdlVXJsKCkpO1xuICB9XG5cbiAgcG9wVG9Sb290KCkge1xuICAgIHJldHVybiB0aGlzLm5hdkN0cmwubmF2aWdhdGVCYWNrKHRoaXMuZ2V0Um9vdFBhZ2VVcmwoKSk7XG4gIH1cblxuICBzZXRSb290KHVybDogc3RyaW5nLCBwYXJhbXM/OiB7fSkge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHJldHVybiB0aGlzLm5hdkN0cmwubmF2aWdhdGVSb290KHVybCk7XG4gIH1cblxuICBnZXRWaWV3cygpIHtcbiAgICBjb25zdCBjOiBhbnkgPSB7IC4uLnRoaXMubmF2Q3RybCB9O1xuICAgIGxldCB2aWV3cyA9IFtdO1xuICAgIGlmIChjICYmIGMudG9wT3V0bGV0ICYmIGMudG9wT3V0bGV0LnN0YWNrQ3RybCkgeyB2aWV3cyA9IGMudG9wT3V0bGV0LnN0YWNrQ3RybC52aWV3czsgfVxuICAgIHJldHVybiB2aWV3cztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJldmlvdXNQYWdlVXJsKCkge1xuICAgIGNvbnN0IHZpZXdzID0gdGhpcy5nZXRWaWV3cygpO1xuICAgIHJldHVybiAodmlld3MgJiYgdmlld3MubGVuZ3RoID4gMSkgPyB2aWV3c1t2aWV3cy5sZW5ndGggLSAyXS51cmwgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um9vdFBhZ2VVcmwoKSB7XG4gICAgY29uc3Qgdmlld3MgPSB0aGlzLmdldFZpZXdzKCk7XG4gICAgcmV0dXJuICh2aWV3cyAmJiB2aWV3cy5sZW5ndGgpID8gdmlld3NbMF0udXJsIDogJyc7XG4gIH1cblxuICBwcml2YXRlIHNldEFuaW1hdGlvbkNvbmZpZygpIHtcbiAgICB0aGlzLmNvbmZpZy5zZXQoJ25hdkFuaW1hdGlvbicsXG4gICAgICAoQW5pbWF0aW9uQzogQW5pbWF0aW9uLCBiYXNlRWw6IEhUTUxFbGVtZW50LCBvcHRzOiBhbnkpOiBQcm9taXNlPEFuaW1hdGlvbj4gPT4ge1xuICAgICAgICBsZXQgYW5pbSA9wqB0aGlzLmFuaW1hdGlvbjtcbiAgICAgICAgaWYgKG9wdHMuZGlyZWN0aW9uID09PSAnYmFjaycpIHsgYW5pbSA9IG9wdHMuZW50ZXJpbmdFbC5nZXRBdHRyaWJ1dGUoJ2FuaW1hdGlvbi1sZWF2ZScpOyB9XG4gICAgICAgIG9wdHMuZW50ZXJpbmdFbC5zZXRBdHRyaWJ1dGUoJ2FuaW1hdGlvbi1lbnRlcicsIHRoaXMuYW5pbWF0aW9uKTtcbiAgICAgICAgb3B0cy5sZWF2aW5nRWwuc2V0QXR0cmlidXRlKCdhbmltYXRpb24tbGVhdmUnLCB0aGlzLmFuaW1hdGlvbik7XG4gICAgICAgIGNvbnN0IGlvcyA9IChvcHRzICYmIG9wdHMubW9kZSA9PT0gJ2lvcycpO1xuICAgICAgICBzd2l0Y2ggKGFuaW0pIHtcbiAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgIGlmIChpb3MpICAgIHJldHVybiBhbmltYXRpb25QdXNoKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgICBlbHNlICAgICAgICByZXR1cm4gYW5pbWF0aW9uTW9kYWwoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgICBjYXNlICdwdXNoJzogIHJldHVybiBhbmltYXRpb25QdXNoKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgY2FzZSAnbW9kYWwnOiByZXR1cm4gYW5pbWF0aW9uTW9kYWwoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgICBjYXNlICdmYWRlJzogIHJldHVybiBhbmltYXRpb25GYWRlKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgZGVmYXVsdDogICAgICByZXR1cm4gYW5pbWF0aW9uTW9kYWwoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBhbmltYXRpb25QdXNoICAgIChhLCBiLCBvKSAgeyByZXR1cm4gaW9zVHJhbnNpdGlvbkFuaW1hdGlvbihhLCBiLCBvKTsgfVxuZnVuY3Rpb24gYW5pbWF0aW9uTW9kYWwgICAoYSwgYiwgbykgIHsgcmV0dXJuIG1kVHJhbnNpdGlvbkFuaW1hdGlvbihhLCBiLCBvKTsgfVxuZnVuY3Rpb24gYW5pbWF0aW9uRmFkZSAgICAoYSwgYiwgbykgIHsgcmV0dXJuIGZhZGVBbmltYXRpb24oYSwgYiwgbyk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZhZGVBbmltYXRpb24oQW5pbWF0aW9uQzogQW5pbWF0aW9uLCBfOiBIVE1MRWxlbWVudCwgb3B0czogYW55KSB7XG4gIGNvbnN0IGdldElvblBhZ2VFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpb24tcGFnZScpKSB7IHJldHVybiBlbGVtZW50OyB9XG4gICAgY29uc3QgcGFnZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignOnNjb3BlID4gLmlvbi1wYWdlLCA6c2NvcGUgPiBpb24tbmF2LCA6c2NvcGUgPiBpb24tdGFicycpO1xuICAgIHJldHVybiBwYWdlIHx8IGVsZW1lbnQ7XG4gIH07XG4gIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XG4gIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xuICBjb25zdCBpb25QYWdlRWxlbWVudCA9IGdldElvblBhZ2VFbGVtZW50KGVudGVyaW5nRWwpO1xuICBjb25zdCByb290VHJhbnNpdGlvbiA9IG5ldyBBbmltYXRpb25DKCk7XG4gIHJvb3RUcmFuc2l0aW9uLmFkZEVsZW1lbnQoaW9uUGFnZUVsZW1lbnQpLmJlZm9yZVJlbW92ZUNsYXNzKCdpb24tcGFnZS1pbnZpc2libGUnKTtcbiAgaWYgKG9wdHMuZGlyZWN0aW9uID09PSAnYmFjaycpIHsgLy8gYW5pbWF0ZSB0aGUgY29tcG9uZW50IGl0c2VsZlxuICAgIHJvb3RUcmFuc2l0aW9uLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgMjAwKS5lYXNpbmcoJ2N1YmljLWJlemllcigwLjQ3LDAsMC43NDUsMC43MTUpJyk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdFRyYW5zaXRpb24uZHVyYXRpb24ob3B0cy5kdXJhdGlvbiB8fCAyODApXG4gICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC4zNiwwLjY2LDAuMDQsMSknKS5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxLCB0cnVlKTtcbiAgfVxuICBjb25zdCBlbnRlcmluZ1Rvb2xiYXJFbGUgPSBpb25QYWdlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24tdG9vbGJhcicpO1xuICBpZiAoZW50ZXJpbmdUb29sYmFyRWxlKSB7IC8vIEFuaW1hdGUgdG9vbGJhciBpZiBpdCdzIHRoZXJlXG4gICAgY29uc3QgZW50ZXJpbmdUb29sQmFyID0gbmV3IEFuaW1hdGlvbkMoKTtcbiAgICBlbnRlcmluZ1Rvb2xCYXIuYWRkRWxlbWVudChlbnRlcmluZ1Rvb2xiYXJFbGUpO1xuICAgIHJvb3RUcmFuc2l0aW9uLmFkZChlbnRlcmluZ1Rvb2xCYXIpO1xuICB9XG4gIC8vIHNldHVwIGxlYXZpbmcgdmlld1xuICBpZiAobGVhdmluZ0VsICYmIChvcHRzLmRpcmVjdGlvbiA9PT0gJ2JhY2snKSkgeyAvLyBsZWF2aW5nIGNvbnRlbnRcbiAgICByb290VHJhbnNpdGlvbi5kdXJhdGlvbihvcHRzLmR1cmF0aW9uIHx8IDIwMCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40NywwLDAuNzQ1LDAuNzE1KScpO1xuICAgIGNvbnN0IGxlYXZpbmdQYWdlID0gbmV3IEFuaW1hdGlvbkMoKTtcbiAgICBsZWF2aW5nUGFnZS5hZGRFbGVtZW50KGdldElvblBhZ2VFbGVtZW50KGxlYXZpbmdFbCkpLmZyb21Ubygnb3BhY2l0eScsIDEsIDApO1xuICAgIHJvb3RUcmFuc2l0aW9uLmFkZChsZWF2aW5nUGFnZSk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyb290VHJhbnNpdGlvbik7XG59XG4iXX0=