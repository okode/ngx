/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
var IonDateTimeDirective = /** @class */ (function () {
    function IonDateTimeDirective(el) {
        this.el = el;
        this.shadowCustomCss = "\n    .datetime-text {\n      top: 28px;\n      left: 16px;\n      position: absolute;\n      width: calc(100% - 70px);\n    }\n  ";
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
     * @param {?} changes
     * @return {?}
     */
    IonDateTimeDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.currentValue = changes.ngModel.currentValue;
        this.fixIonItemHasValueFloatingLabel();
    };
    /**
     * @return {?}
     */
    IonDateTimeDirective.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
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
        this.getShadow().innerHTML += "<style>" + this.shadowCustomCss + "</style>";
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
        if (this.currentValue) {
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
    IonDateTimeDirective.propDecorators = {
        ngModel: [{ type: Input }]
    };
    return IonDateTimeDirective;
}());
export { IonDateTimeDirective };
if (false) {
    /** @type {?} */
    IonDateTimeDirective.prototype.ngModel;
    /**
     * @type {?}
     * @private
     */
    IonDateTimeDirective.prototype.currentValue;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWRhdGV0aW1lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY3VzdG9tLXBhbGV0dGUvIiwic291cmNlcyI6WyJsaWIvZm9ybS9pb24tZGF0ZXRpbWUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxLQUFLLEVBQWlELE1BQU0sZUFBZSxDQUFDO0FBRXBIO0lBa0JFLDhCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQVQxQixvQkFBZSxHQUFHLG9JQU96QixDQUFDO0lBRW1DLENBQUM7Ozs7SUFFdEMsdUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRUQsMENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDakQsSUFBSSxDQUFDLCtCQUErQixFQUFFLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELG9EQUFxQjs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLCtCQUErQixFQUFFLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFTyx3Q0FBUzs7OztJQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7O0lBRU8sNkNBQWM7Ozs7SUFBdEI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxJQUFJLFlBQVUsSUFBSSxDQUFDLGVBQWUsYUFBVSxDQUFDO0lBQ3pFLENBQUM7Ozs7O0lBRU8sOERBQStCOzs7O0lBQXZDO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDbEU7YUFBTTtZQUNMLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFKMkIsVUFBVTs7OzBCQU9uQyxLQUFLOztJQTRDUiwyQkFBQztDQUFBLEFBakRELElBaURDO1NBOUNZLG9CQUFvQjs7O0lBRS9CLHVDQUF5Qjs7Ozs7SUFFekIsNENBQTZCOzs7OztJQUU3QiwrQ0FPRTs7Ozs7SUFFVSxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpb24tZGF0ZXRpbWVgXG59KVxuZXhwb3J0IGNsYXNzIElvbkRhdGVUaW1lRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudENoZWNrZWQge1xuXG4gIEBJbnB1dCgpIG5nTW9kZWw6IHN0cmluZztcblxuICBwcml2YXRlIGN1cnJlbnRWYWx1ZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgc2hhZG93Q3VzdG9tQ3NzID0gYFxuICAgIC5kYXRldGltZS10ZXh0IHtcbiAgICAgIHRvcDogMjhweDtcbiAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRTaGFkb3dTdHlsZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuY3VycmVudFZhbHVlID0gY2hhbmdlcy5uZ01vZGVsLmN1cnJlbnRWYWx1ZTtcbiAgICB0aGlzLmZpeElvbkl0ZW1IYXNWYWx1ZUZsb2F0aW5nTGFiZWwoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICB0aGlzLmZpeElvbkl0ZW1IYXNWYWx1ZUZsb2F0aW5nTGFiZWwoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2hhZG93KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCB8fCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTaGFkb3dTdHlsZSgpIHtcbiAgICB0aGlzLmdldFNoYWRvdygpLmlubmVySFRNTCArPSBgPHN0eWxlPiR7dGhpcy5zaGFkb3dDdXN0b21Dc3N9PC9zdHlsZT5gO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhJb25JdGVtSGFzVmFsdWVGbG9hdGluZ0xhYmVsKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaXRlbS1oYXMtdmFsdWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXRlbS1oYXMtdmFsdWUnKTtcbiAgICB9XG4gIH1cblxufVxuIl19