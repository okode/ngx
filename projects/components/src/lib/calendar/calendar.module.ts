import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalendarComponent } from './calendar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { OkodeNgxCustomPaletteModule } from 'custom-palette';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OkodeNgxCustomPaletteModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  declarations: [CalendarComponent],
  exports: [CalendarComponent]
})
export class MapfreCalendarModule {}
