/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
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
export { IonDateTimeDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IonDateTimeDirective.prototype.shadowCustomCss;
    /**
     * @type {?}
     * @private
     */
    IonDateTimeDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWRhdGV0aW1lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY3VzdG9tLXBhbGV0dGUvIiwic291cmNlcyI6WyJsaWIvaW9uLWRhdGV0aW1lLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFOUQ7SUFZRSw4QkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFQMUIsb0JBQWUsR0FBRyx3RkFLekIsQ0FBQztJQUVtQyxDQUFDOzs7O0lBRXRDLHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFTyx3Q0FBUzs7OztJQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7OztJQUVPLDZDQUFjOzs7OztJQUF0QixVQUF1QixNQUFNO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQUUsTUFBTSxDQUFDLFNBQVMsSUFBSSxZQUFVLElBQUksQ0FBQyxlQUFlLGFBQVUsQ0FBQztTQUFFO0lBQy9FLENBQUM7O2dCQXhCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQUoyQixVQUFVOztJQTRCdEMsMkJBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXZCWSxvQkFBb0I7Ozs7OztJQUUvQiwrQ0FLRTs7Ozs7SUFFVSxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpb24tZGF0ZXRpbWVgXG59KVxuZXhwb3J0IGNsYXNzIElvbkRhdGVUaW1lRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHNoYWRvd0N1c3RvbUNzcyA9IGBcbiAgICAuZGF0ZXRpbWUtdGV4dCB7XG4gICAgICBtYXJnaW4tdG9wOiAtMjhweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gIGA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFNoYWRvd1N0eWxlKHRoaXMuZ2V0U2hhZG93KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaGFkb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zaGFkb3dSb290IHx8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFNoYWRvd1N0eWxlKHNoYWRvdykge1xuICAgIGlmIChzaGFkb3cpIHsgc2hhZG93LmlubmVySFRNTCArPSBgPHN0eWxlPiR7dGhpcy5zaGFkb3dDdXN0b21Dc3N9PC9zdHlsZT5gOyB9XG4gIH1cblxufVxuIl19