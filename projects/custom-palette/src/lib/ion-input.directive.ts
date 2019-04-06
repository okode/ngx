import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: `ion-input`
})
export class IonInputDirective {

  private shadowCustomCss = ``;

  constructor(private el: ElementRef) {}

}
