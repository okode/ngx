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
var HardwareBackButton = /** @class */ (function () {
    function HardwareBackButton(navCtrl, nav, platform) {
        this.navCtrl = navCtrl;
        this.nav = nav;
        this.platform = platform;
        this.filterCondition = (/**
         * @return {?}
         */
        function () { return true; });
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
        this.filterCondition = condition || ((/**
         * @return {?}
         */
        function () { return true; }));
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
        this.filterCondition = (/**
         * @return {?}
         */
        function () { return false; });
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
        hwBackSubject.pipe(throttleTime(500), filter((/**
         * @return {?}
         */
        function () { return _this.filterCondition(); }))).subscribe((/**
         * @return {?}
         */
        function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
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
        }); }));
        // Overring default hardware back button behaviour
        this.platform.ready().then((/**
         * @return {?}
         */
        function () {
            _this.platform.backButton.subscribeWithPriority(9999, (/**
             * @return {?}
             */
            function () { hwBackSubject.next(event); }));
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFyZHdhcmUtYmFjay1idXR0b24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2hhcmR3YXJlLWJhY2stYnV0dG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUV6RCwwQ0FFQzs7Ozs7SUFEQyx3RUFBeUI7O0FBRzNCO0lBTUUsNEJBQ1UsT0FBc0IsRUFDdEIsR0FBYyxFQUNkLFFBQWtCO1FBRmxCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFDdEIsUUFBRyxHQUFILEdBQUcsQ0FBVztRQUNkLGFBQVEsR0FBUixRQUFRLENBQVU7UUFOcEIsb0JBQWU7OztRQUFHLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxFQUFDO1FBQzdCLGVBQVUsR0FBRyxLQUFLLENBQUM7SUFNeEIsQ0FBQzs7Ozs7SUFFSixtQ0FBTTs7OztJQUFOLFVBQU8sU0FBd0I7UUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FBRTtRQUN0QyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsSUFBSTs7O1FBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLEVBQUMsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsb0NBQU87OztJQUFQO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FBRTtRQUN0QyxJQUFJLENBQUMsZUFBZTs7O1FBQUcsY0FBTSxPQUFBLEtBQUssRUFBTCxDQUFLLENBQUEsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUVPLGlDQUFJOzs7O0lBQVo7UUFBQSxpQkE0QkM7UUEzQkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7O1lBQ2pCLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBRTtRQUNuQyxhQUFhLENBQUMsSUFBSSxDQUNoQixZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE1BQU07OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsZUFBZSxFQUFFLEVBQXRCLENBQXNCLEVBQUMsQ0FDckMsQ0FBQyxTQUFTOzs7UUFBQzs7Ozs7d0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDOzt3QkFFaEQsZUFBZSxHQUFHLGdFQUFnRTt3QkFDcEYsT0FBTyxHQUFRLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDOzZCQUN0RCxDQUFBLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFBLEVBQXpCLHdCQUF5Qjt3QkFBYyxxQkFBTSxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUE7O3dCQUFoQyxPQUFPLEdBQUcsU0FBc0IsQ0FBQzs7O3dCQUNsRSxJQUFJLE9BQU8sRUFBRTs0QkFDWCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsZUFBZSxLQUFLLElBQUksRUFBRTtnQ0FBRSxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7NkJBQUU7NEJBQ3ZFLHNCQUFPO3lCQUNSOzt3QkFFRyxJQUFJLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixFQUFFO3dCQUMxQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7NEJBQ3ZDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO3lCQUMvQjs2QkFBTTs0QkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO3lCQUNoQjs7OzthQUNGLEVBQUMsQ0FBQztRQUNILGtEQUFrRDtRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUk7OztRQUFDO1lBQ3pCLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUk7OztZQUFFLGNBQVEsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO1FBQzdGLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxxREFBd0I7Ozs7SUFBaEM7O1lBQ1EsR0FBRyx3QkFBYSxJQUFJLENBQUMsT0FBTyxDQUFFO1FBQ3BDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVTtZQUNyRixHQUFHLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNoRixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDO1NBQ3hEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkEzREYsVUFBVTs7OztnQkFOUSxhQUFhO2dCQUh2QixTQUFTO2dCQUdULFFBQVE7O0lBbUVqQix5QkFBQztDQUFBLEFBN0RELElBNkRDO1NBNURZLGtCQUFrQjs7Ozs7O0lBRTdCLDZDQUFxQzs7Ozs7SUFDckMsd0NBQTJCOzs7OztJQUd6QixxQ0FBOEI7Ozs7O0lBQzlCLGlDQUFzQjs7Ozs7SUFDdEIsc0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0aHJvdHRsZVRpbWUsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBsYXRmb3JtLCBOYXZDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9uSGFyZHdhcmVCYWNrQnV0dG9uIHtcbiAga2RPbkhhcmR3YXJlQmFja0J1dHRvbigpO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSGFyZHdhcmVCYWNrQnV0dG9uIHtcblxuICBwcml2YXRlIGZpbHRlckNvbmRpdGlvbiA9ICgpID0+IHRydWU7XG4gIHByaXZhdGUgaW50aWFsaXplZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbmF2Q3RybDogTmF2Q29udHJvbGxlcixcbiAgICBwcml2YXRlIG5hdjogTmF2aWdhdG9yLFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXG4gICkge31cblxuICBlbmFibGUoY29uZGl0aW9uPzooKSA9PiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLmludGlhbGl6ZWQpIHvCoHRoaXMuaW5pdCgpOyB9XG4gICAgdGhpcy5maWx0ZXJDb25kaXRpb24gPSBjb25kaXRpb24gfHzCoCgoKSA9PiB0cnVlKTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgaWYgKCF0aGlzLmludGlhbGl6ZWQpIHvCoHRoaXMuaW5pdCgpOyB9XG4gICAgdGhpcy5maWx0ZXJDb25kaXRpb24gPSAoKSA9PiBmYWxzZTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdCgpIHtcbiAgICB0aGlzLmludGlhbGl6ZWQgPSB0cnVlO1xuICAgIGNvbnN0IGh3QmFja1N1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuICAgIGh3QmFja1N1YmplY3QucGlwZShcbiAgICAgIHRocm90dGxlVGltZSg1MDApLFxuICAgICAgZmlsdGVyKCgpID0+IHRoaXMuZmlsdGVyQ29uZGl0aW9uKCkpLFxuICAgICkuc3Vic2NyaWJlKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdIYXJkd2FyZUJhY2tCdXR0b246IGJhY2sgYnV0dG9uIGFjdGlvbicpO1xuICAgICAgLy8gY2hlY2sgaW9uaWMgb3ZlcmxheXMgKGRpc21pc3MgaWYgaXMgcHJlc2VudGVkIGFuZCBiYWNrZHJvcERpc21pc3MgPT0gdHJ1ZSlcbiAgICAgIGNvbnN0IG92ZXJsYXlTZWxlY3RvciA9ICdpb24tYWxlcnQtY29udHJvbGxlciwgaW9uLWFjdGlvbi1zaGVldCwgaW9uLWxvYWRpbmctY29udHJvbGxlcic7XG4gICAgICBsZXQgb3ZlcmxheTogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvdmVybGF5U2VsZWN0b3IpO1xuICAgICAgaWYgKG92ZXJsYXkgJiYgb3ZlcmxheS5nZXRUb3ApIHsgb3ZlcmxheSA9IGF3YWl0IG92ZXJsYXkuZ2V0VG9wKCk7IH1cbiAgICAgIGlmIChvdmVybGF5KSB7XG4gICAgICAgIGlmIChvdmVybGF5ICYmIG92ZXJsYXkuYmFja2Ryb3BEaXNtaXNzID09PSB0cnVlKSB7IG92ZXJsYXkuZGlzbWlzcygpOyB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIC8vIGNoZWNrIGlmIGFjdGl2ZSB2aWV3IGhhcyBpbXBsZW1lbnRlZCBgb25IYXJkd2FyZUJhY2soKWAsIGVsc2UgcGVyZm9ybXMgbmF2LnBvcCgpXG4gICAgICBsZXQgdmlldyA9IHRoaXMuZ2V0QWN0aXZlVmlld1JlZkluc3RhbmNlKCk7XG4gICAgICBpZiAodmlldyAmJiB2aWV3LmtkT25IYXJkd2FyZUJhY2tCdXR0b24pIHtcbiAgICAgICAgdmlldy5rZE9uSGFyZHdhcmVCYWNrQnV0dG9uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm5hdi5wb3AoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBPdmVycmluZyBkZWZhdWx0IGhhcmR3YXJlIGJhY2sgYnV0dG9uIGJlaGF2aW91clxuICAgIHRoaXMucGxhdGZvcm0ucmVhZHkoKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMucGxhdGZvcm0uYmFja0J1dHRvbi5zdWJzY3JpYmVXaXRoUHJpb3JpdHkoOTk5OSwgKCkgPT4geyBod0JhY2tTdWJqZWN0Lm5leHQoZXZlbnQpOyB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWN0aXZlVmlld1JlZkluc3RhbmNlKCkge1xuICAgIGNvbnN0IG5hdjogYW55ID0geyAuLi50aGlzLm5hdkN0cmwgfTtcbiAgICBpZiAobmF2ICYmIG5hdi50b3BPdXRsZXQgJiYgbmF2LnRvcE91dGxldC5zdGFja0N0cmwgJiYgbmF2LnRvcE91dGxldC5zdGFja0N0cmwuYWN0aXZlVmlldyAmJlxuICAgICAgICBuYXYudG9wT3V0bGV0LnN0YWNrQ3RybC5hY3RpdmVWaWV3ICYmIG5hdi50b3BPdXRsZXQuc3RhY2tDdHJsLmFjdGl2ZVZpZXcucmVmKSB7XG4gICAgICByZXR1cm4gbmF2LnRvcE91dGxldC5zdGFja0N0cmwuYWN0aXZlVmlldy5yZWYuaW5zdGFuY2U7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn1cbiJdfQ==