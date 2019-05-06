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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2NhbGVuZGFyL2NhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztTQVUzQyxjQUFjO0FBUmhDO0lBQUE7SUFjbUMsQ0FBQzs7Z0JBZG5DLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsMkJBQTJCO3dCQUMzQixjQUFjLENBQUMsT0FBTyxDQUFDOzRCQUNyQixPQUFPLEVBQUUsV0FBVzs0QkFDcEIsVUFBVSxJQUFnQjt5QkFDM0IsQ0FBQztxQkFDSDtvQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7aUJBQzdCOztJQUNrQywyQkFBQztDQUFBLEFBZHBDLElBY29DO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FsZW5kYXJNb2R1bGUsIERhdGVBZGFwdGVyIH0gZnJvbSAnYW5ndWxhci1jYWxlbmRhcic7XG5pbXBvcnQgeyBhZGFwdGVyRmFjdG9yeSB9IGZyb20gJ2FuZ3VsYXItY2FsZW5kYXIvZGF0ZS1hZGFwdGVycy9kYXRlLWZucyc7XG5pbXBvcnQgeyBPa29kZU5neEN1c3RvbVBhbGV0dGVNb2R1bGUgfSBmcm9tICdjdXN0b20tcGFsZXR0ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSW9uaWNNb2R1bGUsXG4gICAgT2tvZGVOZ3hDdXN0b21QYWxldHRlTW9kdWxlLFxuICAgIENhbGVuZGFyTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsXG4gICAgICB1c2VGYWN0b3J5OiBhZGFwdGVyRmFjdG9yeVxuICAgIH0pXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0NhbGVuZGFyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0NhbGVuZGFyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBNYXBmcmVDYWxlbmRhck1vZHVsZSB7fVxuIl19