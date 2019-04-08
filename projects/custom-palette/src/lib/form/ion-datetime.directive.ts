import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: `ion-datetime`
})
export class IonDateTimeDirective implements OnInit {

  private shadowCustomCss = `
    .datetime-text {
      margin-top: -28px;
      position: absolute;
    }
  `;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setShadowStyle(this.getShadow());
  }

  private getShadow() {
    return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
  }

  private setShadowStyle(shadow) {
    if (shadow) { shadow.innerHTML += `<style>${this.shadowCustomCss}</style>`; }
  }

}
