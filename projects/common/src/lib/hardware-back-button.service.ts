import { Injectable } from '@angular/core';
import { Navigator } from './navigator.service';
import { Subject } from 'rxjs';
import { throttleTime, filter } from 'rxjs/operators';
import { Platform, NavController } from '@ionic/angular';

export interface OnHardwareBackButton {
  kdOnHardwareBackButton();
}

@Injectable()
export class HardwareBackButton {

  private filterCondition = () => true;
  private intialized = false;

  constructor(
    private nav: Navigator,
    private navController: NavController,
    private platform: Platform
  ) {}

  enable(condition?:() => boolean) {
    if (!this.intialized) { this.init(); }
    this.filterCondition = condition || (() => true);
  }

  disable() {
    if (!this.intialized) { this.init(); }
    this.filterCondition = () => false;
  }

  private init() {
    this.intialized = true;
    const hwBackSubject = new Subject();
    hwBackSubject.pipe(
      throttleTime(500),
      filter(this.filterCondition),
    ).subscribe(async () => {
      // check ionic overlays (dismiss if is presented and backdropDismiss == true)
      const overlaySelector = 'ion-alert-controller, ion-action-sheet, ion-loading-controller';
      let overlay: any = document.querySelector(overlaySelector);
      if (overlay && overlay.getTop) { overlay = await overlay.getTop(); }
      if (overlay) {
        if (overlay && overlay.backdropDismiss === true) { overlay.dismiss(); }
        return;
      }
      // check if active view has implemented `onHardwareBack()`, else performs nav.pop()
      let view = this.getActiveViewRefInstance();
      if (view && view.kdOnHardwareBackButton) {
        view.kdOnHardwareBackButton();
      } else {
        this.nav.pop();
      }
    });
    // Overring default hardware back button behaviour
    this.platform.ready().then(() => {
      this.platform.backButton.subscribeWithPriority(9999, () => { hwBackSubject.next(event); });
    });
  }

  private getActiveViewRefInstance() {
    const nav: any = { ...this.navController };
    if (nav && nav.topOutlet && nav.topOutlet.stackCtrl && nav.topOutlet.stackCtrl.activeView &&
        nav.topOutlet.stackCtrl.activeView && nav.topOutlet.stackCtrl.activeView.ref) {
      return nav.topOutlet.stackCtrl.activeView.ref.instance;
    }
    return null;
  }

}
