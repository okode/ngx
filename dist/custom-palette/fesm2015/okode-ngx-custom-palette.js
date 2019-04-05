import { Directive, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonItemDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.componentCss = `
    ion-item[custom-palette] ion-label {
      z-index: 9999;
      padding-left: 10px;
      margin-left: 6px;
      pointer-events: none;
      color: gray !important;
    }
    ion-item[custom-palette] ion-label::first-line {
      content: ' ';
      position: absolute;
      background: white;
      box-shadow: 0px 0px 0px 10px white;
    }
    ion-item[custom-palette].item-has-value ion-label,
    ion-item[custom-palette].item-has-focus ion-label {
      transform: translateZ(0) translateY(2px) translateX(2px) scale(.8) !important;
    }
    ion-item[custom-palette] ion-input input {
      margin-left: 16px;
      margin-top: -2px;
    }
    ion-item[custom-palette] ion-select {
      padding-left: 16px;
      margin-top: -2px;
    }
    html.md ion-item[custom-palette].item-label-floating ion-label {
      margin-left: 6px;
      margin-bottom: 3px;
    }
  `;
        this.shadowCustomCss = `
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.el.nativeElement.querySelector('ion-label').setAttribute('position', 'floating');
        this.setShadowStyle(this.getShadow());
        this.setComponentStyle();
    }
    /**
     * @private
     * @return {?}
     */
    getShadow() {
        return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
    }
    /**
     * @private
     * @param {?} shadow
     * @return {?}
     */
    setShadowStyle(shadow) {
        if (shadow) {
            shadow.innerHTML += `<style>${this.shadowCustomCss}</style>`;
        }
    }
    /**
     * @private
     * @return {?}
     */
    setComponentStyle() {
        /** @type {?} */
        const tagId = this.el.nativeElement.nodeName.toLowerCase() + '-component-style';
        if (document.getElementById(tagId)) {
            return;
        }
        /** @type {?} */
        const style = document.createElement('style');
        style.type = 'text/css';
        style.id = tagId;
        style.appendChild(document.createTextNode(this.componentCss));
        document.head.appendChild(style);
    }
}
IonItemDirective.decorators = [
    { type: Directive, args: [{
                selector: `[custom-palette]`
            },] }
];
/** @nocollapse */
IonItemDirective.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class OkodeNgxCustomPaletteModule {
}
OkodeNgxCustomPaletteModule.decorators = [
    { type: NgModule, args: [{
                declarations: [IonItemDirective],
                exports: [IonItemDirective],
                providers: []
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { IonItemDirective, OkodeNgxCustomPaletteModule };

//# sourceMappingURL=okode-ngx-custom-palette.js.map