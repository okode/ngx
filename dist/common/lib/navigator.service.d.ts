import { NavController, Config } from '@ionic/angular';
import { Animation } from '@ionic/core';
export declare class Navigator {
    private navCtrl;
    private config;
    private params;
    private animation;
    constructor(navCtrl: NavController, config: Config);
    getParams(): any;
    push(url: string, params?: {}, animation?: 'default' | 'push' | 'modal' | 'fade'): Promise<boolean>;
    pop(url?: string, params?: {}): Promise<boolean>;
    popToRoot(): Promise<boolean>;
    setRoot(url: string, params?: {}): Promise<boolean>;
    getViews(): any[];
    private getPreviousPageUrl;
    private getRootPageUrl;
    private setAnimationConfig;
}
export declare function fadeAnimation(AnimationC: Animation, _: HTMLElement, opts: any): Promise<any>;
