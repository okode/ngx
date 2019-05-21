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
    this.elem.nativeElement.style.zIndex = '9999';
    this.elem.nativeElement.style.cursor = 'pointer';
    this.addCssStyle();
    this.createPickerContainer();
    const lang = this.detectLanguage();
    this.picker = new WindowDatePicker({
      el: this.container,
      toggleEl: this.elem.nativeElement,
      type: 'DATE',
      lang: lang
    });
    this.picker.el.addEventListener('wdp.open', () => { ScrollUtil.disableScroll(); });
    this.picker.el.addEventListener('wdp.close', () => { ScrollUtil.enableScroll(); });
    this.picker.el.addEventListener('wdp.change', (data) => {
      let date = null;
      const val = this.picker.get();
      if (val.year &&  val.month && val.day) {
        date = `${val.year}-${('0' + val.month).slice(-2)}-${('0' + val.day).slice(-2)}`;
      }
      this.onDateChange.emit(date);
      setTimeout(() => {
        this.picker.close();
      }, 200);
    });
  }

  ngOnChanges() {
    if (this.picker && this.date) {
      this.picker.set(new Date(this.date));
    }
  }

  private createPickerContainer() {
    const div = document.createElement('div');
    div.setAttribute('style', 'position: absolute; right: 0px; height: 100%; margin-top: 5px;');
    this.elem.nativeElement.parentNode.appendChild(div);
    this.container = document.createElement('div');
    div.appendChild(this.container);
  }

  private addCssStyle() {
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

const ScrollUtil = {
  disableScroll: function() {
    document.addEventListener('wheel', ScrollUtil.preventDefaultScroll, { passive: false });
    window.onwheel = ScrollUtil.preventDefaultScroll;
    window.ontouchmove  = ScrollUtil.preventDefaultScroll;
    document.onkeydown  = ScrollUtil.preventDefaultForScrollKeys;
  },
  enableScroll: function() {
    document.removeEventListener('wheel', ScrollUtil.preventDefaultScroll, false);
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
  },
  preventDefaultScroll: function(e) {
    e = e || window.event;
    e.returnValue = false;
  },
  preventDefaultForScrollKeys: function(e) {
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
    if (keys[e.keyCode]) {
      ScrollUtil.preventDefaultScroll(e);
      return false;
    }
  }
};
