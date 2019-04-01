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
export class OkodeNgxCommonModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
OkodeNgxCommonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                imports: [],
                exports: []
            },] }
];
/**
 * @param {?} environment
 * @param {?} hardwareBackButton
 * @return {?}
 */
export function moduleInitializer(environment, hardwareBackButton) {
    return () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield environment.ready();
        hardwareBackButton.enable();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQVFwRSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBQy9CLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULFdBQVc7Z0JBQ1gsU0FBUztnQkFDVCxrQkFBa0I7Z0JBQ2xCO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsaUJBQWlCO29CQUM3QixJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsa0JBQWtCLENBQUM7b0JBQ3ZDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBckJGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEVBQUU7YUFDWjs7Ozs7OztBQW9CRCxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLFdBQXdCLEVBQ3hCLGtCQUFzQztJQUV0QyxPQUFPLEdBQVMsRUFBRTtRQUNoQixNQUFNLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM5QixDQUFDLENBQUEsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2NvcmUnO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF2aWdhdG9yIH0gZnJvbSAnLi9uYXZpZ2F0b3Iuc2VydmljZSc7XG5pbXBvcnQgeyBIYXJkd2FyZUJhY2tCdXR0b24gfSBmcm9tICcuL2hhcmR3YXJlLWJhY2stYnV0dG9uLnNlcnZpY2UnO1xuXG4vLyBAZHluYW1pY1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE9rb2RlTmd4Q29tbW9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBPa29kZU5neENvbW1vbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBFbnZpcm9ubWVudCxcbiAgICAgICAgTmF2aWdhdG9yLFxuICAgICAgICBIYXJkd2FyZUJhY2tCdXR0b24sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgdXNlRmFjdG9yeTogbW9kdWxlSW5pdGlhbGl6ZXIsXG4gICAgICAgICAgZGVwczogW0Vudmlyb25tZW50LCBIYXJkd2FyZUJhY2tCdXR0b25dLFxuICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9kdWxlSW5pdGlhbGl6ZXIoXG4gIGVudmlyb25tZW50OiBFbnZpcm9ubWVudCxcbiAgaGFyZHdhcmVCYWNrQnV0dG9uOiBIYXJkd2FyZUJhY2tCdXR0b25cbikge1xuICByZXR1cm4gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGVudmlyb25tZW50LnJlYWR5KCk7XG4gICAgaGFyZHdhcmVCYWNrQnV0dG9uLmVuYWJsZSgpO1xuICB9O1xufVxuIl19