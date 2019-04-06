import { NgModule } from '@angular/core';
import { IonItemDirective } from './ion-item.directive';
import { IonInputDirective } from './ion-input.directive';
import { IonSelectDirective } from './ion-select.directive';

const DECLARATIONS = [
  IonItemDirective,
  IonInputDirective,
  IonSelectDirective
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  providers: []
})
export class OkodeNgxCustomPaletteModule {}
