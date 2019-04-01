import { Navigator } from './navigator.service';
import { Platform, NavController } from '@ionic/angular';
export interface OnHardwareBackButton {
    kdOnHardwareBackButton(): any;
}
export declare class HardwareBackButton {
    private nav;
    private navController;
    private platform;
    private filterCondition;
    private intialized;
    constructor(nav: Navigator, navController: NavController, platform: Platform);
    enable(condition?: () => boolean): void;
    disable(): void;
    private init;
    private getActiveViewRefInstance;
}
