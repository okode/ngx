/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Environment } from './environment.service';
// @dynamic
export class NgxOkodeCommonModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgxOkodeCommonModule,
            providers: [
                Environment,
                { provide: APP_INITIALIZER, useFactory: envInitializer, deps: [Environment], multi: true },
            ]
        };
    }
}
NgxOkodeCommonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [],
                exports: []
            },] }
];
/**
 * @param {?} environment
 * @return {?}
 */
export function envInitializer(environment) {
    return () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield environment.ready();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW9rb2RlLWNvbW1vbi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtb2tvZGUtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL25neC1va29kZS1jb21tb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQVFwRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBQy9CLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULFdBQVc7Z0JBQ1gsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTthQUMzRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFkRixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU8sRUFBRSxFQUFFO2FBQ1o7Ozs7OztBQWFELE1BQU0sVUFBVSxjQUFjLENBQUMsV0FBd0I7SUFDckQsT0FBTyxHQUFTLEVBQUU7UUFDaEIsTUFBTSxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDNUIsQ0FBQyxDQUFBLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9jb3JlJztcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSAnLi9lbnZpcm9ubWVudC5zZXJ2aWNlJztcblxuLy8gQGR5bmFtaWNcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGltcG9ydHM6IFtdLFxuICBleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hPa29kZUNvbW1vbk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTmd4T2tvZGVDb21tb25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRW52aXJvbm1lbnQsXG4gICAgICAgIHsgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLCB1c2VGYWN0b3J5OiBlbnZJbml0aWFsaXplciwgZGVwczogW0Vudmlyb25tZW50XSwgbXVsdGk6IHRydWUgfSxcbiAgICAgIF1cbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnZJbml0aWFsaXplcihlbnZpcm9ubWVudDogRW52aXJvbm1lbnQpIHtcbiAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBlbnZpcm9ubWVudC5yZWFkeSgpO1xuICB9O1xufVxuIl19