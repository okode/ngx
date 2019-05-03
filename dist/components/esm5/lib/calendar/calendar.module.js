/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalendarComponent } from './calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { OkodeNgxCustomPaletteModule } from 'custom-palette';
var ɵ0 = adapterFactory;
var MapfreCalendarModule = /** @class */ (function () {
    function MapfreCalendarModule() {
    }
    MapfreCalendarModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        IonicModule,
                        OkodeNgxCustomPaletteModule,
                        CalendarModule.forRoot({
                            provide: DateAdapter,
                            useFactory: ɵ0
                        })
                    ],
                    declarations: [CalendarComponent],
                    exports: [CalendarComponent]
                },] }
    ];
    return MapfreCalendarModule;
}());
export { MapfreCalendarModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9jYWxlbmRhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7U0FVM0MsY0FBYztBQVJoQztJQUFBO0lBY21DLENBQUM7O2dCQWRuQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osV0FBVzt3QkFDWCxXQUFXO3dCQUNYLDJCQUEyQjt3QkFDM0IsY0FBYyxDQUFDLE9BQU8sQ0FBQzs0QkFDckIsT0FBTyxFQUFFLFdBQVc7NEJBQ3BCLFVBQVUsSUFBZ0I7eUJBQzNCLENBQUM7cUJBQ0g7b0JBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3Qjs7SUFDa0MsMkJBQUM7Q0FBQSxBQWRwQyxJQWNvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlLCBEYXRlQWRhcHRlciB9IGZyb20gJ2FuZ3VsYXItY2FsZW5kYXInO1xuaW1wb3J0IHsgYWRhcHRlckZhY3RvcnkgfSBmcm9tICdhbmd1bGFyLWNhbGVuZGFyL2RhdGUtYWRhcHRlcnMvZGF0ZS1mbnMnO1xuaW1wb3J0IHsgT2tvZGVOZ3hDdXN0b21QYWxldHRlTW9kdWxlIH0gZnJvbSAnY3VzdG9tLXBhbGV0dGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIE9rb2RlTmd4Q3VzdG9tUGFsZXR0ZU1vZHVsZSxcbiAgICBDYWxlbmRhck1vZHVsZS5mb3JSb290KHtcbiAgICAgIHByb3ZpZGU6IERhdGVBZGFwdGVyLFxuICAgICAgdXNlRmFjdG9yeTogYWRhcHRlckZhY3RvcnlcbiAgICB9KVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtDYWxlbmRhckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtDYWxlbmRhckNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTWFwZnJlQ2FsZW5kYXJNb2R1bGUge31cbiJdfQ==