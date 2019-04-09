/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
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
export { IonItemDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IonItemDirective.prototype.shadowCss;
    /**
     * @type {?}
     * @private
     */
    IonItemDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9mb3JtL2lvbi1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQ7SUF3QkUsMEJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBbkIxQixjQUFTLEdBQUcsa1dBaUJuQixDQUFDO0lBRW1DLENBQUM7Ozs7SUFFdEMsbUNBQVE7OztJQUFSOztZQUNRLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7O1lBQ3pCLGtCQUFrQixHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsbURBQW1ELENBQUM7O1lBQ3pGLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsMEJBQTBCLENBQUM7O1lBQzlELEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUMxQyxJQUFJLEtBQUssSUFBSSxDQUFDLGtCQUFrQixJQUFJLGdCQUFnQixDQUFDLEVBQUU7WUFDckQsQ0FBQyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN2QyxJQUFJLGtCQUFrQixFQUFFO2dCQUN0QixDQUFDLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3pELENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUNuRTtpQkFBTTtnQkFDTCxDQUFDLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3hEO1lBQ0QsWUFBWTtZQUNaLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUFFO1lBQ3RFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7O0lBRU8sb0NBQVM7Ozs7SUFBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsRyxDQUFDOzs7OztJQUVPLHlDQUFjOzs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsSUFBSSxZQUFVLElBQUksQ0FBQyxTQUFTLGFBQVUsQ0FBQztJQUNuRSxDQUFDOztnQkFuREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO2lCQUNyQjs7OztnQkFKMkIsVUFBVTs7SUF1RHRDLHVCQUFDO0NBQUEsQUFyREQsSUFxREM7U0FsRFksZ0JBQWdCOzs7Ozs7SUFFM0IscUNBaUJFOzs7OztJQUVVLDhCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGlvbi1pdGVtYFxufSlcbmV4cG9ydCBjbGFzcyBJb25JdGVtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHNoYWRvd0NzcyA9IGBcbiAgICA6aG9zdCguaW9uLWZvY3VzZWQpIC5pdGVtLW5hdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgLml0ZW0tbmF0aXZlIHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuaXRlbS1uYXRpdmUgLml0ZW0taW5uZXIge1xuICAgICAgYm9yZGVyOiAwcHg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBtaW4taGVpZ2h0OiA2OHB4O1xuICAgIH1cbiAgICAuaXRlbS1oaWdobGlnaHQge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgYDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IGUgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgaW5wdXRGbG9hdGluZ0xhYmVsID0gZS5xdWVyeVNlbGVjdG9yKCdpb24taW5wdXQsIGlvbi1zZWxlY3QsIGlvbi10ZXh0YXJlYSwgaW9uLWRhdGV0aW1lJyk7XG4gICAgY29uc3QgaW5wdXRTdGF0aWNMYWJlbCA9IGUucXVlcnlTZWxlY3RvcignaW9uLWNoZWNrYm94LCBpb24tdG9nZ2xlJyk7XG4gICAgY29uc3QgbGFiZWwgPSBlLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpO1xuICAgIGlmIChsYWJlbCAmJiAoaW5wdXRGbG9hdGluZ0xhYmVsIHx8wqBpbnB1dFN0YXRpY0xhYmVsKSkge1xuICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2N1c3RvbS1wYWxldHRlJywgdHJ1ZSk7XG4gICAgICBpZiAoaW5wdXRGbG9hdGluZ0xhYmVsKSB7XG4gICAgICAgIGUuc2V0QXR0cmlidXRlKCdjdXN0b20tcGFsZXR0ZS1zdHlsZScsICdmbG9hdGluZy1sYWJlbCcpO1xuICAgICAgICBlLnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnZmxvYXRpbmcnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUuc2V0QXR0cmlidXRlKCdjdXN0b20tcGFsZXR0ZS1zdHlsZScsICdzdGF0aWMtbGFiZWwnKTtcbiAgICAgIH1cbiAgICAgIC8vIGhhcyBpY29uP1xuICAgICAgaWYgKGUucXVlcnlTZWxlY3RvcignaW9uLWljb24nKSnCoHsgZS5jbGFzc0xpc3QuYWRkKCdpdGVtLWhhcy1pY29uJyk7IH1cbiAgICAgIHRoaXMuc2V0U2hhZG93U3R5bGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFNoYWRvdygpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNoYWRvd1Jvb3QgfHwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2hhZG93U3R5bGUoKSB7XG4gICAgdGhpcy5nZXRTaGFkb3coKS5pbm5lckhUTUwgKz0gYDxzdHlsZT4ke3RoaXMuc2hhZG93Q3NzfTwvc3R5bGU+YDtcbiAgfVxuXG59XG4iXX0=