import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CommonModule } from '@angular/common';
import { IonItemDirective } from './directives/ion-item.directive';

// @dynamic
const DECLARATIONS = [
  // Directives
  IonItemDirective,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  providers: [],
  imports: [CommonModule]
})
export class OkodeNgxCustomPaletteModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: OkodeNgxCustomPaletteModule,
      providers: []
    };
  }
}
