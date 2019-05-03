/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Environment } from './environment.service';
import { Navigator } from './navigator.service';
import { HardwareBackButton } from './hardware-back-button.service';
// @dynamic
var OkodeNgxCommonModule = /** @class */ (function () {
    function OkodeNgxCommonModule() {
    }
    /**
     * @return {?}
     */
    OkodeNgxCommonModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: OkodeNgxCommonModule,
            providers: [
                Environment,
                Navigator,
                HardwareBackButton,
                {
                    provide: APP_INITIALIZER,
                    useFactory: moduleInitializer,
                    deps: [Environment],
                    multi: true
                },
            ]
        };
    };
    OkodeNgxCommonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [],
                    exports: []
                },] }
    ];
    return OkodeNgxCommonModule;
}());
export { OkodeNgxCommonModule };
/**
 * @param {?} environment
 * @return {?}
 */
export function moduleInitializer(environment) {
    var _this = this;
    return (/**
     * @return {?}
     */
    function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, environment.ready()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUdwRTtJQUFBO0lBc0JBLENBQUM7Ozs7SUFoQlEsNEJBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULFdBQVc7Z0JBQ1gsU0FBUztnQkFDVCxrQkFBa0I7Z0JBQ2xCO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsaUJBQWlCO29CQUM3QixJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0JBQ25CLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBckJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLEVBQUU7aUJBQ1o7O0lBa0JELDJCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FqQlksb0JBQW9COzs7OztBQW1CakMsTUFBTSxVQUFVLGlCQUFpQixDQUFDLFdBQXdCO0lBQTFELGlCQUlDO0lBSEM7OztJQUFPOzs7d0JBQ0wscUJBQU0sV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFBOztvQkFBekIsU0FBeUIsQ0FBQzs7OztTQUMzQixFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBBUFBfSU5JVElBTElaRVIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21waWxlci9zcmMvY29yZSc7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gJy4vZW52aXJvbm1lbnQuc2VydmljZSc7XG5pbXBvcnQgeyBOYXZpZ2F0b3IgfSBmcm9tICcuL25hdmlnYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IEhhcmR3YXJlQmFja0J1dHRvbiB9IGZyb20gJy4vaGFyZHdhcmUtYmFjay1idXR0b24uc2VydmljZSc7XG5cbi8vIEBkeW5hbWljXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgT2tvZGVOZ3hDb21tb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE9rb2RlTmd4Q29tbW9uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEVudmlyb25tZW50LFxuICAgICAgICBOYXZpZ2F0b3IsXG4gICAgICAgIEhhcmR3YXJlQmFja0J1dHRvbixcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICB1c2VGYWN0b3J5OiBtb2R1bGVJbml0aWFsaXplcixcbiAgICAgICAgICBkZXBzOiBbRW52aXJvbm1lbnRdLFxuICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9kdWxlSW5pdGlhbGl6ZXIoZW52aXJvbm1lbnQ6IEVudmlyb25tZW50KSB7XG4gIHJldHVybiBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZW52aXJvbm1lbnQucmVhZHkoKTtcbiAgfTtcbn1cbiJdfQ==