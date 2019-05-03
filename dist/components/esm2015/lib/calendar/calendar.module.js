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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9jYWxlbmRhci9jYWxlbmRhci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDekUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7V0FVM0MsY0FBYztBQU1oQyxNQUFNLE9BQU8sb0JBQW9COzs7WUFkaEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCwyQkFBMkI7b0JBQzNCLGNBQWMsQ0FBQyxPQUFPLENBQUM7d0JBQ3JCLE9BQU8sRUFBRSxXQUFXO3dCQUNwQixVQUFVLElBQWdCO3FCQUMzQixDQUFDO2lCQUNIO2dCQUNELFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQzthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUsIERhdGVBZGFwdGVyIH0gZnJvbSAnYW5ndWxhci1jYWxlbmRhcic7XG5pbXBvcnQgeyBhZGFwdGVyRmFjdG9yeSB9IGZyb20gJ2FuZ3VsYXItY2FsZW5kYXIvZGF0ZS1hZGFwdGVycy9kYXRlLWZucyc7XG5pbXBvcnQgeyBPa29kZU5neEN1c3RvbVBhbGV0dGVNb2R1bGUgfSBmcm9tICdjdXN0b20tcGFsZXR0ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgT2tvZGVOZ3hDdXN0b21QYWxldHRlTW9kdWxlLFxuICAgIENhbGVuZGFyTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsXG4gICAgICB1c2VGYWN0b3J5OiBhZGFwdGVyRmFjdG9yeVxuICAgIH0pXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NhbGVuZGFyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NhbGVuZGFyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNYXBmcmVDYWxlbmRhck1vZHVsZSB7fVxuIl19