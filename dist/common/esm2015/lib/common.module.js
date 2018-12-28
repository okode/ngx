/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Environment } from './environment.service';
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
                { provide: APP_INITIALIZER, useFactory: envInitializer, deps: [Environment], multi: true },
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
 * @return {?}
 */
export function envInitializer(environment) {
    return () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield environment.ready();
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2NvbW1vbi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBUXBELE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFDL0IsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUU7Z0JBQ1QsV0FBVztnQkFDWCxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2FBQzNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWRGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFLEVBQUU7Z0JBQ1gsT0FBTyxFQUFFLEVBQUU7YUFDWjs7Ozs7O0FBYUQsTUFBTSxVQUFVLGNBQWMsQ0FBQyxXQUF3QjtJQUNyRCxPQUFPLEdBQVMsRUFBRTtRQUNoQixNQUFNLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDLENBQUEsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2NvcmUnO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tICcuL2Vudmlyb25tZW50LnNlcnZpY2UnO1xuXG4vLyBAZHluYW1pY1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXSxcbiAgaW1wb3J0czogW10sXG4gIGV4cG9ydHM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIE9rb2RlTmd4Q29tbW9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBPa29kZU5neENvbW1vbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBFbnZpcm9ubWVudCxcbiAgICAgICAgeyBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsIHVzZUZhY3Rvcnk6IGVudkluaXRpYWxpemVyLCBkZXBzOiBbRW52aXJvbm1lbnRdLCBtdWx0aTogdHJ1ZSB9LFxuICAgICAgXVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudkluaXRpYWxpemVyKGVudmlyb25tZW50OiBFbnZpcm9ubWVudCkge1xuICByZXR1cm4gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGVudmlyb25tZW50LnJlYWR5KCk7XG4gIH07XG59XG4iXX0=