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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFyZHdhcmUtYmFjay1idXR0b24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2hhcmR3YXJlLWJhY2stYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV6RCwwQ0FFQzs7Ozs7SUFEQyx3RUFBeUI7O0FBRzNCO0lBTUUsNEJBQ1UsR0FBYyxFQUNkLGFBQTRCLEVBQzVCLFFBQWtCO1FBRmxCLFFBQUcsR0FBSCxHQUFHLENBQVc7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTnBCLG9CQUFlLEdBQUcsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7UUFDN0IsZUFBVSxHQUFHLEtBQUssQ0FBQztJQU14QixDQUFDOzs7OztJQUVKLG1DQUFNOzs7O0lBQU4sVUFBTyxTQUF3QjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUFFO1FBQ3RDLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxJQUFJLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsb0NBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FBRTtRQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQU0sT0FBQSxLQUFLLEVBQUwsQ0FBSyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRU8saUNBQUk7Ozs7SUFBWjtRQUFBLGlCQTJCQztRQTFCQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7WUFDakIsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFFO1FBQ25DLGFBQWEsQ0FBQyxJQUFJLENBQ2hCLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FDN0IsQ0FBQyxTQUFTLENBQUM7Ozs7Ozt3QkFFSixlQUFlLEdBQUcsZ0VBQWdFO3dCQUNwRixPQUFPLEdBQVEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7NkJBQ3RELENBQUEsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUEsRUFBekIsd0JBQXlCO3dCQUFjLHFCQUFNLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBQTs7d0JBQWhDLE9BQU8sR0FBRyxTQUFzQixDQUFDOzs7d0JBQ2xFLElBQUksT0FBTyxFQUFFOzRCQUNYLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxlQUFlLEtBQUssSUFBSSxFQUFFO2dDQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQzs2QkFBRTs0QkFDdkUsc0JBQU87eUJBQ1I7O3dCQUVHLElBQUksR0FBRyxJQUFJLENBQUMsd0JBQXdCLEVBQUU7d0JBQzFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTs0QkFDdkMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7eUJBQy9COzZCQUFNOzRCQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7eUJBQ2hCOzs7O2FBQ0YsQ0FBQyxDQUFDO1FBQ0gsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxjQUFRLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8scURBQXdCOzs7O0lBQWhDOztZQUNRLEdBQUcsd0JBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBRTtRQUMxQyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVU7WUFDckYsR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDaEYsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztTQUN4RDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBMURGLFVBQVU7Ozs7Z0JBVEYsU0FBUztnQkFHQyxhQUFhO2dCQUF2QixRQUFROztJQWtFakIseUJBQUM7Q0FBQSxBQTVERCxJQTREQztTQTNEWSxrQkFBa0I7Ozs7OztJQUU3Qiw2Q0FBcUM7Ozs7O0lBQ3JDLHdDQUEyQjs7Ozs7SUFHekIsaUNBQXNCOzs7OztJQUN0QiwyQ0FBb0M7Ozs7O0lBQ3BDLHNDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gJy4vbmF2aWdhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGhyb3R0bGVUaW1lLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQbGF0Zm9ybSwgTmF2Q29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuZXhwb3J0IGludGVyZmFjZSBPbkhhcmR3YXJlQmFja0J1dHRvbiB7XG4gIGtkT25IYXJkd2FyZUJhY2tCdXR0b24oKTtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEhhcmR3YXJlQmFja0J1dHRvbiB7XG5cbiAgcHJpdmF0ZSBmaWx0ZXJDb25kaXRpb24gPSAoKSA9PiB0cnVlO1xuICBwcml2YXRlIGludGlhbGl6ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5hdjogTmF2aWdhdG9yLFxuICAgIHByaXZhdGUgbmF2Q29udHJvbGxlcjogTmF2Q29udHJvbGxlcixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHt9XG5cbiAgZW5hYmxlKGNvbmRpdGlvbj86KCkgPT4gYm9vbGVhbikge1xuICAgIGlmICghdGhpcy5pbnRpYWxpemVkKSB7wqB0aGlzLmluaXQoKTsgfVxuICAgIHRoaXMuZmlsdGVyQ29uZGl0aW9uID0gY29uZGl0aW9uIHx8wqAoKCkgPT4gdHJ1ZSk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIGlmICghdGhpcy5pbnRpYWxpemVkKSB7wqB0aGlzLmluaXQoKTsgfVxuICAgIHRoaXMuZmlsdGVyQ29uZGl0aW9uID0gKCkgPT4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGluaXQoKSB7XG4gICAgdGhpcy5pbnRpYWxpemVkID0gdHJ1ZTtcbiAgICBjb25zdCBod0JhY2tTdWJqZWN0ID0gbmV3IFN1YmplY3QoKTtcbiAgICBod0JhY2tTdWJqZWN0LnBpcGUoXG4gICAgICB0aHJvdHRsZVRpbWUoNTAwKSxcbiAgICAgIGZpbHRlcih0aGlzLmZpbHRlckNvbmRpdGlvbiksXG4gICAgKS5zdWJzY3JpYmUoYXN5bmMgKCkgPT4ge1xuICAgICAgLy8gY2hlY2sgaW9uaWMgb3ZlcmxheXMgKGRpc21pc3MgaWYgaXMgcHJlc2VudGVkIGFuZCBiYWNrZHJvcERpc21pc3MgPT0gdHJ1ZSlcbiAgICAgIGNvbnN0IG92ZXJsYXlTZWxlY3RvciA9ICdpb24tYWxlcnQtY29udHJvbGxlciwgaW9uLWFjdGlvbi1zaGVldCwgaW9uLWxvYWRpbmctY29udHJvbGxlcic7XG4gICAgICBsZXQgb3ZlcmxheTogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvdmVybGF5U2VsZWN0b3IpO1xuICAgICAgaWYgKG92ZXJsYXkgJiYgb3ZlcmxheS5nZXRUb3ApIHsgb3ZlcmxheSA9IGF3YWl0IG92ZXJsYXkuZ2V0VG9wKCk7IH1cbiAgICAgIGlmIChvdmVybGF5KSB7XG4gICAgICAgIGlmIChvdmVybGF5ICYmIG92ZXJsYXkuYmFja2Ryb3BEaXNtaXNzID09PSB0cnVlKSB7IG92ZXJsYXkuZGlzbWlzcygpOyB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIGlmIGFjdGl2ZSB2aWV3IGhhcyBpbXBsZW1lbnRlZCBgb25IYXJkd2FyZUJhY2soKWAsIGVsc2UgcGVyZm9ybXMgbmF2LnBvcCgpXG4gICAgICBsZXQgdmlldyA9IHRoaXMuZ2V0QWN0aXZlVmlld1JlZkluc3RhbmNlKCk7XG4gICAgICBpZiAodmlldyAmJiB2aWV3LmtkT25IYXJkd2FyZUJhY2tCdXR0b24pIHtcbiAgICAgICAgdmlldy5rZE9uSGFyZHdhcmVCYWNrQnV0dG9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5hdi5wb3AoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBPdmVycmluZyBkZWZhdWx0IGhhcmR3YXJlIGJhY2sgYnV0dG9uIGJlaGF2aW91clxuICAgIHRoaXMucGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucGxhdGZvcm0uYmFja0J1dHRvbi5zdWJzY3JpYmVXaXRoUHJpb3JpdHkoOTk5OSwgKCkgPT4geyBod0JhY2tTdWJqZWN0Lm5leHQoZXZlbnQpOyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWN0aXZlVmlld1JlZkluc3RhbmNlKCkge1xuICAgIGNvbnN0IG5hdjogYW55ID0geyAuLi50aGlzLm5hdkNvbnRyb2xsZXIgfTtcbiAgICBpZiAobmF2ICYmIG5hdi50b3BPdXRsZXQgJiYgbmF2LnRvcE91dGxldC5zdGFja0N0cmwgJiYgbmF2LnRvcE91dGxldC5zdGFja0N0cmwuYWN0aXZlVmlldyAmJlxuICAgICAgICBuYXYudG9wT3V0bGV0LnN0YWNrQ3RybC5hY3RpdmVWaWV3ICYmIG5hdi50b3BPdXRsZXQuc3RhY2tDdHJsLmFjdGl2ZVZpZXcucmVmKSB7XG4gICAgICByZXR1cm4gbmF2LnRvcE91dGxldC5zdGFja0N0cmwuYWN0aXZlVmlldy5yZWYuaW5zdGFuY2U7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn1cbiJdfQ==