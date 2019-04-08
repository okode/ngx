import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: `ion-input`
})
export class IonInputDirective {

  constructor(private el: ElementRef) {}

}
