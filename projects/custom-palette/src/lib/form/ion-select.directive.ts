import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: `ion-select`
})
export class IonSelectDirective implements OnInit {

  private shadowCustomCss = `
    .select-icon-inner {
      left: -15px;
      margin-top: -2px;
      border-top: 7px solid;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      opacity: .33;
    }
    .select-text {
      min-height: 30px;
      padding-right: 20px;
    }
  `;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setShadowStyle();
  }

  private getShadow() {
    return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
  }

  private setShadowStyle() {
    this.getShadow().innerHTML += `<style>${this.shadowCustomCss}</style>`;
  }

}
