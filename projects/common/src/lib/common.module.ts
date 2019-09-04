import { NgModule, APP_INITIALIZER, ErrorHandler } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Environment } from './environment.service';
import { Navigator } from './navigator.service';
import { HardwareBackButton } from './hardware-back-button.service';
import { SentryErrorHandler } from './sentry-error-handler.service';

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
        Navigator,
        HardwareBackButton,
        {
          provide: APP_INITIALIZER,
          useFactory: moduleInitializer,
          deps: [Environment],
          multi: true
        },
        { provide: ErrorHandler, useClass: SentryErrorHandler }
      ]
    };
  }
}

export function moduleInitializer(environment: Environment) {
  return async () => {
    await environment.ready();
  };
}
