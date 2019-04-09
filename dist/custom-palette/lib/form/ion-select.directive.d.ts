import { OnInit, ElementRef } from '@angular/core';
export declare class IonSelectDirective implements OnInit {
    private el;
    private shadowCss;
    constructor(el: ElementRef);
    ngOnInit(): void;
    private getShadow;
    private setShadowStyle;
}
