import { OnInit, ElementRef, OnChanges } from '@angular/core';
export declare class IonToggleDirective implements OnInit, OnChanges {
    private el;
    enabledText: string;
    disabledText: string;
    private shadowCss;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    private getShadow;
    private setShadowStyle;
}
