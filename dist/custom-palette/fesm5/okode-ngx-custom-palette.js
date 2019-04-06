import { Directive, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonItemDirective = /** @class */ (function () {
    function IonItemDirective(el) {
        this.el = el;
        this.shadowCustomCss = "\n    .item-native {\n      border: none;\n      padding: 0px;\n    }\n    .item-native .item-inner {\n      border: 0px;\n      padding: 0px;\n      min-height: 68px;\n    }\n    .item-highlight {\n      display: none !important;\n    }\n  ";
    }
    /**
     * @return {?}
     */
    IonItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var inputSelector = 'ion-input, ion-select, ion-textarea, ion-datetime';
        /** @type {?} */
        var input = this.el.nativeElement.querySelector(inputSelector);
        if (input && this.el.nativeElement.querySelector('ion-label')) {
            this.el.nativeElement.setAttribute('custom-palette', 'floating-label');
            this.el.nativeElement.querySelector('ion-label').setAttribute('position', 'floating');
            this.setShadowStyle(this.getShadow());
        }
    };
    /**
     * @private
     * @return {?}
     */
    IonItemDirective.prototype.getShadow = /**
     * @private
     * @return {?}
     */
    function () {
        return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
    };
    /**
     * @private
     * @param {?} shadow
     * @return {?}
     */
    IonItemDirective.prototype.setShadowStyle = /**
     * @private
     * @param {?} shadow
     * @return {?}
     */
    function (shadow) {
        if (shadow) {
            shadow.innerHTML += "<style>" + this.shadowCustomCss + "</style>";
        }
    };
    IonItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: "ion-item"
                },] }
    ];
    /** @nocollapse */
    IonItemDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return IonItemDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonInputDirective = /** @class */ (function () {
    function IonInputDirective(el) {
        this.el = el;
        this.shadowCustomCss = "";
    }
    IonInputDirective.decorators = [
        { type: Directive, args: [{
                    selector: "ion-input"
                },] }
    ];
    /** @nocollapse */
    IonInputDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return IonInputDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonSelectDirective = /** @class */ (function () {
    function IonSelectDirective(el) {
        this.el = el;
        this.shadowCustomCss = "\n    .select-icon-inner {\n      left: -7px;\n      margin-top: -2px;\n      border-top: 6px solid;\n      border-right: 5px solid transparent;\n      border-left: 5px solid transparent;\n      opacity: .33;\n    }\n    .select-text {\n      min-height: 30px;\n    }\n  ";
    }
    /**
     * @return {?}
     */
    IonSelectDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setShadowStyle(this.getShadow());
    };
    /**
     * @private
     * @return {?}
     */
    IonSelectDirective.prototype.getShadow = /**
     * @private
     * @return {?}
     */
    function () {
        return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
    };
    /**
     * @private
     * @param {?} shadow
     * @return {?}
     */
    IonSelectDirective.prototype.setShadowStyle = /**
     * @private
     * @param {?} shadow
     * @return {?}
     */
    function (shadow) {
        if (shadow) {
            shadow.innerHTML += "<style>" + this.shadowCustomCss + "</style>";
        }
    };
    IonSelectDirective.decorators = [
        { type: Directive, args: [{
                    selector: "ion-select"
                },] }
    ];
    /** @nocollapse */
    IonSelectDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return IonSelectDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonDateTimeDirective = /** @class */ (function () {
    function IonDateTimeDirective(el) {
        this.el = el;
        this.shadowCustomCss = "\n    .datetime-text {\n      margin-top: -28px;\n      position: absolute;\n    }\n  ";
    }
    /**
     * @return {?}
     */
    IonDateTimeDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setShadowStyle(this.getShadow());
    };
    /**
     * @private
     * @return {?}
     */
    IonDateTimeDirective.prototype.getShadow = /**
     * @private
     * @return {?}
     */
    function () {
        return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
    };
    /**
     * @private
     * @param {?} shadow
     * @return {?}
     */
    IonDateTimeDirective.prototype.setShadowStyle = /**
     * @private
     * @param {?} shadow
     * @return {?}
     */
    function (shadow) {
        if (shadow) {
            shadow.innerHTML += "<style>" + this.shadowCustomCss + "</style>";
        }
    };
    IonDateTimeDirective.decorators = [
        { type: Directive, args: [{
                    selector: "ion-datetime"
                },] }
    ];
    /** @nocollapse */
    IonDateTimeDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    return IonDateTimeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DECLARATIONS = [
    IonItemDirective,
    IonInputDirective,
    IonSelectDirective,
    IonDateTimeDirective
];
var OkodeNgxCustomPaletteModule = /** @class */ (function () {
    function OkodeNgxCustomPaletteModule() {
    }
    OkodeNgxCustomPaletteModule.decorators = [
        { type: NgModule, args: [{
                    declarations: DECLARATIONS,
                    exports: DECLARATIONS,
                    providers: []
                },] }
    ];
    return OkodeNgxCustomPaletteModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { OkodeNgxCustomPaletteModule, IonDateTimeDirective as ɵd, IonInputDirective as ɵb, IonItemDirective as ɵa, IonSelectDirective as ɵc };

//# sourceMappingURL=okode-ngx-custom-palette.js.map