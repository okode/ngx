import { OnInit, ElementRef, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';
export declare class IonDateTimeDirective implements OnInit, OnChanges, AfterContentChecked {
    private el;
    ngModel: string;
    private currentValue;
    private shadowCustomCss;
    constructor(el: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentChecked(): void;
    private getShadow;
    private setShadowStyle;
    private fixIonItemHasValueFloatingLabel;
}
