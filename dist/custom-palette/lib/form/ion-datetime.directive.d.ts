import { OnInit, ElementRef } from '@angular/core';
export declare class IonDateTimeDirective implements OnInit {
    private el;
    private shadowCustomCss;
    constructor(el: ElementRef);
    ngOnInit(): void;
    private getShadow;
    private setShadowStyle;
}
