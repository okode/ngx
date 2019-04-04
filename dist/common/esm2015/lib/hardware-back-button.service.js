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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFyZHdhcmUtYmFjay1idXR0b24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2hhcmR3YXJlLWJhY2stYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV6RCwwQ0FFQzs7Ozs7SUFEQyx3RUFBeUI7O0FBSTNCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7OztJQUs3QixZQUNVLEdBQWMsRUFDZCxhQUE0QixFQUM1QixRQUFrQjtRQUZsQixRQUFHLEdBQUgsR0FBRyxDQUFXO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQU5wQixvQkFBZSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztRQUM3QixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBTXhCLENBQUM7Ozs7O0lBRUosTUFBTSxDQUFDLFNBQXdCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQUU7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQUU7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O2NBQ2pCLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBRTtRQUNuQyxhQUFhLENBQUMsSUFBSSxDQUNoQixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQzdCLENBQUMsU0FBUyxDQUFDLEdBQVMsRUFBRTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7OztrQkFFaEQsZUFBZSxHQUFHLGdFQUFnRTs7Z0JBQ3BGLE9BQU8sR0FBUSxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQztZQUMxRCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUFFLE9BQU8sR0FBRyxNQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUFFO1lBQ3BFLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxlQUFlLEtBQUssSUFBSSxFQUFFO29CQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFBRTtnQkFDdkUsT0FBTzthQUNSOzs7Z0JBRUcsSUFBSSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUMxQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQy9CO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDaEI7UUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFDO1FBQ0gsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyx3QkFBd0I7O2NBQ3hCLEdBQUcscUJBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBRTtRQUMxQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVU7WUFDckYsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDaEYsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztTQUN4RDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7O1lBM0RGLFVBQVU7Ozs7WUFURixTQUFTO1lBR0MsYUFBYTtZQUF2QixRQUFROzs7Ozs7O0lBU2YsNkNBQXFDOzs7OztJQUNyQyx3Q0FBMkI7Ozs7O0lBR3pCLGlDQUFzQjs7Ozs7SUFDdEIsMkNBQW9DOzs7OztJQUNwQyxzQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tICcuL25hdmlnYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRocm90dGxlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIE5hdkNvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT25IYXJkd2FyZUJhY2tCdXR0b24ge1xuICBrZE9uSGFyZHdhcmVCYWNrQnV0dG9uKCk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIYXJkd2FyZUJhY2tCdXR0b24ge1xuXG4gIHByaXZhdGUgZmlsdGVyQ29uZGl0aW9uID0gKCkgPT4gdHJ1ZTtcbiAgcHJpdmF0ZSBpbnRpYWxpemVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuYXY6IE5hdmlnYXRvcixcbiAgICBwcml2YXRlIG5hdkNvbnRyb2xsZXI6IE5hdkNvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7fVxuXG4gIGVuYWJsZShjb25kaXRpb24/OigpID0+IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMuaW50aWFsaXplZCkge8KgdGhpcy5pbml0KCk7IH1cbiAgICB0aGlzLmZpbHRlckNvbmRpdGlvbiA9IGNvbmRpdGlvbiB8fMKgKCgpID0+IHRydWUpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICBpZiAoIXRoaXMuaW50aWFsaXplZCkge8KgdGhpcy5pbml0KCk7IH1cbiAgICB0aGlzLmZpbHRlckNvbmRpdGlvbiA9ICgpID0+IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIHRoaXMuaW50aWFsaXplZCA9IHRydWU7XG4gICAgY29uc3QgaHdCYWNrU3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgaHdCYWNrU3ViamVjdC5waXBlKFxuICAgICAgdGhyb3R0bGVUaW1lKDUwMCksXG4gICAgICBmaWx0ZXIodGhpcy5maWx0ZXJDb25kaXRpb24pLFxuICAgICkuc3Vic2NyaWJlKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdIYXJkd2FyZUJhY2tCdXR0b246IGJhY2sgYnV0dG9uIGFjdGlvbicpO1xuICAgICAgLy8gY2hlY2sgaW9uaWMgb3ZlcmxheXMgKGRpc21pc3MgaWYgaXMgcHJlc2VudGVkIGFuZCBiYWNrZHJvcERpc21pc3MgPT0gdHJ1ZSlcbiAgICAgIGNvbnN0IG92ZXJsYXlTZWxlY3RvciA9ICdpb24tYWxlcnQtY29udHJvbGxlciwgaW9uLWFjdGlvbi1zaGVldCwgaW9uLWxvYWRpbmctY29udHJvbGxlcic7XG4gICAgICBsZXQgb3ZlcmxheTogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvdmVybGF5U2VsZWN0b3IpO1xuICAgICAgaWYgKG92ZXJsYXkgJiYgb3ZlcmxheS5nZXRUb3ApIHsgb3ZlcmxheSA9IGF3YWl0IG92ZXJsYXkuZ2V0VG9wKCk7IH1cbiAgICAgIGlmIChvdmVybGF5KSB7XG4gICAgICAgIGlmIChvdmVybGF5ICYmIG92ZXJsYXkuYmFja2Ryb3BEaXNtaXNzID09PSB0cnVlKSB7IG92ZXJsYXkuZGlzbWlzcygpOyB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIGlmIGFjdGl2ZSB2aWV3IGhhcyBpbXBsZW1lbnRlZCBgb25IYXJkd2FyZUJhY2soKWAsIGVsc2UgcGVyZm9ybXMgbmF2LnBvcCgpXG4gICAgICBsZXQgdmlldyA9IHRoaXMuZ2V0QWN0aXZlVmlld1JlZkluc3RhbmNlKCk7XG4gICAgICBpZiAodmlldyAmJiB2aWV3LmtkT25IYXJkd2FyZUJhY2tCdXR0b24pIHtcbiAgICAgICAgdmlldy5rZE9uSGFyZHdhcmVCYWNrQnV0dG9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5hdi5wb3AoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBPdmVycmluZyBkZWZhdWx0IGhhcmR3YXJlIGJhY2sgYnV0dG9uIGJlaGF2aW91clxuICAgIHRoaXMucGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucGxhdGZvcm0uYmFja0J1dHRvbi5zdWJzY3JpYmVXaXRoUHJpb3JpdHkoOTk5OSwgKCkgPT4geyBod0JhY2tTdWJqZWN0Lm5leHQoZXZlbnQpOyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWN0aXZlVmlld1JlZkluc3RhbmNlKCkge1xuICAgIGNvbnN0IG5hdjogYW55ID0geyAuLi50aGlzLm5hdkNvbnRyb2xsZXIgfTtcbiAgICBpZiAobmF2ICYmIG5hdi50b3BPdXRsZXQgJiYgbmF2LnRvcE91dGxldC5zdGFja0N0cmwgJiYgbmF2LnRvcE91dGxldC5zdGFja0N0cmwuYWN0aXZlVmlldyAmJlxuICAgICAgICBuYXYudG9wT3V0bGV0LnN0YWNrQ3RybC5hY3RpdmVWaWV3ICYmIG5hdi50b3BPdXRsZXQuc3RhY2tDdHJsLmFjdGl2ZVZpZXcucmVmKSB7XG4gICAgICByZXR1cm4gbmF2LnRvcE91dGxldC5zdGFja0N0cmwuYWN0aXZlVmlldy5yZWYuaW5zdGFuY2U7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn1cbiJdfQ==