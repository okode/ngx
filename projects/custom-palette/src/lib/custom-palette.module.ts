import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';

// @dynamic
@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class OkodeNgxCustomPaletteModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: OkodeNgxCustomPaletteModule,
      providers: []
    };
  }
}
