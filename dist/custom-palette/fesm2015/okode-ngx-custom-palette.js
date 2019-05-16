import { Platform } from '@ionic/angular';
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
        this.shadowCss = `
    :host(.ion-focused) .item-native {
      background: transparent;
    }
    .item-native {
      border: none;
      padding: 0px;
      background: transparent;
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
        this.floatingLabelSelector = 'ion-input, ion-select, select, ion-textarea, ion-datetime';
        this.staticLabelSelector = 'ion-checkbox, ion-toggle';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const e = this.el.nativeElement;
        /** @type {?} */
        const inputFloatingLabel = e.querySelector(this.floatingLabelSelector);
        /** @type {?} */
        const inputStaticLabel = e.querySelector(this.staticLabelSelector);
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
        this.getShadow().innerHTML += `<style>${this.shadowCss}</style>`;
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
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (!this.input) {
            this.input = this.el.nativeElement.querySelector('input');
            if (this.input) {
                this.input.addEventListener('focus', (/**
                 * @return {?}
                 */
                () => { }));
            }
        }
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
class IonTextAreaDirective {
    /**
     * @param {?} el
     * @param {?} platform
     */
    constructor(el, platform) {
        this.el = el;
        this.platform = platform;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (!this.input) {
            this.input = this.el.nativeElement.querySelector('textarea');
            if (this.input) {
                this.input.addEventListener('focus', (/**
                 * @return {?}
                 */
                () => this.fixScrollAndCaret()));
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    fixScrollAndCaret() {
        // workaroud to flix floating caret
        if (this.platform.is('ios')) {
            /** @type {?} */
            const val = this.el.nativeElement.value;
            this.el.nativeElement.value = val + '.';
            this.el.nativeElement.value = val;
        }
    }
}
IonTextAreaDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-textarea`
            },] }
];
/** @nocollapse */
IonTextAreaDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Platform }
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
        this.shadowCss = `
    .select-icon-inner {
      left: -15px;
      margin-top: -4px;
      border-top: 8px solid;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      opacity: .5;
    }
    .select-text {
      min-height: 24px;
      padding-right: 30px;
      margin-bottom: 5px;
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
        this.getShadow().innerHTML += `<style>${this.shadowCss}</style>`;
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
        this.shadowCss = `
    .datetime-text {
      top: 30px;
      left: 16px;
      position: absolute;
      width: calc(100% - 70px);
      height: 20px;
      line-height: 20px;
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
     * @return {?}
     */
    ngAfterContentChecked() {
        /** @type {?} */
        const div = this.el.nativeElement.shadowRoot.querySelector('.datetime-text');
        if (div) {
            this.stringValue = div.innerHTML;
        }
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
        this.getShadow().innerHTML += `<style>${this.shadowCss}</style>`;
    }
    /**
     * @private
     * @return {?}
     */
    fixIonItemHasValueFloatingLabel() {
        if (this.stringValue && this.stringValue.length) {
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
class IonToggleDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.enabledText = '';
        this.disabledText = '';
        this.shadowCss = `
    :host {
      width: 80px;
    }
    :host(.toggle-checked) .toggle-inner {
      -webkit-transform: translate3d(48px, 0, 0);
      transform: translate3d(48px, 0, 0);
    }
    :host .toggle-icon:after {
      line-height: 33px;
      color: white;
      text-transform: uppercase;
      font-weight: 800;
      font-size: 13px;
      width: 50px;
      display: inline-block;
      text-align: center;
    }
    :host(.toggle-checked) .toggle-icon:after {}
    :host(:not(.toggle-checked)) .toggle-icon:after {
      position: absolute;
      margin-left: 28px;
    }
    :host(:not(.toggle-checked)) .toggle-icon {
      background-color: #919191;
    }
    :host(:not(.toggle-checked)) .toggle-icon:before {
      background: #919191;
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
        if (changes && (changes.enabledText || changes.disabledText)) {
            this.getShadow().innerHTML += `<style>
        :host(.toggle-checked) .toggle-icon:after { content: '${this.enabledText}'; }
        :host(:not(.toggle-checked)) .toggle-icon:after { content: '${this.disabledText}'; }
      </style>`;
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
        this.getShadow().innerHTML += `<style>${this.shadowCss}</style>`;
    }
}
IonToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-toggle[custom-palette-toggle][mode='ios']`
            },] }
];
/** @nocollapse */
IonToggleDirective.ctorParameters = () => [
    { type: ElementRef }
];
IonToggleDirective.propDecorators = {
    enabledText: [{ type: Input }],
    disabledText: [{ type: Input }]
};

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
    IonTextAreaDirective,
    IonSelectDirective,
    IonDateTimeDirective,
    IonRadioGroupDirective,
    IonToggleDirective
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

export { OkodeNgxCustomPaletteModule, IonDateTimeDirective as ɵh, IonInputDirective as ɵe, IonItemDirective as ɵd, IonRadioGroupDirective as ɵi, IonSelectDirective as ɵg, IonTextAreaDirective as ɵf, IonToggleDirective as ɵj, IonContentDirective as ɵb, IonFooterDirective as ɵc, IonHeaderDirective as ɵa };

//# sourceMappingURL=okode-ngx-custom-palette.js.map