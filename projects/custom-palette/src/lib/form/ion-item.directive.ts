import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: `ion-item`
})
export class IonItemDirective implements OnInit {

  private shadowCustomCss = `
    .item-native {
      border: none;
      padding: 0px;
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
    const inputsFloatingLabel =
      this.el.nativeElement.querySelector('ion-input, ion-select, ion-textarea, ion-datetime');
    const inputsStaticLabel =
      this.el.nativeElement.querySelector('ion-checkbox, ion-toggle');
    const label =
      this.el.nativeElement.querySelector('ion-label');
    if (label && (inputsFloatingLabel || inputsStaticLabel)) {
      this.el.nativeElement.setAttribute('custom-palette', true);
      if (inputsFloatingLabel) {
        this.el.nativeElement.setAttribute('custom-palette-style', 'floating-label');
        this.el.nativeElement.querySelector('ion-label').setAttribute('position', 'floating');
      } else {
        this.el.nativeElement.setAttribute('custom-palette-style', 'static-label');
      }
      this.setShadowStyle(this.getShadow());
    }
  }

  private getShadow() {
    return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
  }

  private setShadowStyle(shadow) {
    if (shadow) { shadow.innerHTML += `<style>${this.shadowCustomCss}</style>`; }
  }

}
