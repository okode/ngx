import { Directive, OnInit, ElementRef, Input, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';

@Directive({
  selector: `ion-datetime`
})
export class IonDateTimeDirective implements OnInit, OnChanges, AfterContentChecked {

  @Input() ngModel: string;

  private currentValue: string;

  private shadowCustomCss = `
    .datetime-text {
      top: 28px;
      left: 16px;
      position: absolute;
      width: calc(100% - 70px);
    }
  `;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setShadowStyle();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.currentValue = changes.ngModel.currentValue;
    this.fixIonItemHasValueFloatingLabel();
  }

  ngAfterContentChecked() {
    this.fixIonItemHasValueFloatingLabel();
  }

  private getShadow() {
    return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
  }

  private setShadowStyle() {
    this.getShadow().innerHTML += `<style>${this.shadowCustomCss}</style>`;
  }

  private fixIonItemHasValueFloatingLabel() {
    if (this.currentValue) {
      this.el.nativeElement.parentNode.classList.add('item-has-value');
    } else {
      this.el.nativeElement.parentNode.classList.remove('item-has-value');
    }
  }

}
