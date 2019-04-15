import { Directive, ElementRef, AfterViewChecked } from '@angular/core';
import { Platform } from '@ionic/angular';

@Directive({
  selector: `ion-input`
})
export class IonInputDirective implements AfterViewChecked {

  private input;

  constructor(
    private el: ElementRef,
    private platform: Platform
  ) {}

  ngAfterViewChecked() {
    if (!this.input) {
      this.input = this.el.nativeElement.querySelector('input');
      if (this.input) {
        this.input.addEventListener('focus', () => this.fixScrollAndCaret());
      }
    }
  }

  private fixScrollAndCaret() {
    // workaroud to flix floating caret
    if (this.platform.is('ios')) {
      const val = this.el.nativeElement.value;
      this.el.nativeElement.value = val + '.';
      this.el.nativeElement.value = val;
    }
  }

}
