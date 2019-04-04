/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUdwRTtJQUFBO0lBc0JBLENBQUM7Ozs7SUFoQlEsNEJBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULFdBQVc7Z0JBQ1gsU0FBUztnQkFDVCxrQkFBa0I7Z0JBQ2xCO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsaUJBQWlCO29CQUM3QixJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7b0JBQ25CLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBckJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLEVBQUU7aUJBQ1o7O0lBa0JELDJCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FqQlksb0JBQW9COzs7OztBQW1CakMsTUFBTSxVQUFVLGlCQUFpQixDQUFDLFdBQXdCO0lBQTFELGlCQUlDO0lBSEMsT0FBTzs7O3dCQUNMLHFCQUFNLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBQTs7b0JBQXpCLFNBQXlCLENBQUM7Ozs7U0FDM0IsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2NvcmUnO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBIYXJkd2FyZUJhY2tCdXR0b24gfSBmcm9tICcuL2hhcmR3YXJlLWJhY2stYnV0dG9uLnNlcnZpY2UnO1xuXG4vLyBAZHluYW1pY1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE9rb2RlTmd4Q29tbW9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBPa29kZU5neENvbW1vbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBFbnZpcm9ubWVudCxcbiAgICAgICAgTmF2aWdhdG9yLFxuICAgICAgICBIYXJkd2FyZUJhY2tCdXR0b24sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgdXNlRmFjdG9yeTogbW9kdWxlSW5pdGlhbGl6ZXIsXG4gICAgICAgICAgZGVwczogW0Vudmlyb25tZW50XSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vZHVsZUluaXRpYWxpemVyKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCkge1xuICByZXR1cm4gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGVudmlyb25tZW50LnJlYWR5KCk7XG4gIH07XG59XG4iXX0=