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
    function HardwareBackButton(nav, navController, platform) {
        this.nav = nav;
        this.navController = navController;
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
        hwBackSubject.pipe(throttleTime(500), filter(this.filterCondition)).subscribe(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
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
        var nav = tslib_1.__assign({}, this.navController);
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
        { type: Navigator },
        { type: NavController },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFyZHdhcmUtYmFjay1idXR0b24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2hhcmR3YXJlLWJhY2stYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV6RCwwQ0FFQzs7Ozs7SUFEQyx3RUFBeUI7O0FBRzNCO0lBTUUsNEJBQ1UsR0FBYyxFQUNkLGFBQTRCLEVBQzVCLFFBQWtCO1FBRmxCLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTnBCLG9CQUFlLEdBQUcsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7UUFDN0IsZUFBVSxHQUFHLEtBQUssQ0FBQztJQU14QixDQUFDOzs7OztJQUVKLG1DQUFNOzs7O0lBQU4sVUFBTyxTQUF3QjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUFFO1FBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxJQUFJLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsb0NBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FBRTtRQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQU0sT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRU8saUNBQUk7Ozs7SUFBWjtRQUFBLGlCQTRCQztRQTNCQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7WUFDakIsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFFO1FBQ25DLGFBQWEsQ0FBQyxJQUFJLENBQ2hCLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FDN0IsQ0FBQyxTQUFTLENBQUM7Ozs7O3dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQzs7d0JBRWhELGVBQWUsR0FBRyxnRUFBZ0U7d0JBQ3BGLE9BQU8sR0FBUSxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQzs2QkFDdEQsQ0FBQSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQSxFQUF6Qix3QkFBeUI7d0JBQWMscUJBQU0sT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFBOzt3QkFBaEMsT0FBTyxHQUFHLFNBQXNCLENBQUM7Ozt3QkFDbEUsSUFBSSxPQUFPLEVBQUU7NEJBQ1gsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLGVBQWUsS0FBSyxJQUFJLEVBQUU7Z0NBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDOzZCQUFFOzRCQUN2RSxzQkFBTzt5QkFDUjs7d0JBRUcsSUFBSSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsRUFBRTt3QkFDMUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFOzRCQUN2QyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQzt5QkFDL0I7NkJBQU07NEJBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQzt5QkFDaEI7Ozs7YUFDRixDQUFDLENBQUM7UUFDSCxrREFBa0Q7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDekIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsSUFBSSxFQUFFLGNBQVEsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxxREFBd0I7Ozs7SUFBaEM7O1lBQ1EsR0FBRyx3QkFBYSxJQUFJLENBQUMsYUFBYSxDQUFFO1FBQzFDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVTtZQUNyRixHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNoRixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1NBQ3hEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkEzREYsVUFBVTs7OztnQkFURixTQUFTO2dCQUdDLGFBQWE7Z0JBQXZCLFFBQVE7O0lBbUVqQix5QkFBQztDQUFBLEFBN0RELElBNkRDO1NBNURZLGtCQUFrQjs7Ozs7O0lBRTdCLDZDQUFxQzs7Ozs7SUFDckMsd0NBQTJCOzs7OztJQUd6QixpQ0FBc0I7Ozs7O0lBQ3RCLDJDQUFvQzs7Ozs7SUFDcEMsc0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aHJvdHRsZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsYXRmb3JtLCBOYXZDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9uSGFyZHdhcmVCYWNrQnV0dG9uIHtcbiAga2RPbkhhcmR3YXJlQmFja0J1dHRvbigpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGFyZHdhcmVCYWNrQnV0dG9uIHtcblxuICBwcml2YXRlIGZpbHRlckNvbmRpdGlvbiA9ICgpID0+IHRydWU7XG4gIHByaXZhdGUgaW50aWFsaXplZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmF2OiBOYXZpZ2F0b3IsXG4gICAgcHJpdmF0ZSBuYXZDb250cm9sbGVyOiBOYXZDb250cm9sbGVyLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge31cblxuICBlbmFibGUoY29uZGl0aW9uPzooKSA9PiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLmludGlhbGl6ZWQpIHvCoHRoaXMuaW5pdCgpOyB9XG4gICAgdGhpcy5maWx0ZXJDb25kaXRpb24gPSBjb25kaXRpb24gfHzCoCgoKSA9PiB0cnVlKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgaWYgKCF0aGlzLmludGlhbGl6ZWQpIHvCoHRoaXMuaW5pdCgpOyB9XG4gICAgdGhpcy5maWx0ZXJDb25kaXRpb24gPSAoKSA9PiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICB0aGlzLmludGlhbGl6ZWQgPSB0cnVlO1xuICAgIGNvbnN0IGh3QmFja1N1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuICAgIGh3QmFja1N1YmplY3QucGlwZShcbiAgICAgIHRocm90dGxlVGltZSg1MDApLFxuICAgICAgZmlsdGVyKHRoaXMuZmlsdGVyQ29uZGl0aW9uKSxcbiAgICApLnN1YnNjcmliZShhc3luYyAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnSGFyZHdhcmVCYWNrQnV0dG9uOiBiYWNrIGJ1dHRvbiBhY3Rpb24nKTtcbiAgICAgIC8vIGNoZWNrIGlvbmljIG92ZXJsYXlzIChkaXNtaXNzIGlmIGlzIHByZXNlbnRlZCBhbmQgYmFja2Ryb3BEaXNtaXNzID09IHRydWUpXG4gICAgICBjb25zdCBvdmVybGF5U2VsZWN0b3IgPSAnaW9uLWFsZXJ0LWNvbnRyb2xsZXIsIGlvbi1hY3Rpb24tc2hlZXQsIGlvbi1sb2FkaW5nLWNvbnRyb2xsZXInO1xuICAgICAgbGV0IG92ZXJsYXk6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Iob3ZlcmxheVNlbGVjdG9yKTtcbiAgICAgIGlmIChvdmVybGF5ICYmIG92ZXJsYXkuZ2V0VG9wKSB7IG92ZXJsYXkgPSBhd2FpdCBvdmVybGF5LmdldFRvcCgpOyB9XG4gICAgICBpZiAob3ZlcmxheSkge1xuICAgICAgICBpZiAob3ZlcmxheSAmJiBvdmVybGF5LmJhY2tkcm9wRGlzbWlzcyA9PT0gdHJ1ZSkgeyBvdmVybGF5LmRpc21pc3MoKTsgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICAvLyBjaGVjayBpZiBhY3RpdmUgdmlldyBoYXMgaW1wbGVtZW50ZWQgYG9uSGFyZHdhcmVCYWNrKClgLCBlbHNlIHBlcmZvcm1zIG5hdi5wb3AoKVxuICAgICAgbGV0IHZpZXcgPSB0aGlzLmdldEFjdGl2ZVZpZXdSZWZJbnN0YW5jZSgpO1xuICAgICAgaWYgKHZpZXcgJiYgdmlldy5rZE9uSGFyZHdhcmVCYWNrQnV0dG9uKSB7XG4gICAgICAgIHZpZXcua2RPbkhhcmR3YXJlQmFja0J1dHRvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uYXYucG9wKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gT3ZlcnJpbmcgZGVmYXVsdCBoYXJkd2FyZSBiYWNrIGJ1dHRvbiBiZWhhdmlvdXJcbiAgICB0aGlzLnBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XG4gICAgICB0aGlzLnBsYXRmb3JtLmJhY2tCdXR0b24uc3Vic2NyaWJlV2l0aFByaW9yaXR5KDk5OTksICgpID0+IHsgaHdCYWNrU3ViamVjdC5uZXh0KGV2ZW50KTsgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldEFjdGl2ZVZpZXdSZWZJbnN0YW5jZSgpIHtcbiAgICBjb25zdCBuYXY6IGFueSA9IHsgLi4udGhpcy5uYXZDb250cm9sbGVyIH07XG4gICAgaWYgKG5hdiAmJiBuYXYudG9wT3V0bGV0ICYmIG5hdi50b3BPdXRsZXQuc3RhY2tDdHJsICYmIG5hdi50b3BPdXRsZXQuc3RhY2tDdHJsLmFjdGl2ZVZpZXcgJiZcbiAgICAgICAgbmF2LnRvcE91dGxldC5zdGFja0N0cmwuYWN0aXZlVmlldyAmJiBuYXYudG9wT3V0bGV0LnN0YWNrQ3RybC5hY3RpdmVWaWV3LnJlZikge1xuICAgICAgcmV0dXJuIG5hdi50b3BPdXRsZXQuc3RhY2tDdHJsLmFjdGl2ZVZpZXcucmVmLmluc3RhbmNlO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59XG4iXX0=