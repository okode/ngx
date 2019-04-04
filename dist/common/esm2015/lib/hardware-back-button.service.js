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
     * @param {?} navCtrl
     * @param {?} nav
     * @param {?} platform
     */
    constructor(navCtrl, nav, platform) {
        this.navCtrl = navCtrl;
        this.nav = nav;
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
        hwBackSubject.pipe(throttleTime(500), filter(() => this.filterCondition())).subscribe(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFyZHdhcmUtYmFjay1idXR0b24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2hhcmR3YXJlLWJhY2stYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV6RCwwQ0FFQzs7Ozs7SUFEQyx3RUFBeUI7O0FBSTNCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQUs3QixZQUNVLE9BQXNCLEVBQ3RCLEdBQWMsRUFDZCxRQUFrQjtRQUZsQixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTnBCLG9CQUFlLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzdCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFNeEIsQ0FBQzs7Ozs7SUFFSixNQUFNLENBQUMsU0FBd0I7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FBRTtRQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FBRTtRQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVPLElBQUk7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7Y0FDakIsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFFO1FBQ25DLGFBQWEsQ0FBQyxJQUFJLENBQ2hCLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUNyQyxDQUFDLFNBQVMsQ0FBQyxHQUFTLEVBQUU7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDOzs7a0JBRWhELGVBQWUsR0FBRyxnRUFBZ0U7O2dCQUNwRixPQUFPLEdBQVEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7WUFDMUQsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFBRSxPQUFPLEdBQUcsTUFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7YUFBRTtZQUNwRSxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsZUFBZSxLQUFLLElBQUksRUFBRTtvQkFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQUU7Z0JBQ3ZFLE9BQU87YUFDUjs7O2dCQUVHLElBQUksR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUU7WUFDMUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO2dCQUN2QyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzthQUMvQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQ2hCO1FBQ0gsQ0FBQyxDQUFBLENBQUMsQ0FBQztRQUNILGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sd0JBQXdCOztjQUN4QixHQUFHLHFCQUFhLElBQUksQ0FBQyxPQUFPLENBQUU7UUFDcEMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVO1lBQ3JGLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2hGLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7U0FDeEQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7OztZQTNERixVQUFVOzs7O1lBTlEsYUFBYTtZQUh2QixTQUFTO1lBR1QsUUFBUTs7Ozs7OztJQVNmLDZDQUFxQzs7Ozs7SUFDckMsd0NBQTJCOzs7OztJQUd6QixxQ0FBOEI7Ozs7O0lBQzlCLGlDQUFzQjs7Ozs7SUFDdEIsc0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aHJvdHRsZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsYXRmb3JtLCBOYXZDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9uSGFyZHdhcmVCYWNrQnV0dG9uIHtcbiAga2RPbkhhcmR3YXJlQmFja0J1dHRvbigpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGFyZHdhcmVCYWNrQnV0dG9uIHtcblxuICBwcml2YXRlIGZpbHRlckNvbmRpdGlvbiA9ICgpID0+IHRydWU7XG4gIHByaXZhdGUgaW50aWFsaXplZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmF2Q3RybDogTmF2Q29udHJvbGxlcixcbiAgICBwcml2YXRlIG5hdjogTmF2aWdhdG9yLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge31cblxuICBlbmFibGUoY29uZGl0aW9uPzooKSA9PiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLmludGlhbGl6ZWQpIHvCoHRoaXMuaW5pdCgpOyB9XG4gICAgdGhpcy5maWx0ZXJDb25kaXRpb24gPSBjb25kaXRpb24gfHzCoCgoKSA9PiB0cnVlKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgaWYgKCF0aGlzLmludGlhbGl6ZWQpIHvCoHRoaXMuaW5pdCgpOyB9XG4gICAgdGhpcy5maWx0ZXJDb25kaXRpb24gPSAoKSA9PiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICB0aGlzLmludGlhbGl6ZWQgPSB0cnVlO1xuICAgIGNvbnN0IGh3QmFja1N1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuICAgIGh3QmFja1N1YmplY3QucGlwZShcbiAgICAgIHRocm90dGxlVGltZSg1MDApLFxuICAgICAgZmlsdGVyKCgpID0+IHRoaXMuZmlsdGVyQ29uZGl0aW9uKCkpLFxuICAgICkuc3Vic2NyaWJlKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdIYXJkd2FyZUJhY2tCdXR0b246IGJhY2sgYnV0dG9uIGFjdGlvbicpO1xuICAgICAgLy8gY2hlY2sgaW9uaWMgb3ZlcmxheXMgKGRpc21pc3MgaWYgaXMgcHJlc2VudGVkIGFuZCBiYWNrZHJvcERpc21pc3MgPT0gdHJ1ZSlcbiAgICAgIGNvbnN0IG92ZXJsYXlTZWxlY3RvciA9ICdpb24tYWxlcnQtY29udHJvbGxlciwgaW9uLWFjdGlvbi1zaGVldCwgaW9uLWxvYWRpbmctY29udHJvbGxlcic7XG4gICAgICBsZXQgb3ZlcmxheTogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvdmVybGF5U2VsZWN0b3IpO1xuICAgICAgaWYgKG92ZXJsYXkgJiYgb3ZlcmxheS5nZXRUb3ApIHsgb3ZlcmxheSA9IGF3YWl0IG92ZXJsYXkuZ2V0VG9wKCk7IH1cbiAgICAgIGlmIChvdmVybGF5KSB7XG4gICAgICAgIGlmIChvdmVybGF5ICYmIG92ZXJsYXkuYmFja2Ryb3BEaXNtaXNzID09PSB0cnVlKSB7IG92ZXJsYXkuZGlzbWlzcygpOyB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIGlmIGFjdGl2ZSB2aWV3IGhhcyBpbXBsZW1lbnRlZCBgb25IYXJkd2FyZUJhY2soKWAsIGVsc2UgcGVyZm9ybXMgbmF2LnBvcCgpXG4gICAgICBsZXQgdmlldyA9IHRoaXMuZ2V0QWN0aXZlVmlld1JlZkluc3RhbmNlKCk7XG4gICAgICBpZiAodmlldyAmJiB2aWV3LmtkT25IYXJkd2FyZUJhY2tCdXR0b24pIHtcbiAgICAgICAgdmlldy5rZE9uSGFyZHdhcmVCYWNrQnV0dG9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5hdi5wb3AoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBPdmVycmluZyBkZWZhdWx0IGhhcmR3YXJlIGJhY2sgYnV0dG9uIGJlaGF2aW91clxuICAgIHRoaXMucGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucGxhdGZvcm0uYmFja0J1dHRvbi5zdWJzY3JpYmVXaXRoUHJpb3JpdHkoOTk5OSwgKCkgPT4geyBod0JhY2tTdWJqZWN0Lm5leHQoZXZlbnQpOyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWN0aXZlVmlld1JlZkluc3RhbmNlKCkge1xuICAgIGNvbnN0IG5hdjogYW55ID0geyAuLi50aGlzLm5hdkN0cmwgfTtcbiAgICBpZiAobmF2ICYmIG5hdi50b3BPdXRsZXQgJiYgbmF2LnRvcE91dGxldC5zdGFja0N0cmwgJiYgbmF2LnRvcE91dGxldC5zdGFja0N0cmwuYWN0aXZlVmlldyAmJlxuICAgICAgICBuYXYudG9wT3V0bGV0LnN0YWNrQ3RybC5hY3RpdmVWaWV3ICYmIG5hdi50b3BPdXRsZXQuc3RhY2tDdHJsLmFjdGl2ZVZpZXcucmVmKSB7XG4gICAgICByZXR1cm4gbmF2LnRvcE91dGxldC5zdGFja0N0cmwuYWN0aXZlVmlldy5yZWYuaW5zdGFuY2U7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn1cbiJdfQ==