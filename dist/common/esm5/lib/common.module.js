/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Environment } from './environment.service';
import { Navigator } from './navigator.service';
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
                { provide: APP_INITIALIZER, useFactory: envInitializer, deps: [Environment], multi: true },
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
export function envInitializer(environment) {
    var _this = this;
    return function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, environment.ready()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztBQUdoRDtJQUFBO0lBZ0JBLENBQUM7Ozs7SUFWUSw0QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1QsV0FBVztnQkFDWCxTQUFTO2dCQUNULEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7YUFDM0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBZkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtvQkFDWCxPQUFPLEVBQUUsRUFBRTtpQkFDWjs7SUFZRCwyQkFBQztDQUFBLEFBaEJELElBZ0JDO1NBWFksb0JBQW9COzs7OztBQWFqQyxNQUFNLFVBQVUsY0FBYyxDQUFDLFdBQXdCO0lBQXZELGlCQUlDO0lBSEMsT0FBTzs7O3dCQUNMLHFCQUFNLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBQTs7b0JBQXpCLFNBQXlCLENBQUM7Ozs7U0FDM0IsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2NvcmUnO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3Iuc2VydmljZSc7XG5cbi8vIEBkeW5hbWljXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgT2tvZGVOZ3hDb21tb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE9rb2RlTmd4Q29tbW9uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEVudmlyb25tZW50LFxuICAgICAgICBOYXZpZ2F0b3IsXG4gICAgICAgIHsgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLCB1c2VGYWN0b3J5OiBlbnZJbml0aWFsaXplciwgZGVwczogW0Vudmlyb25tZW50XSwgbXVsdGk6IHRydWUgfSxcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnZJbml0aWFsaXplcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpIHtcbiAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBlbnZpcm9ubWVudC5yZWFkeSgpO1xuICB9O1xufVxuIl19