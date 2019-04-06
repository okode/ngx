import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: `[custom-palette]`
})
export class IonItemDirective implements OnInit {

  private shadowCustomCss = `
    .item-native {
      border: none;
      padding: 0px;
    }
    .item-native:after {
      content: ' ';
      position: absolute;
      z-index: 1;
      left: 0px;
      bottom: -10px;
      height: 54px;
      width: calc(100% - 2px);
      border: 1px solid #ddd;
      margin-top: 20px;
      margin-bottom: 10px;
      border-radius: 3px;
    }
    .item-native .item-inner {
      margin-bottom: 8px;
      border: 0px;
    }
    .item-highlight {
      display: none !important;
    }
  `;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.querySelector('ion-label').setAttribute('position', 'floating');
    this.setShadowStyle(this.getShadow());
  }

  private getShadow() {
    return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
  }

  private setShadowStyle(shadow) {
    if (shadow) { shadow.innerHTML += `<style>${this.shadowCustomCss}</style>`; }
  }

}
