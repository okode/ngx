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
                    deps: [Environment, HardwareBackButton],
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
 * @param {?} hardwareBackButton
 * @return {?}
 */
export function moduleInitializer(environment, hardwareBackButton) {
    var _this = this;
    return function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, environment.ready()];
                case 1:
                    _a.sent();
                    hardwareBackButton.enable();
                    return [2 /*return*/];
            }
        });
    }); };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUdwRTtJQUFBO0lBc0JBLENBQUM7Ozs7SUFoQlEsNEJBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULFdBQVc7Z0JBQ1gsU0FBUztnQkFDVCxrQkFBa0I7Z0JBQ2xCO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsaUJBQWlCO29CQUM3QixJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUM7b0JBQ3ZDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBckJGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsRUFBRTtvQkFDaEIsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLEVBQUU7aUJBQ1o7O0lBa0JELDJCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FqQlksb0JBQW9COzs7Ozs7QUFtQmpDLE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsV0FBd0IsRUFDeEIsa0JBQXNDO0lBRnhDLGlCQVFDO0lBSkMsT0FBTzs7O3dCQUNMLHFCQUFNLFdBQVcsQ0FBQyxLQUFLLEVBQUUsRUFBQTs7b0JBQXpCLFNBQXlCLENBQUM7b0JBQzFCLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxDQUFDOzs7O1NBQzdCLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9jb3JlJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IE5hdmlnYXRvciB9IGZyb20gJy4vbmF2aWdhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgSGFyZHdhcmVCYWNrQnV0dG9uIH0gZnJvbSAnLi9oYXJkd2FyZS1iYWNrLWJ1dHRvbi5zZXJ2aWNlJztcblxuLy8gQGR5bmFtaWNcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBPa29kZU5neENvbW1vbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogT2tvZGVOZ3hDb21tb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRW52aXJvbm1lbnQsXG4gICAgICAgIE5hdmlnYXRvcixcbiAgICAgICAgSGFyZHdhcmVCYWNrQnV0dG9uLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IG1vZHVsZUluaXRpYWxpemVyLFxuICAgICAgICAgIGRlcHM6IFtFbnZpcm9ubWVudCwgSGFyZHdhcmVCYWNrQnV0dG9uXSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vZHVsZUluaXRpYWxpemVyKFxuICBlbnZpcm9ubWVudDogRW52aXJvbm1lbnQsXG4gIGhhcmR3YXJlQmFja0J1dHRvbjogSGFyZHdhcmVCYWNrQnV0dG9uXG4pIHtcbiAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBlbnZpcm9ubWVudC5yZWFkeSgpO1xuICAgIGhhcmR3YXJlQmFja0J1dHRvbi5lbmFibGUoKTtcbiAgfTtcbn1cbiJdfQ==