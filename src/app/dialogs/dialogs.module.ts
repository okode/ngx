import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DialogsPage } from './dialogs.page';
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
    RouterModule.forChild([{ path: '', component: DialogsPage }])
  ],
  exports: [],
  declarations: [DialogsPage]
})
export class DialogsPageModule {}
