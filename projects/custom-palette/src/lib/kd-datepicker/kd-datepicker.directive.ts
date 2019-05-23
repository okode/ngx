import { Directive, ElementRef, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { KdDatepickerCssStyle } from './kd-datepicker.style';
import './kd-datepicker.lib';

declare const WindowDatePicker;

@Directive({
  selector: '[kdDatepicker]'
})
export class KdDatepickerDirective implements OnInit, OnChanges {

  private picker;
  private container;
  @Input() date;
  @Output() onDateChange = new EventEmitter();

  constructor(private elem: ElementRef) {}

  ngOnInit() {
    this.setCssStyle();
    this.createPickerContainer();
    this.initPicker();
  }

  ngOnChanges() {
    if (this.picker && this.date) {
      this.picker.set(new Date(this.date));
    }
  }

  private initPicker() {
    const lang = this.detectLanguage();
    this.picker = new WindowDatePicker({
      el: this.container,
      toggleEl: this.elem.nativeElement,
      type: 'DATE',
      lang: lang
    });
    this.picker.el.addEventListener('wdp.open', () => {});
    this.picker.el.addEventListener('wdp.close', () => {});
    this.picker.el.addEventListener('wdp.change', (data) => {
      let date = null;
      const val = this.picker.get();
      if (val.year && val.month && val.day) {
        date = `${val.year}-${('0' + val.month).slice(-2)}-${('0' + val.day).slice(-2)}`;
      }
      this.onDateChange.emit(date);
      setTimeout(() => { this.picker.close(); }, 200);
    });
  }

  private createPickerContainer() {
    const div = document.createElement('div');
    div.setAttribute('style', 'z-index:9999999; position:absolute; right:0px; margin:75px 16px;');
    if (this.elem.nativeElement.closest('ion-item')) {
      this.elem.nativeElement.closest('ion-item').insertAdjacentElement('beforebegin', div);
    } else {
      this.elem.nativeElement.insertAdjacentElement('beforebegin', div);
    }
    this.container = document.createElement('div');
    div.appendChild(this.container);
  }

  private setCssStyle() {
    this.elem.nativeElement.style.zIndex = '9999';
    this.elem.nativeElement.style.cursor = 'pointer';
    if (document.getElementById('kdDatepickerStyleTag')) { return; }
    const style = document.createElement('style');
    style.id = 'kdDatepickerStyleTag';
    style.appendChild(document.createTextNode(KdDatepickerCssStyle));
    document.body.appendChild(style);
  }

  private detectLanguage() {
    let lang = window.navigator.language || navigator.language;
    if (lang) { lang = lang.split('-')[0]; }
    switch (lang) {
      case 'es': return 'es';
      case 'ca': return 'ca';
      default:   return 'en';
    }
  }

}
