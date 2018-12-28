import { ModuleWithProviders } from '@angular/compiler/src/core';
import { Environment } from './environment.service';
export declare class OkodeNgxCommonModule {
    static forRoot(): ModuleWithProviders;
}
export declare function envInitializer(environment: Environment): () => Promise<void>;
