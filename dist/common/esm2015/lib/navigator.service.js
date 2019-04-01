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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBR25HLE1BQU0sT0FBTyxTQUFTOzs7OztJQUtwQixZQUNVLE9BQXNCLEVBQ3RCLE1BQWM7UUFEZCxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKaEIsY0FBUyxHQUEwQyxNQUFNLENBQUM7UUFNaEUsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7OztJQUVELElBQUksQ0FBQyxHQUFXLEVBQUUsTUFBVyxFQUFFLFlBQW1ELFNBQVM7UUFDekYsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBWSxFQUFFLE1BQVc7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMs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QUFjLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0tBQ2pDO0lBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZDb250cm9sbGVyLCBDb25maWcgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tICdAaW9uaWMvY29yZSc7XG5pbXBvcnQgeyBpb3NUcmFuc2l0aW9uQW5pbWF0aW9uIH0gZnJvbSAnQGlvbmljL2NvcmUvZGlzdC9jb2xsZWN0aW9uL3V0aWxzL3RyYW5zaXRpb24vaW9zLnRyYW5zaXRpb24nO1xuaW1wb3J0IHsgbWRUcmFuc2l0aW9uQW5pbWF0aW9uIH0gZnJvbSAnQGlvbmljL2NvcmUvZGlzdC9jb2xsZWN0aW9uL3V0aWxzL3RyYW5zaXRpb24vbWQudHJhbnNpdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0b3Ige1xuXG4gIHByaXZhdGUgcGFyYW1zO1xuICBwcml2YXRlIGFuaW1hdGlvbjogJ2RlZmF1bHQnIHwgJ3B1c2gnIHwgJ21vZGFsJyB8ICdmYWRlJyA9ICdwdXNoJztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ1xuICApIHtcbiAgICB0aGlzLnNldEFuaW1hdGlvbkNvbmZpZygpO1xuICB9XG5cbiAgZ2V0UGFyYW1zKCkge1xuICAgIHJldHVybiB0aGlzLnBhcmFtcztcbiAgfVxuXG4gIHB1c2godXJsOiBzdHJpbmcsIHBhcmFtcz86IHt9LCBhbmltYXRpb246ICdkZWZhdWx0JyB8wqAncHVzaCcgfCAnbW9kYWwnIHwgJ2ZhZGUnID0gJ2RlZmF1bHQnKSB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb247XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZUZvcndhcmQodXJsKTtcbiAgfVxuXG4gIHBvcCh1cmw/OiBzdHJpbmcsIHBhcmFtcz86IHt9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZUJhY2sodXJsIHx8wqB0aGlzLmdldFByZXZpb3VzUGFnZVVybCgpKTtcbiAgfVxuXG4gIHBvcFRvUm9vdCgpIHtcbiAgICByZXR1cm4gdGhpcy5uYXZDdHJsLm5hdmlnYXRlQmFjayh0aGlzLmdldFJvb3RQYWdlVXJsKCkpO1xuICB9XG5cbiAgc2V0Um9vdCh1cmw6IHN0cmluZywgcGFyYW1zPzoge30pIHtcbiAgICB0aGlzLnBhcmFtcyA9IHBhcmFtcztcbiAgICByZXR1cm4gdGhpcy5uYXZDdHJsLm5hdmlnYXRlUm9vdCh1cmwpO1xuICB9XG5cbiAgZ2V0Vmlld3MoKSB7XG4gICAgY29uc3QgYzogYW55ID0geyAuLi50aGlzLm5hdkN0cmwgfTtcbiAgICBsZXQgdmlld3MgPSBbXTtcbiAgICBpZiAoYyAmJiBjLnRvcE91dGxldCAmJiBjLnRvcE91dGxldC5zdGFja0N0cmwpIHsgdmlld3MgPSBjLnRvcE91dGxldC5zdGFja0N0cmwudmlld3M7IH1cbiAgICByZXR1cm4gdmlld3M7XG4gIH1cblxuICBwcml2YXRlIGdldFByZXZpb3VzUGFnZVVybCgpIHtcbiAgICBjb25zdCB2aWV3cyA9IHRoaXMuZ2V0Vmlld3MoKTtcbiAgICByZXR1cm4gKHZpZXdzICYmIHZpZXdzLmxlbmd0aCA+IDEpID8gdmlld3Nbdmlld3MubGVuZ3RoIC0gMl0udXJsIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGdldFJvb3RQYWdlVXJsKCkge1xuICAgIGNvbnN0IHZpZXdzID0gdGhpcy5nZXRWaWV3cygpO1xuICAgIHJldHVybiAodmlld3MgJiYgdmlld3MubGVuZ3RoKSA/IHZpZXdzWzBdLnVybCA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBbmltYXRpb25Db25maWcoKSB7XG4gICAgdGhpcy5jb25maWcuc2V0KCduYXZBbmltYXRpb24nLFxuICAgICAgKEFuaW1hdGlvbkM6IEFuaW1hdGlvbiwgYmFzZUVsOiBIVE1MRWxlbWVudCwgb3B0czogYW55KTogUHJvbWlzZTxBbmltYXRpb24+ID0+IHtcbiAgICAgICAgbGV0IGFuaW0gPcKgdGhpcy5hbmltYXRpb247XG4gICAgICAgIGlmIChvcHRzLmRpcmVjdGlvbiA9PT0gJ2JhY2snKSB7IGFuaW0gPSBvcHRzLmVudGVyaW5nRWwuZ2V0QXR0cmlidXRlKCdhbmltYXRpb24tbGVhdmUnKTsgfVxuICAgICAgICBvcHRzLmVudGVyaW5nRWwuc2V0QXR0cmlidXRlKCdhbmltYXRpb24tZW50ZXInLCB0aGlzLmFuaW1hdGlvbik7XG4gICAgICAgIG9wdHMubGVhdmluZ0VsLnNldEF0dHJpYnV0ZSgnYW5pbWF0aW9uLWxlYXZlJywgdGhpcy5hbmltYXRpb24pO1xuICAgICAgICBjb25zdCBpb3MgPSAob3B0cyAmJiBvcHRzLm1vZGUgPT09ICdpb3MnKTtcbiAgICAgICAgc3dpdGNoIChhbmltKSB7XG4gICAgICAgICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgICAgICAgICBpZiAoaW9zKSB7ICByZXR1cm4gYW5pbWF0aW9uUHVzaChBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpOyB9XG4gICAgICAgICAgICBlbHNlIHsgICAgICByZXR1cm4gYW5pbWF0aW9uTW9kYWwoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTsgfVxuICAgICAgICAgIGNhc2UgJ3B1c2gnOiAgcmV0dXJuIGFuaW1hdGlvblB1c2goQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgICBjYXNlICdtb2RhbCc6IHJldHVybiBhbmltYXRpb25Nb2RhbChBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpO1xuICAgICAgICAgIGNhc2UgJ2ZhZGUnOiAgcmV0dXJuIGFuaW1hdGlvbkZhZGUoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgICBkZWZhdWx0OiAgICAgIHJldHVybiBhbmltYXRpb25Nb2RhbChBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG59XG5cbmZ1bmN0aW9uIGFuaW1hdGlvblB1c2ggICAgKGEsIGIsIG8pICB7IHJldHVybiBpb3NUcmFuc2l0aW9uQW5pbWF0aW9uKGEsIGIsIG8pOyB9XG5mdW5jdGlvbiBhbmltYXRpb25Nb2RhbCAgIChhLCBiLCBvKSAgeyByZXR1cm4gbWRUcmFuc2l0aW9uQW5pbWF0aW9uKGEsIGIsIG8pOyB9XG5mdW5jdGlvbiBhbmltYXRpb25GYWRlICAgIChhLCBiLCBvKSAgeyByZXR1cm4gZmFkZUFuaW1hdGlvbihhLCBiLCBvKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gZmFkZUFuaW1hdGlvbihBbmltYXRpb25DOiBBbmltYXRpb24sIF86IEhUTUxFbGVtZW50LCBvcHRzOiBhbnkpIHtcbiAgY29uc3QgZ2V0SW9uUGFnZUVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2lvbi1wYWdlJykpIHsgcmV0dXJuIGVsZW1lbnQ7IH1cbiAgICBjb25zdCBwYWdlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCc6c2NvcGUgPiAuaW9uLXBhZ2UsIDpzY29wZSA+IGlvbi1uYXYsIDpzY29wZSA+IGlvbi10YWJzJyk7XG4gICAgcmV0dXJuIHBhZ2UgfHwgZWxlbWVudDtcbiAgfTtcbiAgY29uc3QgZW50ZXJpbmdFbCA9IG9wdHMuZW50ZXJpbmdFbDtcbiAgY29uc3QgbGVhdmluZ0VsID0gb3B0cy5sZWF2aW5nRWw7XG4gIGNvbnN0IGlvblBhZ2VFbGVtZW50ID0gZ2V0SW9uUGFnZUVsZW1lbnQoZW50ZXJpbmdFbCk7XG4gIGNvbnN0IHJvb3RUcmFuc2l0aW9uID0gbmV3IEFuaW1hdGlvbkMoKTtcbiAgcm9vdFRyYW5zaXRpb24uYWRkRWxlbWVudChpb25QYWdlRWxlbWVudCkuYmVmb3JlUmVtb3ZlQ2xhc3MoJ2lvbi1wYWdlLWludmlzaWJsZScpO1xuICBpZiAob3B0cy5kaXJlY3Rpb24gPT09ICdiYWNrJykgeyAvLyBhbmltYXRlIHRoZSBjb21wb25lbnQgaXRzZWxmXG4gICAgcm9vdFRyYW5zaXRpb24uZHVyYXRpb24ob3B0cy5kdXJhdGlvbiB8fCAyMDApLmVhc2luZygnY3ViaWMtYmV6aWVyKDAuNDcsMCwwLjc0NSwwLjcxNSknKTtcbiAgfSBlbHNlIHtcbiAgICByb290VHJhbnNpdGlvbi5kdXJhdGlvbihvcHRzLmR1cmF0aW9uIHx8IDI4MClcbiAgICAgIC5lYXNpbmcoJ2N1YmljLWJlemllcigwLjM2LDAuNjYsMC4wNCwxKScpLmZyb21Ubygnb3BhY2l0eScsIDAuMDEsIDEsIHRydWUpO1xuICB9XG4gIGNvbnN0IGVudGVyaW5nVG9vbGJhckVsZSA9IGlvblBhZ2VFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi10b29sYmFyJyk7XG4gIGlmIChlbnRlcmluZ1Rvb2xiYXJFbGUpIHsgLy8gQW5pbWF0ZSB0b29sYmFyIGlmIGl0J3MgdGhlcmVcbiAgICBjb25zdCBlbnRlcmluZ1Rvb2xCYXIgPSBuZXcgQW5pbWF0aW9uQygpO1xuICAgIGVudGVyaW5nVG9vbEJhci5hZGRFbGVtZW50KGVudGVyaW5nVG9vbGJhckVsZSk7XG4gICAgcm9vdFRyYW5zaXRpb24uYWRkKGVudGVyaW5nVG9vbEJhcik7XG4gIH1cbiAgLy8gc2V0dXAgbGVhdmluZyB2aWV3XG4gIGlmIChsZWF2aW5nRWwgJiYgKG9wdHMuZGlyZWN0aW9uID09PSAnYmFjaycpKSB7IC8vIGxlYXZpbmcgY29udGVudFxuICAgIHJvb3RUcmFuc2l0aW9uLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgMjAwKS5lYXNpbmcoJ2N1YmljLWJlemllcigwLjQ3LDAsMC43NDUsMC43MTUpJyk7XG4gICAgY29uc3QgbGVhdmluZ1BhZ2UgPSBuZXcgQW5pbWF0aW9uQygpO1xuICAgIGxlYXZpbmdQYWdlLmFkZEVsZW1lbnQoZ2V0SW9uUGFnZUVsZW1lbnQobGVhdmluZ0VsKSkuZnJvbVRvKCdvcGFjaXR5JywgMSwgMCk7XG4gICAgcm9vdFRyYW5zaXRpb24uYWRkKGxlYXZpbmdQYWdlKTtcbiAgfVxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJvb3RUcmFuc2l0aW9uKTtcbn1cbiJdfQ==