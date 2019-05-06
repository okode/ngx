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
const ɵ0 = adapterFactory;
export class MapfreCalendarModule {
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2NhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztXQVUzQyxjQUFjO0FBTWhDLE1BQU0sT0FBTyxvQkFBb0I7OztZQWRoQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxXQUFXO29CQUNYLDJCQUEyQjtvQkFDM0IsY0FBYyxDQUFDLE9BQU8sQ0FBQzt3QkFDckIsT0FBTyxFQUFFLFdBQVc7d0JBQ3BCLFVBQVUsSUFBZ0I7cUJBQzNCLENBQUM7aUJBQ0g7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgQ2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL2NhbGVuZGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYWxlbmRhck1vZHVsZSwgRGF0ZUFkYXB0ZXIgfSBmcm9tICdhbmd1bGFyLWNhbGVuZGFyJztcbmltcG9ydCB7IGFkYXB0ZXJGYWN0b3J5IH0gZnJvbSAnYW5ndWxhci1jYWxlbmRhci9kYXRlLWFkYXB0ZXJzL2RhdGUtZm5zJztcbmltcG9ydCB7IE9rb2RlTmd4Q3VzdG9tUGFsZXR0ZU1vZHVsZSB9IGZyb20gJ2N1c3RvbS1wYWxldHRlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBJb25pY01vZHVsZSxcbiAgICBPa29kZU5neEN1c3RvbVBhbGV0dGVNb2R1bGUsXG4gICAgQ2FsZW5kYXJNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBwcm92aWRlOiBEYXRlQWRhcHRlcixcbiAgICAgIHVzZUZhY3Rvcnk6IGFkYXB0ZXJGYWN0b3J5XG4gICAgfSlcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FsZW5kYXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2FsZW5kYXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1hcGZyZUNhbGVuZGFyTW9kdWxlIHt9XG4iXX0=