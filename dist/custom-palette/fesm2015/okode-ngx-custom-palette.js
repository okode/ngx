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
    .item-native .item-inner {
      border: 0px;
      padding: 0px;
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
        /** @type {?} */
        const inputSelector = 'ion-input, ion-select, ion-textarea, ion-datetime';
        /** @type {?} */
        const input = this.el.nativeElement.querySelector(inputSelector);
        if (input && this.el.nativeElement.querySelector('ion-label')) {
            this.el.nativeElement.querySelector('ion-label').setAttribute('position', 'floating');
        }
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
                selector: `ion-item`
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
class IonInputDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.shadowCustomCss = ``;
    }
}
IonInputDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-input`
            },] }
];
/** @nocollapse */
IonInputDirective.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonSelectDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.shadowCustomCss = `
    .select-icon-inner {
      left: -5px;
      margin-top: -5px;
      border-top: 5px solid;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      opacity: .33;
    }
  `;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
IonSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-select`
            },] }
];
/** @nocollapse */
IonSelectDirective.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DECLARATIONS = [
    IonItemDirective,
    IonInputDirective,
    IonSelectDirective
];
class OkodeNgxCustomPaletteModule {
}
OkodeNgxCustomPaletteModule.decorators = [
    { type: NgModule, args: [{
                declarations: DECLARATIONS,
                exports: DECLARATIONS,
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

export { OkodeNgxCustomPaletteModule, IonInputDirective as ɵb, IonItemDirective as ɵa, IonSelectDirective as ɵc };

//# sourceMappingURL=okode-ngx-custom-palette.js.map