(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ionic/angular'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@okode/ngx-custom-palette', ['exports', '@ionic/angular', '@angular/core'], factory) :
    (factory((global.okode = global.okode || {}, global.okode['ngx-custom-palette'] = {}),global.angular,global.ng.core));
}(this, (function (exports,angular,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonHeaderDirective = /** @class */ (function () {
        function IonHeaderDirective(el) {
            this.el = el;
        }
        /**
         * @return {?}
         */
        IonHeaderDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.el.nativeElement.setAttribute('custom-palette', true);
            };
        IonHeaderDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "ion-header"
                    },] }
        ];
        /** @nocollapse */
        IonHeaderDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return IonHeaderDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonContentDirective = /** @class */ (function () {
        function IonContentDirective(el) {
            this.el = el;
        }
        /**
         * @return {?}
         */
        IonContentDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.el.nativeElement.setAttribute('custom-palette', true);
            };
        IonContentDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "ion-content"
                    },] }
        ];
        /** @nocollapse */
        IonContentDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return IonContentDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonFooterDirective = /** @class */ (function () {
        function IonFooterDirective(el) {
            this.el = el;
        }
        /**
         * @return {?}
         */
        IonFooterDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.el.nativeElement.setAttribute('custom-palette', true);
            };
        IonFooterDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "ion-footer"
                    },] }
        ];
        /** @nocollapse */
        IonFooterDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return IonFooterDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonItemDirective = /** @class */ (function () {
        function IonItemDirective(el) {
            this.el = el;
            this.shadowCss = "\n    :host(.ion-focused) .item-native {\n      background: transparent;\n    }\n    .item-native {\n      border: none;\n      padding: 0px;\n      background: transparent;\n    }\n    .item-native .item-inner {\n      border: 0px;\n      padding: 0px;\n      min-height: 68px;\n    }\n    .item-highlight {\n      display: none !important;\n    }\n  ";
        }
        /**
         * @return {?}
         */
        IonItemDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var e = this.el.nativeElement;
                /** @type {?} */
                var inputFloatingLabel = e.querySelector('ion-input, ion-select, ion-textarea, ion-datetime');
                /** @type {?} */
                var inputStaticLabel = e.querySelector('ion-checkbox, ion-toggle');
                /** @type {?} */
                var label = e.querySelector('ion-label');
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
         * @return {?}
         */
        IonItemDirective.prototype.setShadowStyle = /**
         * @private
         * @return {?}
         */
            function () {
                this.getShadow().innerHTML += "<style>" + this.shadowCss + "</style>";
            };
        IonItemDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "ion-item"
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonInputDirective = /** @class */ (function () {
        function IonInputDirective(el) {
            this.el = el;
        }
        /**
         * @return {?}
         */
        IonInputDirective.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                if (!this.input) {
                    this.input = this.el.nativeElement.querySelector('input');
                    if (this.input) {
                        this.input.addEventListener('focus', ( /**
                         * @return {?}
                         */function () { }));
                    }
                }
            };
        IonInputDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "ion-input"
                    },] }
        ];
        /** @nocollapse */
        IonInputDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return IonInputDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonTextAreaDirective = /** @class */ (function () {
        function IonTextAreaDirective(el, platform) {
            this.el = el;
            this.platform = platform;
        }
        /**
         * @return {?}
         */
        IonTextAreaDirective.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (!this.input) {
                    this.input = this.el.nativeElement.querySelector('textarea');
                    if (this.input) {
                        this.input.addEventListener('focus', ( /**
                         * @return {?}
                         */function () { return _this.fixScrollAndCaret(); }));
                    }
                }
            };
        /**
         * @private
         * @return {?}
         */
        IonTextAreaDirective.prototype.fixScrollAndCaret = /**
         * @private
         * @return {?}
         */
            function () {
                // workaroud to flix floating caret
                if (this.platform.is('ios')) {
                    /** @type {?} */
                    var val = this.el.nativeElement.value;
                    this.el.nativeElement.value = val + '.';
                    this.el.nativeElement.value = val;
                }
            };
        IonTextAreaDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "ion-textarea"
                    },] }
        ];
        /** @nocollapse */
        IonTextAreaDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: angular.Platform }
            ];
        };
        return IonTextAreaDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonSelectDirective = /** @class */ (function () {
        function IonSelectDirective(el) {
            this.el = el;
            this.shadowCss = "\n    .select-icon-inner {\n      left: -15px;\n      margin-top: -4px;\n      border-top: 8px solid;\n      border-right: 5px solid transparent;\n      border-left: 5px solid transparent;\n      opacity: .5;\n    }\n    .select-text {\n      min-height: 24px;\n      padding-right: 30px;\n      margin-bottom: 5px;\n    }\n  ";
        }
        /**
         * @return {?}
         */
        IonSelectDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.setShadowStyle();
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
         * @return {?}
         */
        IonSelectDirective.prototype.setShadowStyle = /**
         * @private
         * @return {?}
         */
            function () {
                this.getShadow().innerHTML += "<style>" + this.shadowCss + "</style>";
            };
        IonSelectDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "ion-select"
                    },] }
        ];
        /** @nocollapse */
        IonSelectDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return IonSelectDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonDateTimeDirective = /** @class */ (function () {
        function IonDateTimeDirective(el) {
            this.el = el;
            this.shadowCss = "\n    .datetime-text {\n      top: 30px;\n      left: 16px;\n      position: absolute;\n      width: calc(100% - 70px);\n      height: 20px;\n      line-height: 20px;\n    }\n  ";
        }
        /**
         * @return {?}
         */
        IonDateTimeDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.setShadowStyle();
            };
        /**
         * @return {?}
         */
        IonDateTimeDirective.prototype.ngAfterContentChecked = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var div = this.el.nativeElement.shadowRoot.querySelector('.datetime-text');
                if (div) {
                    this.stringValue = div.innerHTML;
                }
                this.fixIonItemHasValueFloatingLabel();
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
         * @return {?}
         */
        IonDateTimeDirective.prototype.setShadowStyle = /**
         * @private
         * @return {?}
         */
            function () {
                this.getShadow().innerHTML += "<style>" + this.shadowCss + "</style>";
            };
        /**
         * @private
         * @return {?}
         */
        IonDateTimeDirective.prototype.fixIonItemHasValueFloatingLabel = /**
         * @private
         * @return {?}
         */
            function () {
                if (this.stringValue && this.stringValue.length) {
                    this.el.nativeElement.parentNode.classList.add('item-has-value');
                }
                else {
                    this.el.nativeElement.parentNode.classList.remove('item-has-value');
                }
            };
        IonDateTimeDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "ion-datetime"
                    },] }
        ];
        /** @nocollapse */
        IonDateTimeDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return IonDateTimeDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonRadioGroupDirective = /** @class */ (function () {
        function IonRadioGroupDirective(el) {
            this.el = el;
        }
        /**
         * @return {?}
         */
        IonRadioGroupDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.el.nativeElement.setAttribute('custom-palette', true);
                this.el.nativeElement.setAttribute('custom-palette-style', 'static-label');
            };
        IonRadioGroupDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "ion-radio-group"
                    },] }
        ];
        /** @nocollapse */
        IonRadioGroupDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return IonRadioGroupDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonToggleDirective = /** @class */ (function () {
        function IonToggleDirective(el) {
            this.el = el;
            this.enabledText = '';
            this.disabledText = '';
            this.shadowCss = "\n    :host {\n      width: 80px;\n    }\n    :host(.toggle-checked) .toggle-inner {\n      -webkit-transform: translate3d(48px, 0, 0);\n      transform: translate3d(48px, 0, 0);\n    }\n    :host .toggle-icon:after {\n      line-height: 33px;\n      color: white;\n      text-transform: uppercase;\n      font-weight: 800;\n      font-size: 13px;\n      width: 50px;\n      display: inline-block;\n      text-align: center;\n    }\n    :host(.toggle-checked) .toggle-icon:after {}\n    :host(:not(.toggle-checked)) .toggle-icon:after {\n      position: absolute;\n      margin-left: 28px;\n      color: #ccc;\n    }\n  ";
        }
        /**
         * @return {?}
         */
        IonToggleDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.setShadowStyle();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        IonToggleDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes && (changes.enabledText || changes.disabledText)) {
                    this.getShadow().innerHTML += "<style>\n        :host(.toggle-checked) .toggle-icon:after { content: '" + this.enabledText + "'; }\n        :host(:not(.toggle-checked)) .toggle-icon:after { content: '" + this.disabledText + "'; }\n      </style>";
                }
            };
        /**
         * @private
         * @return {?}
         */
        IonToggleDirective.prototype.getShadow = /**
         * @private
         * @return {?}
         */
            function () {
                return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
            };
        /**
         * @private
         * @return {?}
         */
        IonToggleDirective.prototype.setShadowStyle = /**
         * @private
         * @return {?}
         */
            function () {
                this.getShadow().innerHTML += "<style>" + this.shadowCss + "</style>";
            };
        IonToggleDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "ion-toggle[custom-palette-toggle][mode='ios']"
                    },] }
        ];
        /** @nocollapse */
        IonToggleDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        IonToggleDirective.propDecorators = {
            enabledText: [{ type: core.Input }],
            disabledText: [{ type: core.Input }]
        };
        return IonToggleDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DECLARATIONS = [
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
    var OkodeNgxCustomPaletteModule = /** @class */ (function () {
        function OkodeNgxCustomPaletteModule() {
        }
        OkodeNgxCustomPaletteModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: DECLARATIONS,
                        exports: DECLARATIONS,
                        providers: []
                    },] }
        ];
        return OkodeNgxCustomPaletteModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.OkodeNgxCustomPaletteModule = OkodeNgxCustomPaletteModule;
    exports.ɵh = IonDateTimeDirective;
    exports.ɵe = IonInputDirective;
    exports.ɵd = IonItemDirective;
    exports.ɵi = IonRadioGroupDirective;
    exports.ɵg = IonSelectDirective;
    exports.ɵf = IonTextAreaDirective;
    exports.ɵj = IonToggleDirective;
    exports.ɵb = IonContentDirective;
    exports.ɵc = IonFooterDirective;
    exports.ɵa = IonHeaderDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=okode-ngx-custom-palette.umd.js.map