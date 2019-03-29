/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { NavController, Config } from '@ionic/angular';
import { iosTransitionAnimation } from '@ionic/core/dist/collection/utils/transition/ios.transition';
import { mdTransitionAnimation } from '@ionic/core/dist/collection/utils/transition/md.transition';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
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
        return this.params || {};
    }
    /**
     * @param {?} url
     * @param {?=} params
     * @param {?=} animation
     * @return {?}
     */
    push(url, params, animation = 'push') {
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
            const animPlatform = ((opts && opts.mode === 'ios') ? 'ios' : 'md') + '_' + anim;
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
    }
}
Navigator.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
Navigator.ctorParameters = () => [
    { type: NavController },
    { type: Config }
];
/** @nocollapse */ Navigator.ngInjectableDef = i0.defineInjectable({ factory: function Navigator_Factory() { return new Navigator(i0.inject(i1.NavController), i0.inject(i1.Config)); }, token: Navigator, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWNvbW1vbi8iLCJzb3VyY2VzIjpbImxpYi9uYXZpZ2F0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3JHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDOzs7QUFLbkcsTUFBTSxPQUFPLFNBQVM7Ozs7O0lBS3BCLFlBQ1UsT0FBc0IsRUFDdEIsTUFBYztRQURkLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFDdEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUpoQixjQUFTLEdBQThCLE1BQU0sQ0FBQztRQU1wRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7OztJQUVELElBQUksQ0FBQyxHQUFXLEVBQUUsTUFBVyxFQUFFLFlBQXVDLE1BQU07UUFDMUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBWSxFQUFFLE1BQVc7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLGtCQUFr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Q0FBQyxDQUFDLE1BQU0sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDOztjQUNuRixXQUFXLEdBQUcsSUFBSSxVQUFVLEVBQUU7UUFDcEMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzdFLGNBQWMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDakM7SUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDekMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdkNvbnRyb2xsZXIsIENvbmZpZyB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gJ0Bpb25pYy9jb3JlJztcbmltcG9ydCB7IGlvc1RyYW5zaXRpb25BbmltYXRpb24gfSBmcm9tICdAaW9uaWMvY29yZS9kaXN0L2NvbGxlY3Rpb24vdXRpbHMvdHJhbnNpdGlvbi9pb3MudHJhbnNpdGlvbic7XG5pbXBvcnQgeyBtZFRyYW5zaXRpb25BbmltYXRpb24gfSBmcm9tICdAaW9uaWMvY29yZS9kaXN0L2NvbGxlY3Rpb24vdXRpbHMvdHJhbnNpdGlvbi9tZC50cmFuc2l0aW9uJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRvciB7XG5cbiAgcHJpdmF0ZSBwYXJhbXM7XG4gIHByaXZhdGUgYW5pbWF0aW9uOiAncHVzaCcgfCAnbW9kYWwnIHwgJ2ZhZGUnID0gJ3B1c2gnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmF2Q3RybDogTmF2Q29udHJvbGxlcixcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnXG4gICkge1xuICAgIHRoaXMuc2V0QW5pbWF0aW9uQ29uZmlnKCk7XG4gIH1cblxuICBnZXRQYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgcHVzaCh1cmw6IHN0cmluZywgcGFyYW1zPzoge30sIGFuaW1hdGlvbjogJ3B1c2gnIHwgJ21vZGFsJyB8ICdmYWRlJyA9ICdwdXNoJykge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xuICAgIHJldHVybiB0aGlzLm5hdkN0cmwubmF2aWdhdGVGb3J3YXJkKHVybCk7XG4gIH1cblxuICBwb3AodXJsPzogc3RyaW5nLCBwYXJhbXM/OiB7fSkge1xuICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIHJldHVybiB0aGlzLm5hdkN0cmwubmF2aWdhdGVCYWNrKHVybCB8fMKgdGhpcy5nZXRQcmV2aW91c1BhZ2VVcmwoKSk7XG4gIH1cblxuICBwb3BUb1Jvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZUJhY2sodGhpcy5nZXRSb290UGFnZVVybCgpKTtcbiAgfVxuXG4gIHNldFJvb3QodXJsOiBzdHJpbmcsIHBhcmFtcz86IHt9KSB7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgcmV0dXJuIHRoaXMubmF2Q3RybC5uYXZpZ2F0ZVJvb3QodXJsKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJldmlvdXNQYWdlVXJsKCkge1xuICAgIGNvbnN0IHZpZXdzID0gdGhpcy5nZXRWaWV3cygpO1xuICAgIHJldHVybiAodmlld3MgJiYgdmlld3MubGVuZ3RoID4gMSkgPyB2aWV3c1t2aWV3cy5sZW5ndGggLSAyXS51cmwgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um9vdFBhZ2VVcmwoKSB7XG4gICAgY29uc3Qgdmlld3MgPSB0aGlzLmdldFZpZXdzKCk7XG4gICAgcmV0dXJuICh2aWV3cyAmJiB2aWV3cy5sZW5ndGgpID8gdmlld3NbMF0udXJsIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGdldFZpZXdzKCkge1xuICAgIGNvbnN0IGM6IGFueSA9IHsgLi4udGhpcy5uYXZDdHJsIH07XG4gICAgbGV0IHZpZXdzID0gW107XG4gICAgaWYgKGMgJiYgYy50b3BPdXRsZXQgJiYgYy50b3BPdXRsZXQuc3RhY2tDdHJsKSB7IHZpZXdzID0gYy50b3BPdXRsZXQuc3RhY2tDdHJsLnZpZXdzOyB9XG4gICAgcmV0dXJuIHZpZXdzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRBbmltYXRpb25Db25maWcoKSB7XG4gICAgdGhpcy5jb25maWcuc2V0KCduYXZBbmltYXRpb24nLFxuICAgICAgKEFuaW1hdGlvbkM6IEFuaW1hdGlvbiwgYmFzZUVsOiBIVE1MRWxlbWVudCwgb3B0czogYW55KTogUHJvbWlzZTxBbmltYXRpb24+ID0+IHtcbiAgICAgICAgbGV0IGFuaW0gPcKgdGhpcy5hbmltYXRpb247XG4gICAgICAgIGlmIChvcHRzLmRpcmVjdGlvbiA9PT0gJ2JhY2snKSB7IGFuaW0gPSBvcHRzLmVudGVyaW5nRWwuZ2V0QXR0cmlidXRlKCdhbmltYXRpb24tbGVhdmUnKTsgfVxuICAgICAgICBvcHRzLmVudGVyaW5nRWwuc2V0QXR0cmlidXRlKCdhbmltYXRpb24tZW50ZXInLCB0aGlzLmFuaW1hdGlvbik7XG4gICAgICAgIG9wdHMubGVhdmluZ0VsLnNldEF0dHJpYnV0ZSgnYW5pbWF0aW9uLWxlYXZlJywgdGhpcy5hbmltYXRpb24pO1xuICAgICAgICBjb25zdCBhbmltUGxhdGZvcm0gPSAoKG9wdHMgJiYgb3B0cy5tb2RlID09PSAnaW9zJykgPyAnaW9zJyA6ICdtZCcpICsgJ18nICsgYW5pbTtcbiAgICAgICAgc3dpdGNoIChhbmltUGxhdGZvcm0pIHtcbiAgICAgICAgICBjYXNlICdpb3NfcHVzaCc6ICByZXR1cm4gYW5pbWF0aW9uUHVzaChBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpO1xuICAgICAgICAgIGNhc2UgJ2lvc19tb2RhbCc6IHJldHVybiBhbmltYXRpb25Nb2RhbChBbmltYXRpb25DLCBiYXNlRWwsIG9wdHMpO1xuICAgICAgICAgIGNhc2UgJ2lvc19mYWRlJzogIHJldHVybiBhbmltYXRpb25GYWRlKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgY2FzZSAnbWRfcHVzaCc6ICAgcmV0dXJuIGFuaW1hdGlvbk1vZGFsKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgY2FzZSAnbWRfbW9kYWwnOiAgcmV0dXJuIGFuaW1hdGlvbk1vZGFsKEFuaW1hdGlvbkMsIGJhc2VFbCwgb3B0cyk7XG4gICAgICAgICAgY2FzZSAnbWRfZmFkZSc6ICAgcmV0dXJuIGFuaW1hdGlvbkZhZGUoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgICBkZWZhdWx0OiAgICAgICAgICByZXR1cm4gYW5pbWF0aW9uTW9kYWwoQW5pbWF0aW9uQywgYmFzZUVsLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxufVxuXG5mdW5jdGlvbiBhbmltYXRpb25QdXNoICAgIChhLCBiLCBvKSAgeyByZXR1cm4gaW9zVHJhbnNpdGlvbkFuaW1hdGlvbihhLCBiLCBvKTsgfVxuZnVuY3Rpb24gYW5pbWF0aW9uTW9kYWwgICAoYSwgYiwgbykgIHsgcmV0dXJuIG1kVHJhbnNpdGlvbkFuaW1hdGlvbihhLCBiLCBvKTsgfVxuZnVuY3Rpb24gYW5pbWF0aW9uRmFkZSAgICAoYSwgYiwgbykgIHsgcmV0dXJuIGZhZGVBbmltYXRpb24oYSwgYiwgbyk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGZhZGVBbmltYXRpb24oQW5pbWF0aW9uQzogQW5pbWF0aW9uLCBfOiBIVE1MRWxlbWVudCwgb3B0czogYW55KSB7XG4gIGNvbnN0IGdldElvblBhZ2VFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpb24tcGFnZScpKSB7IHJldHVybiBlbGVtZW50OyB9XG4gICAgY29uc3QgcGFnZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignOnNjb3BlID4gLmlvbi1wYWdlLCA6c2NvcGUgPiBpb24tbmF2LCA6c2NvcGUgPiBpb24tdGFicycpO1xuICAgIHJldHVybiBwYWdlIHx8IGVsZW1lbnQ7XG4gIH07XG4gIGNvbnN0IGVudGVyaW5nRWwgPSBvcHRzLmVudGVyaW5nRWw7XG4gIGNvbnN0IGxlYXZpbmdFbCA9IG9wdHMubGVhdmluZ0VsO1xuICBjb25zdCBpb25QYWdlRWxlbWVudCA9IGdldElvblBhZ2VFbGVtZW50KGVudGVyaW5nRWwpO1xuICBjb25zdCByb290VHJhbnNpdGlvbiA9IG5ldyBBbmltYXRpb25DKCk7XG4gIHJvb3RUcmFuc2l0aW9uLmFkZEVsZW1lbnQoaW9uUGFnZUVsZW1lbnQpLmJlZm9yZVJlbW92ZUNsYXNzKCdpb24tcGFnZS1pbnZpc2libGUnKTtcbiAgaWYgKG9wdHMuZGlyZWN0aW9uID09PSAnYmFjaycpIHsgLy8gYW5pbWF0ZSB0aGUgY29tcG9uZW50IGl0c2VsZlxuICAgIHJvb3RUcmFuc2l0aW9uLmR1cmF0aW9uKG9wdHMuZHVyYXRpb24gfHwgMjAwKS5lYXNpbmcoJ2N1YmljLWJlemllcigwLjQ3LDAsMC43NDUsMC43MTUpJyk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdFRyYW5zaXRpb24uZHVyYXRpb24ob3B0cy5kdXJhdGlvbiB8fCAyODApXG4gICAgICAuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC4zNiwwLjY2LDAuMDQsMSknKS5mcm9tVG8oJ29wYWNpdHknLCAwLjAxLCAxLCB0cnVlKTtcbiAgfVxuICBjb25zdCBlbnRlcmluZ1Rvb2xiYXJFbGUgPSBpb25QYWdlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24tdG9vbGJhcicpO1xuICBpZiAoZW50ZXJpbmdUb29sYmFyRWxlKSB7IC8vIEFuaW1hdGUgdG9vbGJhciBpZiBpdCdzIHRoZXJlXG4gICAgY29uc3QgZW50ZXJpbmdUb29sQmFyID0gbmV3IEFuaW1hdGlvbkMoKTtcbiAgICBlbnRlcmluZ1Rvb2xCYXIuYWRkRWxlbWVudChlbnRlcmluZ1Rvb2xiYXJFbGUpO1xuICAgIHJvb3RUcmFuc2l0aW9uLmFkZChlbnRlcmluZ1Rvb2xCYXIpO1xuICB9XG4gIC8vIHNldHVwIGxlYXZpbmcgdmlld1xuICBpZiAobGVhdmluZ0VsICYmIChvcHRzLmRpcmVjdGlvbiA9PT0gJ2JhY2snKSkgeyAvLyBsZWF2aW5nIGNvbnRlbnRcbiAgICByb290VHJhbnNpdGlvbi5kdXJhdGlvbihvcHRzLmR1cmF0aW9uIHx8IDIwMCkuZWFzaW5nKCdjdWJpYy1iZXppZXIoMC40NywwLDAuNzQ1LDAuNzE1KScpO1xuICAgIGNvbnN0IGxlYXZpbmdQYWdlID0gbmV3IEFuaW1hdGlvbkMoKTtcbiAgICBsZWF2aW5nUGFnZS5hZGRFbGVtZW50KGdldElvblBhZ2VFbGVtZW50KGxlYXZpbmdFbCkpLmZyb21Ubygnb3BhY2l0eScsIDEsIDApO1xuICAgIHJvb3RUcmFuc2l0aW9uLmFkZChsZWF2aW5nUGFnZSk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyb290VHJhbnNpdGlvbik7XG59XG4iXX0=