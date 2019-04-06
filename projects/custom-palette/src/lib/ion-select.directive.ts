import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: `ion-select`
})
export class IonSelectDirective implements OnInit {

  private shadowCustomCss = `
    .select-icon-inner {
      left: -5px;
      margin-top: -5px;
      border-top: 5px solid;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      opacity: .33;
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
