import { OnInit, ElementRef } from '@angular/core';
export declare class IonItemDirective implements OnInit {
    private el;
    private shadowCss;
    private floatingLabelSelector;
    private staticLabelSelector;
    constructor(el: ElementRef);
    ngOnInit(): void;
    private getShadow;
    private setShadowStyle;
}
