import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OkodeNgxCustomPaletteModule } from 'custom-palette'; // from local

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OkodeNgxCustomPaletteModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OkodeNgxCustomPaletteModule
  ]
})
export class SharedModule { }
