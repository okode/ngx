import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CalendarPage } from './calendar.page';
import { MapfreCalendarModule } from 'components';
import { OkodeNgxCustomPaletteModule } from 'custom-palette';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MapfreCalendarModule,
    OkodeNgxCustomPaletteModule,
    RouterModule.forChild([{ path: '', component: CalendarPage }])
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
