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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2NhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztTQVN2RCxjQUFjO0FBUGhDO0lBQUE7SUFhbUMsQ0FBQzs7Z0JBYm5DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsY0FBYyxDQUFDLE9BQU8sQ0FBQzs0QkFDckIsT0FBTyxFQUFFLFdBQVc7NEJBQ3BCLFVBQVUsSUFBZ0I7eUJBQzNCLENBQUM7cUJBQ0g7b0JBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7b0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2lCQUM3Qjs7SUFDa0MsMkJBQUM7Q0FBQSxBQWJwQyxJQWFvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBDYWxlbmRhckNvbXBvbmVudCB9IGZyb20gJy4vY2FsZW5kYXIuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyTW9kdWxlLCBEYXRlQWRhcHRlciB9IGZyb20gJ2FuZ3VsYXItY2FsZW5kYXInO1xuaW1wb3J0IHsgYWRhcHRlckZhY3RvcnkgfSBmcm9tICdhbmd1bGFyLWNhbGVuZGFyL2RhdGUtYWRhcHRlcnMvZGF0ZS1mbnMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIENhbGVuZGFyTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsXG4gICAgICB1c2VGYWN0b3J5OiBhZGFwdGVyRmFjdG9yeVxuICAgIH0pXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NhbGVuZGFyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NhbGVuZGFyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNYXBmcmVDYWxlbmRhck1vZHVsZSB7fVxuIl19