import { Injectable } from '@angular/core';
import { NavController, Config } from '@ionic/angular';
import { Animation } from '@ionic/core';
import { iosTransitionAnimation } from '@ionic/core/dist/collection/utils/transition/ios.transition';
import { mdTransitionAnimation } from '@ionic/core/dist/collection/utils/transition/md.transition';

@Injectable({
  providedIn: 'root',
})
export class Navigator {

  private params;
  private animation: 'push' | 'modal' | 'fade' = 'push';

  constructor(
    private navCtrl: NavController,
    private config: Config
  ) {
    this.setAnimationConfig();
  }

  getParams() {
    return this.params || {};
  }

  push(url: string, params?: {}, animation: 'push' | 'modal' | 'fade' = 'push') {
    this.params = params;
    this.animation = animation;
    return this.navCtrl.navigateForward(url);
  }

  pop(url?: string, params?: {}) {
    this.params = params;
    return this.navCtrl.navigateBack(url || this.getPreviousPageUrl());
  }

  popToRoot() {
    return this.navCtrl.navigateBack(this.getRootPageUrl());
  }

  setRoot(url: string, params?: {}) {
    this.params = params;
    return this.navCtrl.navigateRoot(url);
  }

  private getPreviousPageUrl() {
    const views = this.getViews();
    return (views && views.length > 1) ? views[views.length - 2].url : '';
  }

  private getRootPageUrl() {
    const views = this.getViews();
    return (views && views.length) ? views[0].url : '';
  }

  private getViews() {
    const c: any = { ...this.navCtrl };
    let views = [];
    if (c && c.topOutlet && c.topOutlet.stackCtrl) { views = c.topOutlet.stackCtrl.views; }
    return views;
  }

  private setAnimationConfig() {
    this.config.set('navAnimation',
      (AnimationC: Animation, baseEl: HTMLElement, opts: any): Promise<Animation> => {
        let anim = this.animation;
        if (opts.direction === 'back') { anim = opts.enteringEl.getAttribute('animation-leave'); }
        opts.enteringEl.setAttribute('animation-enter', this.animation);
        opts.leavingEl.setAttribute('animation-leave', this.animation);
        const animPlatform = ((opts && opts.mode === 'ios') ? 'ios' : 'md') + '_' + anim;
        switch (animPlatform) {
          case 'ios_push':  return animationPush(AnimationC, baseEl, opts);
          case 'ios_modal': return animationModal(AnimationC, baseEl, opts);
          case 'ios_fade':  return animationFade(AnimationC, baseEl, opts);
          case 'md_push':   return animationModal(AnimationC, baseEl, opts);
          case 'md_modal':  return animationModal(AnimationC, baseEl, opts);
          case 'md_fade':   return animationFade(AnimationC, baseEl, opts);
          default:          return animationModal(AnimationC, baseEl, opts);
        }
      }
    );
  }

}

function animationPush    (a, b, o)  { return iosTransitionAnimation(a, b, o); }
function animationModal   (a, b, o)  { return mdTransitionAnimation(a, b, o); }
function animationFade    (a, b, o)  { return fadeAnimation(a, b, o); }

export function fadeAnimation(AnimationC: Animation, _: HTMLElement, opts: any) {
  const getIonPageElement = function (element: HTMLElement) {
    if (element.classList.contains('ion-page')) { return element; }
    const page = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');
    return page || element;
  };
  const enteringEl = opts.enteringEl;
  const leavingEl = opts.leavingEl;
  const ionPageElement = getIonPageElement(enteringEl);
  const rootTransition = new AnimationC();
  rootTransition.addElement(ionPageElement).beforeRemoveClass('ion-page-invisible');
  if (opts.direction === 'back') { // animate the component itself
    rootTransition.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
  } else {
    rootTransition.duration(opts.duration || 280)
      .easing('cubic-bezier(0.36,0.66,0.04,1)').fromTo('opacity', 0.01, 1, true);
  }
  const enteringToolbarEle = ionPageElement.querySelector('ion-toolbar');
  if (enteringToolbarEle) { // Animate toolbar if it's there
    const enteringToolBar = new AnimationC();
    enteringToolBar.addElement(enteringToolbarEle);
    rootTransition.add(enteringToolBar);
  }
  // setup leaving view
  if (leavingEl && (opts.direction === 'back')) { // leaving content
    rootTransition.duration(opts.duration || 200).easing('cubic-bezier(0.47,0,0.745,0.715)');
    const leavingPage = new AnimationC();
    leavingPage.addElement(getIonPageElement(leavingEl)).fromTo('opacity', 1, 0);
    rootTransition.add(leavingPage);
  }
  return Promise.resolve(rootTransition);
}
