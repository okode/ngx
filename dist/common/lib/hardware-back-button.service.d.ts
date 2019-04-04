import { Navigator } from './navigator.service';
import { Platform, NavController } from '@ionic/angular';
export interface OnHardwareBackButton {
    kdOnHardwareBackButton(): any;
}
export declare class HardwareBackButton {
    private navCtrl;
    private nav;
    private platform;
    private filterCondition;
    private intialized;
    constructor(navCtrl: NavController, nav: Navigator, platform: Platform);
    enable(condition?: () => boolean): void;
    disable(): void;
    private init;
    private getActiveViewRefInstance;
}
