import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Environment } from './environment.service';
import { HardwareBackButton } from './hardware-back-button.service';
export declare class OkodeNgxCommonModule {
    static forRoot(): ModuleWithProviders;
}
export declare function moduleInitializer(environment: Environment, hardwareBackButton: HardwareBackButton): () => Promise<void>;
