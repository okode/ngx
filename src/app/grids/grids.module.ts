import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GridsPage } from './grids.page';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { OkodeNgxCustomPaletteModule } from 'custom-palette'; // from local

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OkodeNgxCustomPaletteModule,
    RouterModule.forChild([{ path: '', component: GridsPage }])
  ],
  exports: [],
  declarations: [GridsPage]
})
export class GridsPageModule {}
