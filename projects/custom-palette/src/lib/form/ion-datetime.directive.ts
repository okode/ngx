import { Directive, OnInit, ElementRef, AfterContentChecked } from '@angular/core';

@Directive({
  selector: `ion-datetime`
})
export class IonDateTimeDirective implements OnInit, AfterContentChecked {

  private stringValue: string;

  private shadowCss = `
    .datetime-text {
      top: 30px;
      left: 16px;
      position: absolute;
      width: calc(100% - 70px);
      height: 20px;
      line-height: 20px;
    }
  `;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setShadowStyle();
  }

  ngAfterContentChecked() {
    const div = this.el.nativeElement.shadowRoot.querySelector('.datetime-text');
    if (div) { this.stringValue = div.innerHTML; }
    this.fixIonItemHasValueFloatingLabel();
  }

  private getShadow() {
    return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
  }

  private setShadowStyle() {
    this.getShadow().innerHTML += `<style>${this.shadowCss}</style>`;
  }

  private fixIonItemHasValueFloatingLabel() {
    if (this.stringValue && this.stringValue.length) {
      this.el.nativeElement.parentNode.classList.add('item-has-value');
    } else {
      this.el.nativeElement.parentNode.classList.remove('item-has-value');
    }
  }

}
