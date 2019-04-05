import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { CommonModule } from '@angular/common';
import { IonItemDirective } from './ion-item.directive';

const DECLARATIONS = [
  // Directives
  IonItemDirective,
];

// @dynamic
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
