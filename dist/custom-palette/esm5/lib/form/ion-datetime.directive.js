/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
var IonDateTimeDirective = /** @class */ (function () {
    function IonDateTimeDirective(el) {
        this.el = el;
        this.shadowCss = "\n    .datetime-text {\n      top: 29px;\n      left: 16px;\n      position: absolute;\n      width: calc(100% - 70px);\n    }\n  ";
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
export { IonDateTimeDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IonDateTimeDirective.prototype.stringValue;
    /**
     * @type {?}
     * @private
     */
    IonDateTimeDirective.prototype.shadowCss;
    /**
     * @type {?}
     * @private
     */
    IonDateTimeDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWRhdGV0aW1lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY3VzdG9tLXBhbGV0dGUvIiwic291cmNlcyI6WyJsaWIvZm9ybS9pb24tZGF0ZXRpbWUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFbkY7SUFnQkUsOEJBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBVDFCLGNBQVMsR0FBRyxvSUFPbkIsQ0FBQztJQUVtQyxDQUFDOzs7O0lBRXRDLHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7O0lBRUQsb0RBQXFCOzs7SUFBckI7O1lBQ1EsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7UUFDNUUsSUFBSSxHQUFHLEVBQUU7WUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUM7U0FBRTtRQUM5QyxJQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUVPLHdDQUFTOzs7O0lBQWpCO1FBQ0UsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7Ozs7SUFFTyw2Q0FBYzs7OztJQUF0QjtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLElBQUksWUFBVSxJQUFJLENBQUMsU0FBUyxhQUFVLENBQUM7SUFDbkUsQ0FBQzs7Ozs7SUFFTyw4REFBK0I7Ozs7SUFBdkM7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDL0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNsRTthQUFNO1lBQ0wsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7O2dCQTFDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQUoyQixVQUFVOztJQThDdEMsMkJBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQXpDWSxvQkFBb0I7Ozs7OztJQUUvQiwyQ0FBNEI7Ozs7O0lBRTVCLHlDQU9FOzs7OztJQUVVLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBFbGVtZW50UmVmLCBBZnRlckNvbnRlbnRDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGlvbi1kYXRldGltZWBcbn0pXG5leHBvcnQgY2xhc3MgSW9uRGF0ZVRpbWVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyQ29udGVudENoZWNrZWQge1xuXG4gIHByaXZhdGUgc3RyaW5nVmFsdWU6IHN0cmluZztcblxuICBwcml2YXRlIHNoYWRvd0NzcyA9IGBcbiAgICAuZGF0ZXRpbWUtdGV4dCB7XG4gICAgICB0b3A6IDI5cHg7XG4gICAgICBsZWZ0OiAxNnB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDcwcHgpO1xuICAgIH1cbiAgYDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2V0U2hhZG93U3R5bGUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICBjb25zdCBkaXYgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuZGF0ZXRpbWUtdGV4dCcpO1xuICAgIGlmIChkaXYpIHsgdGhpcy5zdHJpbmdWYWx1ZSA9IGRpdi5pbm5lckhUTUw7IH1cbiAgICB0aGlzLmZpeElvbkl0ZW1IYXNWYWx1ZUZsb2F0aW5nTGFiZWwoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2hhZG93KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCB8fCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTaGFkb3dTdHlsZSgpIHtcbiAgICB0aGlzLmdldFNoYWRvdygpLmlubmVySFRNTCArPSBgPHN0eWxlPiR7dGhpcy5zaGFkb3dDc3N9PC9zdHlsZT5gO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhJb25JdGVtSGFzVmFsdWVGbG9hdGluZ0xhYmVsKCkge1xuICAgIGlmICh0aGlzLnN0cmluZ1ZhbHVlICYmIHRoaXMuc3RyaW5nVmFsdWUubGVuZ3RoKSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdpdGVtLWhhcy12YWx1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdpdGVtLWhhcy12YWx1ZScpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=