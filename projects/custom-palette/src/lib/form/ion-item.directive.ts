import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: `ion-item`
})
export class IonItemDirective implements OnInit {

  private shadowCss = `
    :host(.ion-focused) .item-native {
      background: transparent;
    }
    .item-native {
      border: none;
      padding: 0px;
      background: transparent;
    }
    .item-native .item-inner {
      border: 0px;
      padding: 0px;
      min-height: 68px;
    }
    .item-highlight {
      display: none !important;
    }
  `;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const e = this.el.nativeElement;
    const inputFloatingLabel = e.querySelector('ion-input, ion-select, ion-textarea, ion-datetime');
    const inputStaticLabel = e.querySelector('ion-checkbox, ion-toggle');
    const label = e.querySelector('ion-label');
    if (label && (inputFloatingLabel || inputStaticLabel)) {
      e.setAttribute('custom-palette', true);
      if (inputFloatingLabel) {
        e.setAttribute('custom-palette-style', 'floating-label');
        e.querySelector('ion-label').setAttribute('position', 'floating');
      } else {
        e.setAttribute('custom-palette-style', 'static-label');
      }
      // has icon?
      if (e.querySelector('ion-icon')) { e.classList.add('item-has-icon'); }
      this.setShadowStyle();
    }
  }

  private getShadow() {
    return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
  }

  private setShadowStyle() {
    this.getShadow().innerHTML += `<style>${this.shadowCss}</style>`;
  }

}
