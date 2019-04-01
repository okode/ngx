/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?} nav
     * @param {?} navController
     * @param {?} platform
     */
    constructor(nav, navController, platform) {
        this.nav = nav;
        this.navController = navController;
        this.platform = platform;
        this.filterCondition = () => true;
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
        this.filterCondition = condition || (() => true);
    }
    /**
     * @return {?}
     */
    disable() {
        if (!this.intialized) {
            this.init();
        }
        this.filterCondition = () => false;
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this.intialized = true;
        /** @type {?} */
        const hwBackSubject = new Subject();
        hwBackSubject.pipe(throttleTime(500), filter(this.filterCondition)).subscribe(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
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
        }));
        // Overring default hardware back button behaviour
        this.platform.ready().then(() => {
            this.platform.backButton.subscribeWithPriority(9999, () => { hwBackSubject.next(event); });
        });
    }
    /**
     * @private
     * @return {?}
     */
    getActiveViewRefInstance() {
        /** @type {?} */
        const nav = Object.assign({}, this.navController);
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
    { type: Navigator },
    { type: NavController },
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
    HardwareBackButton.prototype.nav;
    /**
     * @type {?}
     * @private
     */
    HardwareBackButton.prototype.navController;
    /**
     * @type {?}
     * @private
     */
    HardwareBackButton.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFyZHdhcmUtYmFjay1idXR0b24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2hhcmR3YXJlLWJhY2stYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV6RCwwQ0FFQzs7Ozs7SUFEQyx3RUFBeUI7O0FBSTNCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQUs3QixZQUNVLEdBQWMsRUFDZCxhQUE0QixFQUM1QixRQUFrQjtRQUZsQixRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQU5wQixvQkFBZSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztRQUM3QixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBTXhCLENBQUM7Ozs7O0lBRUosTUFBTSxDQUFDLFNBQXdCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQUU7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQUU7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O2NBQ2pCLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBRTtRQUNuQyxhQUFhLENBQUMsSUFBSSxDQUNoQixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQzdCLENBQUMsU0FBUyxDQUFDLEdBQVMsRUFBRTs7O2tCQUVmLGVBQWUsR0FBRyxnRUFBZ0U7O2dCQUNwRixPQUFPLEdBQVEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7WUFDMUQsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFBRSxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7YUFBRTtZQUNwRSxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsZUFBZSxLQUFLLElBQUksRUFBRTtvQkFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQUU7Z0JBQ3ZFLE9BQU87YUFDUjs7O2dCQUVHLElBQUksR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDMUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO2dCQUN2QyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUNILGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sd0JBQXdCOztjQUN4QixHQUFHLHFCQUFhLElBQUksQ0FBQyxhQUFhLENBQUU7UUFDMUMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVO1lBQ3JGLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2hGLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7U0FDeEQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQTFERixVQUFVOzs7O1lBVEYsU0FBUztZQUdDLGFBQWE7WUFBdkIsUUFBUTs7Ozs7OztJQVNmLDZDQUFxQzs7Ozs7SUFDckMsd0NBQTJCOzs7OztJQUd6QixpQ0FBc0I7Ozs7O0lBQ3RCLDJDQUFvQzs7Ozs7SUFDcEMsc0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aHJvdHRsZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsYXRmb3JtLCBOYXZDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9uSGFyZHdhcmVCYWNrQnV0dG9uIHtcbiAga2RPbkhhcmR3YXJlQmFja0J1dHRvbigpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGFyZHdhcmVCYWNrQnV0dG9uIHtcblxuICBwcml2YXRlIGZpbHRlckNvbmRpdGlvbiA9ICgpID0+IHRydWU7XG4gIHByaXZhdGUgaW50aWFsaXplZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmF2OiBOYXZpZ2F0b3IsXG4gICAgcHJpdmF0ZSBuYXZDb250cm9sbGVyOiBOYXZDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge31cblxuICBlbmFibGUoY29uZGl0aW9uPzooKSA9PiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLmludGlhbGl6ZWQpIHvCoHRoaXMuaW5pdCgpOyB9XG4gICAgdGhpcy5maWx0ZXJDb25kaXRpb24gPSBjb25kaXRpb24gfHzCoCgoKSA9PiB0cnVlKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgaWYgKCF0aGlzLmludGlhbGl6ZWQpIHvCoHRoaXMuaW5pdCgpOyB9XG4gICAgdGhpcy5maWx0ZXJDb25kaXRpb24gPSAoKSA9PiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICB0aGlzLmludGlhbGl6ZWQgPSB0cnVlO1xuICAgIGNvbnN0IGh3QmFja1N1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuICAgIGh3QmFja1N1YmplY3QucGlwZShcbiAgICAgIHRocm90dGxlVGltZSg1MDApLFxuICAgICAgZmlsdGVyKHRoaXMuZmlsdGVyQ29uZGl0aW9uKSxcbiAgICApLnN1YnNjcmliZShhc3luYyAoKSA9PiB7XG4gICAgICAvLyBjaGVjayBpb25pYyBvdmVybGF5cyAoZGlzbWlzcyBpZiBpcyBwcmVzZW50ZWQgYW5kIGJhY2tkcm9wRGlzbWlzcyA9PSB0cnVlKVxuICAgICAgY29uc3Qgb3ZlcmxheVNlbGVjdG9yID0gJ2lvbi1hbGVydC1jb250cm9sbGVyLCBpb24tYWN0aW9uLXNoZWV0LCBpb24tbG9hZGluZy1jb250cm9sbGVyJztcbiAgICAgIGxldCBvdmVybGF5OiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG92ZXJsYXlTZWxlY3Rvcik7XG4gICAgICBpZiAob3ZlcmxheSAmJiBvdmVybGF5LmdldFRvcCkgeyBvdmVybGF5ID0gYXdhaXQgb3ZlcmxheS5nZXRUb3AoKTsgfVxuICAgICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgICAgaWYgKG92ZXJsYXkgJiYgb3ZlcmxheS5iYWNrZHJvcERpc21pc3MgPT09IHRydWUpIHsgb3ZlcmxheS5kaXNtaXNzKCk7IH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgaWYgYWN0aXZlIHZpZXcgaGFzIGltcGxlbWVudGVkIGBvbkhhcmR3YXJlQmFjaygpYCwgZWxzZSBwZXJmb3JtcyBuYXYucG9wKClcbiAgICAgIGxldCB2aWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3UmVmSW5zdGFuY2UoKTtcbiAgICAgIGlmICh2aWV3ICYmIHZpZXcua2RPbkhhcmR3YXJlQmFja0J1dHRvbikge1xuICAgICAgICB2aWV3LmtkT25IYXJkd2FyZUJhY2tCdXR0b24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubmF2LnBvcCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIE92ZXJyaW5nIGRlZmF1bHQgaGFyZHdhcmUgYmFjayBidXR0b24gYmVoYXZpb3VyXG4gICAgdGhpcy5wbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5wbGF0Zm9ybS5iYWNrQnV0dG9uLnN1YnNjcmliZVdpdGhQcmlvcml0eSg5OTk5LCAoKSA9PiB7IGh3QmFja1N1YmplY3QubmV4dChldmVudCk7IH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBY3RpdmVWaWV3UmVmSW5zdGFuY2UoKSB7XG4gICAgY29uc3QgbmF2OiBhbnkgPSB7IC4uLnRoaXMubmF2Q29udHJvbGxlciB9O1xuICAgIGlmIChuYXYgJiYgbmF2LnRvcE91dGxldCAmJiBuYXYudG9wT3V0bGV0LnN0YWNrQ3RybCAmJiBuYXYudG9wT3V0bGV0LnN0YWNrQ3RybC5hY3RpdmVWaWV3ICYmXG4gICAgICAgIG5hdi50b3BPdXRsZXQuc3RhY2tDdHJsLmFjdGl2ZVZpZXcgJiYgbmF2LnRvcE91dGxldC5zdGFja0N0cmwuYWN0aXZlVmlldy5yZWYpIHtcbiAgICAgIHJldHVybiBuYXYudG9wT3V0bGV0LnN0YWNrQ3RybC5hY3RpdmVWaWV3LnJlZi5pbnN0YW5jZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufVxuIl19