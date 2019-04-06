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