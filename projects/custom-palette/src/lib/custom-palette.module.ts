import { NgModule } from '@angular/core';
import { IonItemDirective } from './ion-item.directive';
import { IonInputDirective } from './ion-input.directive';
import { IonSelectDirective } from './ion-select.directive';
import { IonDateTimeDirective } from './ion-datetime.directive';

const DECLARATIONS = [
  IonItemDirective,
  IonInputDirective,
  IonSelectDirective,
  IonDateTimeDirective
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  providers: []
})
export class OkodeNgxCustomPaletteModule {}
