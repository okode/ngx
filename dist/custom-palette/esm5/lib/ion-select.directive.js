/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
var IonSelectDirective = /** @class */ (function () {
    function IonSelectDirective(el) {
        this.el = el;
        this.shadowCustomCss = "\n    .select-icon-inner {\n      left: -5px;\n      margin-top: -5px;\n      border-top: 5px solid;\n      border-right: 5px solid transparent;\n      border-left: 5px solid transparent;\n      opacity: .33;\n    }\n  ";
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
export { IonSelectDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IonSelectDirective.prototype.shadowCustomCss;
    /**
     * @type {?}
     * @private
     */
    IonSelectDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXNlbGVjdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWN1c3RvbS1wYWxldHRlLyIsInNvdXJjZXMiOlsibGliL2lvbi1zZWxlY3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RDtJQWdCRSw0QkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFYMUIsb0JBQWUsR0FBRyw2TkFTekIsQ0FBQztJQUVtQyxDQUFDOzs7O0lBRXRDLHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFTyxzQ0FBUzs7OztJQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7OztJQUVPLDJDQUFjOzs7OztJQUF0QixVQUF1QixNQUFNO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQUUsTUFBTSxDQUFDLFNBQVMsSUFBSSxZQUFVLElBQUksQ0FBQyxlQUFlLGFBQVUsQ0FBQztTQUFFO0lBQy9FLENBQUM7O2dCQTVCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQUoyQixVQUFVOztJQWdDdEMseUJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTNCWSxrQkFBa0I7Ozs7OztJQUU3Qiw2Q0FTRTs7Ozs7SUFFVSxnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpb24tc2VsZWN0YFxufSlcbmV4cG9ydCBjbGFzcyBJb25TZWxlY3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc2hhZG93Q3VzdG9tQ3NzID0gYFxuICAgIC5zZWxlY3QtaWNvbi1pbm5lciB7XG4gICAgICBsZWZ0OiAtNXB4O1xuICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZDtcbiAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIG9wYWNpdHk6IC4zMztcbiAgICB9XG4gIGA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFNoYWRvd1N0eWxlKHRoaXMuZ2V0U2hhZG93KCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaGFkb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zaGFkb3dSb290IHx8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFNoYWRvd1N0eWxlKHNoYWRvdykge1xuICAgIGlmIChzaGFkb3cpIHsgc2hhZG93LmlubmVySFRNTCArPSBgPHN0eWxlPiR7dGhpcy5zaGFkb3dDdXN0b21Dc3N9PC9zdHlsZT5gOyB9XG4gIH1cblxufVxuIl19