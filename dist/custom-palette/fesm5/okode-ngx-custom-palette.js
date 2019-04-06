import { Directive, ElementRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var IonItemDirective = /** @class */ (function () {
    function IonItemDirective(el) {
        this.el = el;
        this.shadowCustomCss = "\n    .item-native {\n      border: none;\n      padding: 0px;\n    }\n    .item-native:after {\n      content: ' ';\n      position: absolute;\n      z-index: 1;\n      left: 0px;\n      bottom: -10px;\n      height: 54px;\n      width: calc(100% - 2px);\n      border: 1px solid #ddd;\n      margin-top: 20px;\n      margin-bottom: 10px;\n      border-radius: 3px;\n    }\n    .item-native .item-inner {\n      margin-bottom: 8px;\n      border: 0px;\n    }\n    .item-highlight {\n      display: none !important;\n    }\n  ";
    }
    /**
     * @return {?}
     */
    IonItemDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.el.nativeElement.querySelector('ion-label').setAttribute('position', 'floating');
        this.setShadowStyle(this.getShadow());
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
                    selector: "[custom-palette]"
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
var OkodeNgxCustomPaletteModule = /** @class */ (function () {
    function OkodeNgxCustomPaletteModule() {
    }
    OkodeNgxCustomPaletteModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [IonItemDirective],
                    exports: [IonItemDirective],
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

export { IonItemDirective, OkodeNgxCustomPaletteModule };

//# sourceMappingURL=okode-ngx-custom-palette.js.map