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
var HardwareBackButton = /** @class */ (function () {
    function HardwareBackButton(navCtrl, nav, platform) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.platform = platform;
        this.filterCondition = function () { return true; };
        this.intialized = false;
    }
    /**
     * @param {?=} condition
     * @return {?}
     */
    HardwareBackButton.prototype.enable = /**
     * @param {?=} condition
     * @return {?}
     */
    function (condition) {
        if (!this.intialized) {
            this.init();
        }
        this.filterCondition = condition || (function () { return true; });
    };
    /**
     * @return {?}
     */
    HardwareBackButton.prototype.disable = /**
     * @return {?}
     */
    function () {
        if (!this.intialized) {
            this.init();
        }
        this.filterCondition = function () { return false; };
    };
    /**
     * @private
     * @return {?}
     */
    HardwareBackButton.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.intialized = true;
        /** @type {?} */
        var hwBackSubject = new Subject();
        hwBackSubject.pipe(throttleTime(500), filter(function () { return _this.filterCondition(); })).subscribe(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            var overlaySelector, overlay, view;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('HardwareBackButton: back button action');
                        // check ionic overlays (dismiss if is presented and backdropDismiss == true)
                        overlaySelector = 'ion-alert-controller, ion-action-sheet, ion-loading-controller';
                        overlay = document.querySelector(overlaySelector);
                        if (!(overlay && overlay.getTop)) return [3 /*break*/, 2];
                        return [4 /*yield*/, overlay.getTop()];
                    case 1:
                        overlay = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (overlay) {
                            if (overlay && overlay.backdropDismiss === true) {
                                overlay.dismiss();
                            }
                            return [2 /*return*/];
                        }
                        // check if active view has implemented `onHardwareBack()`, else performs nav.pop()
                        view = this.getActiveViewRefInstance();
                        if (view && view.kdOnHardwareBackButton) {
                            view.kdOnHardwareBackButton();
                        }
                        else {
                            this.nav.pop();
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        // Overring default hardware back button behaviour
        this.platform.ready().then(function () {
            _this.platform.backButton.subscribeWithPriority(9999, function () { hwBackSubject.next(event); });
        });
    };
    /**
     * @private
     * @return {?}
     */
    HardwareBackButton.prototype.getActiveViewRefInstance = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nav = tslib_1.__assign({}, this.navCtrl);
        if (nav && nav.topOutlet && nav.topOutlet.stackCtrl && nav.topOutlet.stackCtrl.activeView &&
            nav.topOutlet.stackCtrl.activeView && nav.topOutlet.stackCtrl.activeView.ref) {
            return nav.topOutlet.stackCtrl.activeView.ref.instance;
        }
        return null;
    };
    HardwareBackButton.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    HardwareBackButton.ctorParameters = function () { return [
        { type: NavController },
        { type: Navigator },
        { type: Platform }
    ]; };
    return HardwareBackButton;
}());
export { HardwareBackButton };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFyZHdhcmUtYmFjay1idXR0b24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2hhcmR3YXJlLWJhY2stYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV6RCwwQ0FFQzs7Ozs7SUFEQyx3RUFBeUI7O0FBRzNCO0lBTUUsNEJBQ1UsT0FBc0IsRUFDdEIsR0FBYyxFQUNkLFFBQWtCO1FBRmxCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFDdEIsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFOcEIsb0JBQWUsR0FBRyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQztRQUM3QixlQUFVLEdBQUcsS0FBSyxDQUFDO0lBTXhCLENBQUM7Ozs7O0lBRUosbUNBQU07Ozs7SUFBTixVQUFPLFNBQXdCO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQUU7UUFDdEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLElBQUksQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxvQ0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUFFO1FBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBTSxPQUFBLEtBQUssRUFBTCxDQUFLLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFTyxpQ0FBSTs7OztJQUFaO1FBQUEsaUJBNEJDO1FBM0JDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDOztZQUNqQixhQUFhLEdBQUcsSUFBSSxPQUFPLEVBQUU7UUFDbkMsYUFBYSxDQUFDLElBQUksQ0FDaEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUNqQixNQUFNLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUNyQyxDQUFDLFNBQVMsQ0FBQzs7Ozs7d0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDOzt3QkFFaEQsZUFBZSxHQUFHLGdFQUFnRTt3QkFDcEYsT0FBTyxHQUFRLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDOzZCQUN0RCxDQUFBLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFBLEVBQXpCLHdCQUF5Qjt3QkFBYyxxQkFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUFoQyxPQUFPLEdBQUcsU0FBc0IsQ0FBQzs7O3dCQUNsRSxJQUFJLE9BQU8sRUFBRTs0QkFDWCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsZUFBZSxLQUFLLElBQUksRUFBRTtnQ0FBRSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7NkJBQUU7NEJBQ3ZFLHNCQUFPO3lCQUNSOzt3QkFFRyxJQUFJLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFO3dCQUMxQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7NEJBQ3ZDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO3lCQUMvQjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO3lCQUNoQjs7OzthQUNGLENBQUMsQ0FBQztRQUNILGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztZQUN6QixLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsY0FBUSxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0YsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLHFEQUF3Qjs7OztJQUFoQzs7WUFDUSxHQUFHLHdCQUFhLElBQUksQ0FBQyxPQUFPLENBQUU7UUFDcEMsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVO1lBQ3JGLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2hGLE9BQU8sR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7U0FDeEQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7O2dCQTNERixVQUFVOzs7O2dCQU5RLGFBQWE7Z0JBSHZCLFNBQVM7Z0JBR1QsUUFBUTs7SUFtRWpCLHlCQUFDO0NBQUEsQUE3REQsSUE2REM7U0E1RFksa0JBQWtCOzs7Ozs7SUFFN0IsNkNBQXFDOzs7OztJQUNyQyx3Q0FBMkI7Ozs7O0lBR3pCLHFDQUE4Qjs7Ozs7SUFDOUIsaUNBQXNCOzs7OztJQUN0QixzQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tICcuL25hdmlnYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRocm90dGxlVGltZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUGxhdGZvcm0sIE5hdkNvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT25IYXJkd2FyZUJhY2tCdXR0b24ge1xuICBrZE9uSGFyZHdhcmVCYWNrQnV0dG9uKCk7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIYXJkd2FyZUJhY2tCdXR0b24ge1xuXG4gIHByaXZhdGUgZmlsdGVyQ29uZGl0aW9uID0gKCkgPT4gdHJ1ZTtcbiAgcHJpdmF0ZSBpbnRpYWxpemVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBuYXZDdHJsOiBOYXZDb250cm9sbGVyLFxuICAgIHByaXZhdGUgbmF2OiBOYXZpZ2F0b3IsXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7fVxuXG4gIGVuYWJsZShjb25kaXRpb24/OigpID0+IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMuaW50aWFsaXplZCkge8KgdGhpcy5pbml0KCk7IH1cbiAgICB0aGlzLmZpbHRlckNvbmRpdGlvbiA9IGNvbmRpdGlvbiB8fMKgKCgpID0+IHRydWUpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICBpZiAoIXRoaXMuaW50aWFsaXplZCkge8KgdGhpcy5pbml0KCk7IH1cbiAgICB0aGlzLmZpbHRlckNvbmRpdGlvbiA9ICgpID0+IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0KCkge1xuICAgIHRoaXMuaW50aWFsaXplZCA9IHRydWU7XG4gICAgY29uc3QgaHdCYWNrU3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgaHdCYWNrU3ViamVjdC5waXBlKFxuICAgICAgdGhyb3R0bGVUaW1lKDUwMCksXG4gICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5maWx0ZXJDb25kaXRpb24oKSksXG4gICAgKS5zdWJzY3JpYmUoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0hhcmR3YXJlQmFja0J1dHRvbjogYmFjayBidXR0b24gYWN0aW9uJyk7XG4gICAgICAvLyBjaGVjayBpb25pYyBvdmVybGF5cyAoZGlzbWlzcyBpZiBpcyBwcmVzZW50ZWQgYW5kIGJhY2tkcm9wRGlzbWlzcyA9PSB0cnVlKVxuICAgICAgY29uc3Qgb3ZlcmxheVNlbGVjdG9yID0gJ2lvbi1hbGVydC1jb250cm9sbGVyLCBpb24tYWN0aW9uLXNoZWV0LCBpb24tbG9hZGluZy1jb250cm9sbGVyJztcbiAgICAgIGxldCBvdmVybGF5OiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG92ZXJsYXlTZWxlY3Rvcik7XG4gICAgICBpZiAob3ZlcmxheSAmJiBvdmVybGF5LmdldFRvcCkgeyBvdmVybGF5ID0gYXdhaXQgb3ZlcmxheS5nZXRUb3AoKTsgfVxuICAgICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgICAgaWYgKG92ZXJsYXkgJiYgb3ZlcmxheS5iYWNrZHJvcERpc21pc3MgPT09IHRydWUpIHsgb3ZlcmxheS5kaXNtaXNzKCk7IH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gY2hlY2sgaWYgYWN0aXZlIHZpZXcgaGFzIGltcGxlbWVudGVkIGBvbkhhcmR3YXJlQmFjaygpYCwgZWxzZSBwZXJmb3JtcyBuYXYucG9wKClcbiAgICAgIGxldCB2aWV3ID0gdGhpcy5nZXRBY3RpdmVWaWV3UmVmSW5zdGFuY2UoKTtcbiAgICAgIGlmICh2aWV3ICYmIHZpZXcua2RPbkhhcmR3YXJlQmFja0J1dHRvbikge1xuICAgICAgICB2aWV3LmtkT25IYXJkd2FyZUJhY2tCdXR0b24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubmF2LnBvcCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIC8vIE92ZXJyaW5nIGRlZmF1bHQgaGFyZHdhcmUgYmFjayBidXR0b24gYmVoYXZpb3VyXG4gICAgdGhpcy5wbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5wbGF0Zm9ybS5iYWNrQnV0dG9uLnN1YnNjcmliZVdpdGhQcmlvcml0eSg5OTk5LCAoKSA9PiB7IGh3QmFja1N1YmplY3QubmV4dChldmVudCk7IH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBY3RpdmVWaWV3UmVmSW5zdGFuY2UoKSB7XG4gICAgY29uc3QgbmF2OiBhbnkgPSB7IC4uLnRoaXMubmF2Q3RybCB9O1xuICAgIGlmIChuYXYgJiYgbmF2LnRvcE91dGxldCAmJiBuYXYudG9wT3V0bGV0LnN0YWNrQ3RybCAmJiBuYXYudG9wT3V0bGV0LnN0YWNrQ3RybC5hY3RpdmVWaWV3ICYmXG4gICAgICAgIG5hdi50b3BPdXRsZXQuc3RhY2tDdHJsLmFjdGl2ZVZpZXcgJiYgbmF2LnRvcE91dGxldC5zdGFja0N0cmwuYWN0aXZlVmlldy5yZWYpIHtcbiAgICAgIHJldHVybiBuYXYudG9wT3V0bGV0LnN0YWNrQ3RybC5hY3RpdmVWaWV3LnJlZi5pbnN0YW5jZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxufVxuIl19