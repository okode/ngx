/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Navigator } from './navigator.service';
import { Subject } from 'rxjs';
import { throttleTime, filter } from 'rxjs/operators';
import { Platform, NavController } from '@ionic/angular';
/**
 * @record
 */
export function OnHardwareBackButton() { }
if (false) {
    /**
     * @return {?}
     */
    OnHardwareBackButton.prototype.kdOnHardwareBackButton = function () { };
}
export class HardwareBackButton {
    /**
     * @param {?} navCtrl
     * @param {?} nav
     * @param {?} platform
     */
    constructor(navCtrl, nav, platform) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.platform = platform;
        this.filterCondition = (/**
         * @return {?}
         */
        () => true);
        this.intialized = false;
    }
    /**
     * @param {?=} condition
     * @return {?}
     */
    enable(condition) {
        if (!this.intialized) {
            this.init();
        }
        this.filterCondition = condition || ((/**
         * @return {?}
         */
        () => true));
    }
    /**
     * @return {?}
     */
    disable() {
        if (!this.intialized) {
            this.init();
        }
        this.filterCondition = (/**
         * @return {?}
         */
        () => false);
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this.intialized = true;
        /** @type {?} */
        const hwBackSubject = new Subject();
        hwBackSubject.pipe(throttleTime(500), filter((/**
         * @return {?}
         */
        () => this.filterCondition()))).subscribe((/**
         * @return {?}
         */
        () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            console.log('HardwareBackButton: back button action');
            // check ionic overlays (dismiss if is presented and backdropDismiss == true)
            /** @type {?} */
            const overlaySelector = 'ion-alert-controller, ion-action-sheet, ion-loading-controller';
            /** @type {?} */
            let overlay = document.querySelector(overlaySelector);
            if (overlay && overlay.getTop) {
                overlay = yield overlay.getTop();
            }
            if (overlay) {
                if (overlay && overlay.backdropDismiss === true) {
                    overlay.dismiss();
                }
                return;
            }
            // check if active view has implemented `onHardwareBack()`, else performs nav.pop()
            /** @type {?} */
            let view = this.getActiveViewRefInstance();
            if (view && view.kdOnHardwareBackButton) {
                view.kdOnHardwareBackButton();
            }
            else {
                this.nav.pop();
            }
        })));
        // Overring default hardware back button behaviour
        this.platform.ready().then((/**
         * @return {?}
         */
        () => {
            this.platform.backButton.subscribeWithPriority(9999, (/**
             * @return {?}
             */
            () => { hwBackSubject.next(event); }));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    getActiveViewRefInstance() {
        /** @type {?} */
        const nav = Object.assign({}, this.navCtrl);
        if (nav && nav.topOutlet && nav.topOutlet.stackCtrl && nav.topOutlet.stackCtrl.activeView &&
            nav.topOutlet.stackCtrl.activeView && nav.topOutlet.stackCtrl.activeView.ref) {
            return nav.topOutlet.stackCtrl.activeView.ref.instance;
        }
        return null;
    }
}
HardwareBackButton.decorators = [
    { type: Injectable }
];
/** @nocollapse */
HardwareBackButton.ctorParameters = () => [
    { type: NavController },
    { type: Navigator },
    { type: Platform }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    HardwareBackButton.prototype.filterCondition;
    /**
     * @type {?}
     * @private
     */
    HardwareBackButton.prototype.intialized;
    /**
     * @type {?}
     * @private
     */
    HardwareBackButton.prototype.navCtrl;
    /**
     * @type {?}
     * @private
     */
    HardwareBackButton.prototype.nav;
    /**
     * @type {?}
     * @private
     */
    HardwareBackButton.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFyZHdhcmUtYmFjay1idXR0b24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2hhcmR3YXJlLWJhY2stYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV6RCwwQ0FFQzs7Ozs7SUFEQyx3RUFBeUI7O0FBSTNCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQUs3QixZQUNVLE9BQXNCLEVBQ3RCLEdBQWMsRUFDZCxRQUFrQjtRQUZsQixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTnBCLG9CQUFlOzs7UUFBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUM7UUFDN0IsZUFBVSxHQUFHLEtBQUssQ0FBQztJQU14QixDQUFDOzs7OztJQUVKLE1BQU0sQ0FBQyxTQUF3QjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUFFO1FBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxJQUFJOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQUU7UUFDdEMsSUFBSSxDQUFDLGVBQWU7OztRQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRU8sSUFBSTtRQUNWLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOztjQUNqQixhQUFhLEdBQUcsSUFBSSxPQUFPLEVBQUU7UUFDbkMsYUFBYSxDQUFDLElBQUksQ0FDaEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixNQUFNOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQUMsQ0FDckMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFTLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDOzs7a0JBRWhELGVBQWUsR0FBRyxnRUFBZ0U7O2dCQUNwRixPQUFPLEdBQVEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7WUFDMUQsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFBRSxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7YUFBRTtZQUNwRSxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsZUFBZSxLQUFLLElBQUksRUFBRTtvQkFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQUU7Z0JBQ3ZFLE9BQU87YUFDUjs7O2dCQUVHLElBQUksR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDMUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO2dCQUN2QyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxDQUFBLEVBQUMsQ0FBQztRQUNILGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUk7OztRQUFDLEdBQUcsRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJOzs7WUFBRSxHQUFHLEVBQUUsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDN0YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLHdCQUF3Qjs7Y0FDeEIsR0FBRyxxQkFBYSxJQUFJLENBQUMsT0FBTyxDQUFFO1FBQ3BDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVTtZQUNyRixHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNoRixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1NBQ3hEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7WUEzREYsVUFBVTs7OztZQU5RLGFBQWE7WUFIdkIsU0FBUztZQUdULFFBQVE7Ozs7Ozs7SUFTZiw2Q0FBcUM7Ozs7O0lBQ3JDLHdDQUEyQjs7Ozs7SUFHekIscUNBQThCOzs7OztJQUM5QixpQ0FBc0I7Ozs7O0lBQ3RCLHNDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gJy4vbmF2aWdhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGhyb3R0bGVUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTmF2Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuZXhwb3J0IGludGVyZmFjZSBPbkhhcmR3YXJlQmFja0J1dHRvbiB7XG4gIGtkT25IYXJkd2FyZUJhY2tCdXR0b24oKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhhcmR3YXJlQmFja0J1dHRvbiB7XG5cbiAgcHJpdmF0ZSBmaWx0ZXJDb25kaXRpb24gPSAoKSA9PiB0cnVlO1xuICBwcml2YXRlIGludGlhbGl6ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5hdkN0cmw6IE5hdkNvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBuYXY6IE5hdmlnYXRvcixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHt9XG5cbiAgZW5hYmxlKGNvbmRpdGlvbj86KCkgPT4gYm9vbGVhbikge1xuICAgIGlmICghdGhpcy5pbnRpYWxpemVkKSB7wqB0aGlzLmluaXQoKTsgfVxuICAgIHRoaXMuZmlsdGVyQ29uZGl0aW9uID0gY29uZGl0aW9uIHx8wqAoKCkgPT4gdHJ1ZSk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIGlmICghdGhpcy5pbnRpYWxpemVkKSB7wqB0aGlzLmluaXQoKTsgfVxuICAgIHRoaXMuZmlsdGVyQ29uZGl0aW9uID0gKCkgPT4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgdGhpcy5pbnRpYWxpemVkID0gdHJ1ZTtcbiAgICBjb25zdCBod0JhY2tTdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcbiAgICBod0JhY2tTdWJqZWN0LnBpcGUoXG4gICAgICB0aHJvdHRsZVRpbWUoNTAwKSxcbiAgICAgIGZpbHRlcigoKSA9PiB0aGlzLmZpbHRlckNvbmRpdGlvbigpKSxcbiAgICApLnN1YnNjcmliZShhc3luYyAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnSGFyZHdhcmVCYWNrQnV0dG9uOiBiYWNrIGJ1dHRvbiBhY3Rpb24nKTtcbiAgICAgIC8vIGNoZWNrIGlvbmljIG92ZXJsYXlzIChkaXNtaXNzIGlmIGlzIHByZXNlbnRlZCBhbmQgYmFja2Ryb3BEaXNtaXNzID09IHRydWUpXG4gICAgICBjb25zdCBvdmVybGF5U2VsZWN0b3IgPSAnaW9uLWFsZXJ0LWNvbnRyb2xsZXIsIGlvbi1hY3Rpb24tc2hlZXQsIGlvbi1sb2FkaW5nLWNvbnRyb2xsZXInO1xuICAgICAgbGV0IG92ZXJsYXk6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3ZlcmxheVNlbGVjdG9yKTtcbiAgICAgIGlmIChvdmVybGF5ICYmIG92ZXJsYXkuZ2V0VG9wKSB7IG92ZXJsYXkgPSBhd2FpdCBvdmVybGF5LmdldFRvcCgpOyB9XG4gICAgICBpZiAob3ZlcmxheSkge1xuICAgICAgICBpZiAob3ZlcmxheSAmJiBvdmVybGF5LmJhY2tkcm9wRGlzbWlzcyA9PT0gdHJ1ZSkgeyBvdmVybGF5LmRpc21pc3MoKTsgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBjaGVjayBpZiBhY3RpdmUgdmlldyBoYXMgaW1wbGVtZW50ZWQgYG9uSGFyZHdhcmVCYWNrKClgLCBlbHNlIHBlcmZvcm1zIG5hdi5wb3AoKVxuICAgICAgbGV0IHZpZXcgPSB0aGlzLmdldEFjdGl2ZVZpZXdSZWZJbnN0YW5jZSgpO1xuICAgICAgaWYgKHZpZXcgJiYgdmlldy5rZE9uSGFyZHdhcmVCYWNrQnV0dG9uKSB7XG4gICAgICAgIHZpZXcua2RPbkhhcmR3YXJlQmFja0J1dHRvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uYXYucG9wKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gT3ZlcnJpbmcgZGVmYXVsdCBoYXJkd2FyZSBiYWNrIGJ1dHRvbiBiZWhhdmlvdXJcbiAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnBsYXRmb3JtLmJhY2tCdXR0b24uc3Vic2NyaWJlV2l0aFByaW9yaXR5KDk5OTksICgpID0+IHsgaHdCYWNrU3ViamVjdC5uZXh0KGV2ZW50KTsgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldEFjdGl2ZVZpZXdSZWZJbnN0YW5jZSgpIHtcbiAgICBjb25zdCBuYXY6IGFueSA9IHsgLi4udGhpcy5uYXZDdHJsIH07XG4gICAgaWYgKG5hdiAmJiBuYXYudG9wT3V0bGV0ICYmIG5hdi50b3BPdXRsZXQuc3RhY2tDdHJsICYmIG5hdi50b3BPdXRsZXQuc3RhY2tDdHJsLmFjdGl2ZVZpZXcgJiZcbiAgICAgICAgbmF2LnRvcE91dGxldC5zdGFja0N0cmwuYWN0aXZlVmlldyAmJiBuYXYudG9wT3V0bGV0LnN0YWNrQ3RybC5hY3RpdmVWaWV3LnJlZikge1xuICAgICAgcmV0dXJuIG5hdi50b3BPdXRsZXQuc3RhY2tDdHJsLmFjdGl2ZVZpZXcucmVmLmluc3RhbmNlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59XG4iXX0=