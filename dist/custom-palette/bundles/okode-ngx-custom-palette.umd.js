(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@okode/ngx-custom-palette', ['exports', '@angular/core'], factory) :
    (factory((global.okode = global.okode || {}, global.okode['ngx-custom-palette'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // @dynamic
    var OkodeNgxCustomPaletteModule = /** @class */ (function () {
        function OkodeNgxCustomPaletteModule() {
        }
        /**
         * @return {?}
         */
        OkodeNgxCustomPaletteModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: OkodeNgxCustomPaletteModule,
                    providers: []
                };
            };
        OkodeNgxCustomPaletteModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [],
                        imports: [],
                        exports: []
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

    exports.OkodeNgxCustomPaletteModule = OkodeNgxCustomPaletteModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=okode-ngx-custom-palette.umd.js.map