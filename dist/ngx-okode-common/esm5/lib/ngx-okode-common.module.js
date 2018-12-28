/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Environment } from './environment.service';
// @dynamic
var NgxOkodeCommonModule = /** @class */ (function () {
    function NgxOkodeCommonModule() {
    }
    /**
     * @return {?}
     */
    NgxOkodeCommonModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxOkodeCommonModule,
            providers: [
                Environment,
                { provide: APP_INITIALIZER, useFactory: envInitializer, deps: [Environment], multi: true },
            ]
        };
    };
    NgxOkodeCommonModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [],
                    exports: []
                },] }
    ];
    return NgxOkodeCommonModule;
}());
export { NgxOkodeCommonModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW9rb2RlLWNvbW1vbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2tvZGUtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL25neC1va29kZS1jb21tb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQUdwRDtJQUFBO0lBZUEsQ0FBQzs7OztJQVRRLDRCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVCxXQUFXO2dCQUNYLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7YUFDM0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBZEYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxFQUFFO29CQUNoQixPQUFPLEVBQUUsRUFBRTtvQkFDWCxPQUFPLEVBQUUsRUFBRTtpQkFDWjs7SUFXRCwyQkFBQztDQUFBLEFBZkQsSUFlQztTQVZZLG9CQUFvQjs7Ozs7QUFZakMsTUFBTSxVQUFVLGNBQWMsQ0FBQyxXQUF3QjtJQUF2RCxpQkFJQztJQUhDLE9BQU87Ozt3QkFDTCxxQkFBTSxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUE7O29CQUF6QixTQUF5QixDQUFDOzs7O1NBQzNCLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9jb3JlJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudC5zZXJ2aWNlJztcblxuLy8gQGR5bmFtaWNcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hPa29kZUNvbW1vbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4T2tvZGVDb21tb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRW52aXJvbm1lbnQsXG4gICAgICAgIHsgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLCB1c2VGYWN0b3J5OiBlbnZJbml0aWFsaXplciwgZGVwczogW0Vudmlyb25tZW50XSwgbXVsdGk6IHRydWUgfSxcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnZJbml0aWFsaXplcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpIHtcbiAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBlbnZpcm9ubWVudC5yZWFkeSgpO1xuICB9O1xufVxuIl19