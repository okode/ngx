import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Environment } from './environment.service';

// @dynamic
@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class OkodeNgxCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: OkodeNgxCommonModule,
      providers: [
        Environment,
        { provide: APP_INITIALIZER, useFactory: envInitializer, deps: [Environment], multi: true },
      ]
    };
  }
}

export function envInitializer(environment: Environment) {
  return async () => {
    await environment.ready();
  };
}
