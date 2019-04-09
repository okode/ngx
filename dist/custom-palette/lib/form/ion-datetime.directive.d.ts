import { OnInit, ElementRef, AfterContentChecked } from '@angular/core';
export declare class IonDateTimeDirective implements OnInit, AfterContentChecked {
    private el;
    ngModel: string;
    private stringValue;
    private shadowCustomCss;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    private getShadow;
    private setShadowStyle;
    private fixIonItemHasValueFloatingLabel;
}
