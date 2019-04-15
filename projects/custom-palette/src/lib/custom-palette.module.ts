import { NgModule } from '@angular/core';
import { IonHeaderDirective } from './layout/ion-header.directive';
import { IonContentDirective } from './layout/ion-content.directive';
import { IonFooterDirective } from './layout/ion-footer.directive';
import { IonItemDirective } from './form/ion-item.directive';
import { IonInputDirective } from './form/ion-input.directive';
import { IonTextAreaDirective } from './form/ion-textarea.directive';
import { IonSelectDirective } from './form/ion-select.directive';
import { IonDateTimeDirective } from './form/ion-datetime.directive';
import { IonRadioGroupDirective } from './form/ion-radio-group.directive';

const DECLARATIONS = [
  IonHeaderDirective,
  IonContentDirective,
  IonFooterDirective,
  IonItemDirective,
  IonInputDirective,
  IonTextAreaDirective,
  IonSelectDirective,
  IonDateTimeDirective,
  IonRadioGroupDirective
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  providers: []
})
export class OkodeNgxCustomPaletteModule {}
