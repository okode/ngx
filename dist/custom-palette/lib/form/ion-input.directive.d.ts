import { ElementRef, AfterViewChecked } from '@angular/core';
export declare class IonInputDirective implements AfterViewChecked {
    private el;
    private input;
    constructor(el: ElementRef);
    ngAfterViewChecked(): void;
}
