import { Directive, OnInit, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: `ion-toggle[custom-palette-toggle][mode='ios']`
})
export class IonToggleDirective implements OnInit, OnChanges {

  @Input() enabledText = '';
  @Input() disabledText = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setShadowStyle();
  }

  ngOnChanges(changes) {
    if (changes && (changes.enabledText || changes.disabledText)) {
      this.setShadowStyle();
    }
  }

  private setShadowStyle() {
    try {
      const shadow = this.el.nativeElement.shadowRoot ||
                     this.el.nativeElement.attachShadow({ mode: 'open' });
      if (shadow) { shadow.innerHTML += `
        <style>
          :host {
            width: 80px;
          }
          :host(.toggle-checked) .toggle-inner {
            -webkit-transform: translate3d(48px, 0, 0);
            transform: translate3d(48px, 0, 0);
          }
          :host .toggle-icon:after {
            content: ' ';
            line-height: 33px;
            color: white;
            text-transform: uppercase;
            font-weight: 800;
            font-size: 13px;
            width: 50px;
            display: inline-block;
            text-align: center;
          }
          :host(.toggle-checked) .toggle-icon:after {
            content: '${this.enabledText}';
          }
          :host(:not(.toggle-checked)) .toggle-icon:after {
            content: '${this.disabledText}';
            position: absolute;
            margin-left: 28px;
          }
          :host(:not(.toggle-checked)) .toggle-icon {
            background-color: #919191;
          }
          :host(:not(.toggle-checked)) .toggle-icon:before {
            background: #919191;
          }
        </style>
      `; }
    } catch (e) {}
  }

}
