import { Directive, ElementRef, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonHeaderDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.el.nativeElement.setAttribute('custom-palette', true);
    }
}
IonHeaderDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-header`
            },] }
];
/** @nocollapse */
IonHeaderDirective.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonContentDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.el.nativeElement.setAttribute('custom-palette', true);
    }
}
IonContentDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-content`
            },] }
];
/** @nocollapse */
IonContentDirective.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonFooterDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.el.nativeElement.setAttribute('custom-palette', true);
    }
}
IonFooterDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-footer`
            },] }
];
/** @nocollapse */
IonFooterDirective.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonItemDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.shadowCustomCss = `
    :host(.ion-focused) .item-native {
      background: transparent;
    }
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const e = this.el.nativeElement;
        /** @type {?} */
        const inputFloatingLabel = e.querySelector('ion-input, ion-select, ion-textarea, ion-datetime');
        /** @type {?} */
        const inputStaticLabel = e.querySelector('ion-checkbox, ion-toggle');
        /** @type {?} */
        const label = e.querySelector('ion-label');
        if (label && (inputFloatingLabel || inputStaticLabel)) {
            e.setAttribute('custom-palette', true);
            if (inputFloatingLabel) {
                e.setAttribute('custom-palette-style', 'floating-label');
                e.querySelector('ion-label').setAttribute('position', 'floating');
            }
            else {
                e.setAttribute('custom-palette-style', 'static-label');
            }
            // has icon?
            if (e.querySelector('ion-icon')) {
                e.classList.add('item-has-icon');
            }
            this.setShadowStyle();
        }
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
     * @return {?}
     */
    setShadowStyle() {
        this.getShadow().innerHTML += `<style>${this.shadowCustomCss}</style>`;
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonInputDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonSelectDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.shadowCustomCss = `
    .select-icon-inner {
      left: -15px;
      margin-top: -4px;
      border-top: 8px solid;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      opacity: .33;
    }
    .select-text {
      min-height: 24px;
      padding-right: 20px;
      margin-bottom: 7px;
    }
  `;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setShadowStyle();
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
     * @return {?}
     */
    setShadowStyle() {
        this.getShadow().innerHTML += `<style>${this.shadowCustomCss}</style>`;
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonDateTimeDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.shadowCustomCss = `
    .datetime-text {
      top: 29px;
      left: 16px;
      position: absolute;
      width: calc(100% - 70px);
    }
  `;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setShadowStyle();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.currentValue = changes.ngModel.currentValue;
        this.fixIonItemHasValueFloatingLabel();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.fixIonItemHasValueFloatingLabel();
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
     * @return {?}
     */
    setShadowStyle() {
        this.getShadow().innerHTML += `<style>${this.shadowCustomCss}</style>`;
    }
    /**
     * @private
     * @return {?}
     */
    fixIonItemHasValueFloatingLabel() {
        if (this.currentValue) {
            this.el.nativeElement.parentNode.classList.add('item-has-value');
        }
        else {
            this.el.nativeElement.parentNode.classList.remove('item-has-value');
        }
    }
}
IonDateTimeDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-datetime`
            },] }
];
/** @nocollapse */
IonDateTimeDirective.ctorParameters = () => [
    { type: ElementRef }
];
IonDateTimeDirective.propDecorators = {
    ngModel: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class IonRadioGroupDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.el.nativeElement.setAttribute('custom-palette', true);
        this.el.nativeElement.setAttribute('custom-palette-style', 'static-label');
    }
}
IonRadioGroupDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-radio-group`
            },] }
];
/** @nocollapse */
IonRadioGroupDirective.ctorParameters = () => [
    { type: ElementRef }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DECLARATIONS = [
    IonHeaderDirective,
    IonContentDirective,
    IonFooterDirective,
    IonItemDirective,
    IonInputDirective,
    IonSelectDirective,
    IonDateTimeDirective,
    IonRadioGroupDirective
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { OkodeNgxCustomPaletteModule, IonDateTimeDirective as ɵg, IonInputDirective as ɵe, IonItemDirective as ɵd, IonRadioGroupDirective as ɵh, IonSelectDirective as ɵf, IonContentDirective as ɵb, IonFooterDirective as ɵc, IonHeaderDirective as ɵa };

//# sourceMappingURL=okode-ngx-custom-palette.js.map