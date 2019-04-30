import { Injectable } from '@angular/core';
import { NavController, Config } from '@ionic/angular';
import { Animation } from '@ionic/core';
import { iosTransitionAnimation } from '@ionic/core/dist/collection/utils/transition/ios.transition';
import { mdTransitionAnimation } from '@ionic/core/dist/collection/utils/transition/md.transition';

@Injectable()
export class Navigator {

  private params;
  private animation: 'default' | 'push' | 'modal' | 'fade' | 'safepush' = 'default';
  private animationConfigReady = false;
  private startNavFlow = false;

  constructor(
    private navCtrl: NavController,
    private config: Config
  ) {}

  getParams() {
    return this.params;
  }

  push(
    url: string,
    params?: {},
    animation: 'default' | 'push' | 'modal' | 'fade' | 'safepush' = 'default',
    startNavFlow = false
  ) {
    if (!this.animationConfigReady) { this.setAnimationConfig(); }
    this.params = params;
    this.animation = animation;
    this.startNavFlow = startNavFlow;
    return this.navCtrl.navigateForward(url);
  }

  pop(url?: string, params?: {}) {
    this.params = params;
    const targetUrl = url || this.getPreviousPageUrl();
    if (!targetUrl) {
      return Promise.resolve(false);
    }
    return this.navCtrl.navigateBack(targetUrl);
  }

  popToRoot() {
    return this.navCtrl.navigateBack(this.getRootPageUrl());
  }

  setRoot(url: string, params?: {}) {
    this.params = params;
    return this.navCtrl.navigateRoot(url);
  }

  closeCurrentNavFlow(params?: {}) {
    const views = [...this.getViews()].reverse();
    const currentNavFlow = views.findIndex(v => v.element.getAttribute('new-nav-flow'));
    const targetPage = currentNavFlow >= 0 && views.length > 1 ? views[currentNavFlow + 1] : null;
    return targetPage ? this.pop(targetPage.url, params) : this.popToRoot();
  }

  getViews() {
    const c: any = { ...this.navCtrl };
    let views = [];
    if (c && c.topOutlet && c.topOutlet.stackCtrl) { views = c.topOutlet.stackCtrl.views; }
    return views;
  }

  private getPreviousPageUrl() {
    const views = this.getViews();
    return (views && views.length > 1) ? views[views.length - 2].url : null;
  }

  private getRootPageUrl() {
    const views = this.getViews();
    return (views && views.length) ? views[0].url : '';
  }

  private setAnimationConfig() {
    this.animationConfigReady = true;
    this.config.set('navAnimation',
      (AnimationC: Animation, baseEl: HTMLElement, opts: any): Promise<Animation> => {
        let anim = this.animation;
        if (opts.direction === 'back') {
          anim = opts.enteringEl.getAttribute('animation-leave');
        } else if (opts.direction === 'forward' && this.startNavFlow) {
          opts.enteringEl.setAttribute('new-nav-flow', true);
          this.startNavFlow = false;
        }
        opts.enteringEl.setAttribute('animation-enter', this.animation);
        opts.leavingEl.setAttribute('animation-leave', this.animation);
        const ios = (opts && opts.mode === 'ios');
        switch (anim) {
          case 'default':
            if (ios) {      return animationPush(AnimationC, baseEl, opts); }
            else {          return animationModal(AnimationC, baseEl, opts); }
          case 'push':      return animationPush(AnimationC, baseEl, opts);
          case 'modal':     return animationModal(AnimationC, baseEl, opts);
          case 'fade':      return animationFade(AnimationC, baseEl, opts);
          case 'safepush':  return animationSafePush(AnimationC, baseEl, opts);
          default:          return animationModal(AnimationC, baseEl, opts);
        }
      }
    );
  }

}

function animationPush     (a, b, o)  { return iosTransitionAnimation(a, b, o); }
function animationModal    (a, b, o)  { return mdTransitionAnimation(a, b, o); }
function animationFade     (a, b, o)  { return fadeAnimation(a, b, o); }
function animationSafePush (a, b, o)  { return safePushAnimation(a, b, o); }

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
    rootTransition.duration(opts.duration || 300).easing('cubic-bezier(0.47,0,0.745,0.715)');
  } else {
    rootTransition.duration(opts.duration || 400)
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
    rootTransition.duration(opts.duration || 300).easing('cubic-bezier(0.47,0,0.745,0.715)');
    const leavingPage = new AnimationC();
    leavingPage.addElement(getIonPageElement(leavingEl)).fromTo('opacity', 1, 0);
    rootTransition.add(leavingPage);
  }
  return Promise.resolve(rootTransition);
}

export function safePushAnimation(AnimationC: Animation, _: HTMLElement, opts: any) {
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
  rootTransition.duration(opts.duration || 500).easing('cubic-bezier(0.36,0.66,0.04,1)');
  const leavingPage = new AnimationC();
  const enteringPage = new AnimationC();
  if (opts.direction === 'back') {
    leavingPage.addElement(getIonPageElement(leavingEl)).fromTo('translateX', '0', '100%');
    enteringPage.addElement(getIonPageElement(enteringEl)).fromTo('translateX', '-100%', '0');
  } else {
    leavingPage.addElement(getIonPageElement(leavingEl)).fromTo('translateX', '0', '-100%');
    enteringPage.addElement(getIonPageElement(enteringEl)).fromTo('translateX', '100%', '0');
  }
  rootTransition.add(leavingPage);
  rootTransition.add(enteringPage);
  return Promise.resolve(rootTransition);
}

