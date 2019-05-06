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
const ɵ0 = adapterFactory;
export class MapfreCalendarModule {
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
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2NhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztXQVN2RCxjQUFjO0FBTWhDLE1BQU0sT0FBTyxvQkFBb0I7OztZQWJoQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxXQUFXO29CQUNYLGNBQWMsQ0FBQyxPQUFPLENBQUM7d0JBQ3JCLE9BQU8sRUFBRSxXQUFXO3dCQUNwQixVQUFVLElBQWdCO3FCQUMzQixDQUFDO2lCQUNIO2dCQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUsIERhdGVBZGFwdGVyIH0gZnJvbSAnYW5ndWxhci1jYWxlbmRhcic7XG5pbXBvcnQgeyBhZGFwdGVyRmFjdG9yeSB9IGZyb20gJ2FuZ3VsYXItY2FsZW5kYXIvZGF0ZS1hZGFwdGVycy9kYXRlLWZucyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgQ2FsZW5kYXJNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBwcm92aWRlOiBEYXRlQWRhcHRlcixcbiAgICAgIHVzZUZhY3Rvcnk6IGFkYXB0ZXJGYWN0b3J5XG4gICAgfSlcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbQ2FsZW5kYXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQ2FsZW5kYXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE1hcGZyZUNhbGVuZGFyTW9kdWxlIHt9XG4iXX0=