import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: `ion-select`
})
export class IonSelectDirective implements OnInit {

  private shadowCss = `
    .select-icon-inner {
      left: -15px;
      margin-top: -4px;
      border-top: 8px solid;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      opacity: .33;
    }
    .select-text {
      min-height: 24px;
      padding-right: 30px;
      margin-bottom: 7px;
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
    this.getShadow().innerHTML += `<style>${this.shadowCss}</style>`;
  }

}
