(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@okode/ngx-custom-palette', ['exports', '@angular/core'], factory) :
    (factory((global.okode = global.okode || {}, global.okode['ngx-custom-palette'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonItemDirective = /** @class */ (function () {
        function IonItemDirective(el) {
            this.el = el;
            this.componentCss = "\n    ion-item[custom-palette] ion-label {\n      z-index: 9999;\n      padding-left: 10px;\n      margin-left: 6px;\n      pointer-events: none;\n      color: gray !important;\n    }\n    ion-item[custom-palette] ion-label::first-line {\n      content: ' ';\n      position: absolute;\n      background: white;\n      box-shadow: 0px 0px 0px 10px white;\n    }\n    ion-item[custom-palette].item-has-value ion-label,\n    ion-item[custom-palette].item-has-focus ion-label {\n      transform: translateZ(0) translateY(2px) translateX(2px) scale(.8) !important;\n    }\n    ion-item[custom-palette] ion-input input {\n      margin-left: 16px;\n      margin-top: -2px;\n    }\n    ion-item[custom-palette] ion-select {\n      padding-left: 16px;\n      margin-top: -2px;\n    }\n    html.md ion-item[custom-palette].item-label-floating ion-label {\n      margin-left: 6px;\n      margin-bottom: 3px;\n    }\n  ";
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
                this.setComponentStyle();
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
        /**
         * @private
         * @return {?}
         */
        IonItemDirective.prototype.setComponentStyle = /**
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var tagId = this.el.nativeElement.nodeName.toLowerCase() + '-component-style';
                if (document.getElementById(tagId)) {
                    return;
                }
                /** @type {?} */
                var style = document.createElement('style');
                style.type = 'text/css';
                style.id = tagId;
                style.appendChild(document.createTextNode(this.componentCss));
                document.head.appendChild(style);
            };
        IonItemDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "[custom-palette]"
                    },] }
        ];
        /** @nocollapse */
        IonItemDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
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
            { type: core.NgModule, args: [{
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

    exports.IonItemDirective = IonItemDirective;
    exports.OkodeNgxCustomPaletteModule = OkodeNgxCustomPaletteModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=okode-ngx-custom-palette.umd.js.map