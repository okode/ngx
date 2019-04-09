/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
export class IonDateTimeDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.shadowCustomCss = `
    .datetime-text {
      top: 29px;
      left: 16px;
      position: absolute;
      width: calc(100% - 70px);
    }
  `;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setShadowStyle();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.currentValue = changes.ngModel.currentValue;
        this.fixIonItemHasValueFloatingLabel();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.fixIonItemHasValueFloatingLabel();
    }
    /**
     * @private
     * @return {?}
     */
    getShadow() {
        return this.el.nativeElement.shadowRoot || this.el.nativeElement.attachShadow({ mode: 'open' });
    }
    /**
     * @private
     * @return {?}
     */
    setShadowStyle() {
        this.getShadow().innerHTML += `<style>${this.shadowCustomCss}</style>`;
    }
    /**
     * @private
     * @return {?}
     */
    fixIonItemHasValueFloatingLabel() {
        if (this.currentValue) {
            this.el.nativeElement.parentNode.classList.add('item-has-value');
        }
        else {
            this.el.nativeElement.parentNode.classList.remove('item-has-value');
        }
    }
}
IonDateTimeDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-datetime`
            },] }
];
/** @nocollapse */
IonDateTimeDirective.ctorParameters = () => [
    { type: ElementRef }
];
IonDateTimeDirective.propDecorators = {
    ngModel: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWRhdGV0aW1lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY3VzdG9tLXBhbGV0dGUvIiwic291cmNlcyI6WyJsaWIvZm9ybS9pb24tZGF0ZXRpbWUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxLQUFLLEVBQWlELE1BQU0sZUFBZSxDQUFDO0FBS3BILE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFlL0IsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFUMUIsb0JBQWUsR0FBRzs7Ozs7OztHQU96QixDQUFDO0lBRW1DLENBQUM7Ozs7SUFFdEMsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ2pELElBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxxQkFBcUI7UUFDbkIsSUFBSSxDQUFDLCtCQUErQixFQUFFLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7Ozs7SUFFTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLElBQUksVUFBVSxJQUFJLENBQUMsZUFBZSxVQUFVLENBQUM7SUFDekUsQ0FBQzs7Ozs7SUFFTywrQkFBK0I7UUFDckMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDbEU7YUFBTTtZQUNMLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDckU7SUFDSCxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7O1lBSjJCLFVBQVU7OztzQkFPbkMsS0FBSzs7OztJQUFOLHVDQUF5Qjs7Ozs7SUFFekIsNENBQTZCOzs7OztJQUU3QiwrQ0FPRTs7Ozs7SUFFVSxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgQWZ0ZXJDb250ZW50Q2hlY2tlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpb24tZGF0ZXRpbWVgXG59KVxuZXhwb3J0IGNsYXNzIElvbkRhdGVUaW1lRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyQ29udGVudENoZWNrZWQge1xuXG4gIEBJbnB1dCgpIG5nTW9kZWw6IHN0cmluZztcblxuICBwcml2YXRlIGN1cnJlbnRWYWx1ZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgc2hhZG93Q3VzdG9tQ3NzID0gYFxuICAgIC5kYXRldGltZS10ZXh0IHtcbiAgICAgIHRvcDogMjlweDtcbiAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRTaGFkb3dTdHlsZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMuY3VycmVudFZhbHVlID0gY2hhbmdlcy5uZ01vZGVsLmN1cnJlbnRWYWx1ZTtcbiAgICB0aGlzLmZpeElvbkl0ZW1IYXNWYWx1ZUZsb2F0aW5nTGFiZWwoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICB0aGlzLmZpeElvbkl0ZW1IYXNWYWx1ZUZsb2F0aW5nTGFiZWwoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2hhZG93KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCB8fCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTaGFkb3dTdHlsZSgpIHtcbiAgICB0aGlzLmdldFNoYWRvdygpLmlubmVySFRNTCArPSBgPHN0eWxlPiR7dGhpcy5zaGFkb3dDdXN0b21Dc3N9PC9zdHlsZT5gO1xuICB9XG5cbiAgcHJpdmF0ZSBmaXhJb25JdGVtSGFzVmFsdWVGbG9hdGluZ0xhYmVsKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnaXRlbS1oYXMtdmFsdWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXRlbS1oYXMtdmFsdWUnKTtcbiAgICB9XG4gIH1cblxufVxuIl19