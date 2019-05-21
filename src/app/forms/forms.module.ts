import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsPage } from './forms.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OkodeNgxCustomPaletteModule, OkodeNgxDatepickerModule } from 'custom-palette'; // from local


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OkodeNgxCustomPaletteModule,
    OkodeNgxDatepickerModule,
    RouterModule.forChild([{ path: '', component: FormsPage }])
  ],
  exports: [],
  declarations: [FormsPage]
})
export class FormsPageModule {}
