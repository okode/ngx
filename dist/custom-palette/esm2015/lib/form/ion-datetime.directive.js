/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
export class IonDateTimeDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.shadowCss = `
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
     * @return {?}
     */
    ngAfterContentChecked() {
        /** @type {?} */
        const div = this.el.nativeElement.shadowRoot.querySelector('.datetime-text');
        if (div) {
            this.stringValue = div.innerHTML;
        }
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
        this.getShadow().innerHTML += `<style>${this.shadowCss}</style>`;
    }
    /**
     * @private
     * @return {?}
     */
    fixIonItemHasValueFloatingLabel() {
        if (this.stringValue && this.stringValue.length) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWRhdGV0aW1lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY3VzdG9tLXBhbGV0dGUvIiwic291cmNlcyI6WyJsaWIvZm9ybS9pb24tZGF0ZXRpbWUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFLbkYsTUFBTSxPQUFPLG9CQUFvQjs7OztJQWEvQixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQVQxQixjQUFTLEdBQUc7Ozs7Ozs7R0FPbkIsQ0FBQztJQUVtQyxDQUFDOzs7O0lBRXRDLFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELHFCQUFxQjs7Y0FDYixHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM1RSxJQUFJLEdBQUcsRUFBRTtZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQztTQUFFO1FBQzlDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRU8sU0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7O0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxJQUFJLFVBQVUsSUFBSSxDQUFDLFNBQVMsVUFBVSxDQUFDO0lBQ25FLENBQUM7Ozs7O0lBRU8sK0JBQStCO1FBQ3JDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUMvQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ2xFO2FBQU07WUFDTCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7O1lBMUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYzthQUN6Qjs7OztZQUoyQixVQUFVOzs7Ozs7O0lBT3BDLDJDQUE0Qjs7Ozs7SUFFNUIseUNBT0U7Ozs7O0lBRVUsa0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYsIEFmdGVyQ29udGVudENoZWNrZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgaW9uLWRhdGV0aW1lYFxufSlcbmV4cG9ydCBjbGFzcyBJb25EYXRlVGltZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG5cbiAgcHJpdmF0ZSBzdHJpbmdWYWx1ZTogc3RyaW5nO1xuXG4gIHByaXZhdGUgc2hhZG93Q3NzID0gYFxuICAgIC5kYXRldGltZS10ZXh0IHtcbiAgICAgIHRvcDogMjlweDtcbiAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRTaGFkb3dTdHlsZSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIGNvbnN0IGRpdiA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5kYXRldGltZS10ZXh0Jyk7XG4gICAgaWYgKGRpdikgeyB0aGlzLnN0cmluZ1ZhbHVlID0gZGl2LmlubmVySFRNTDsgfVxuICAgIHRoaXMuZml4SW9uSXRlbUhhc1ZhbHVlRmxvYXRpbmdMYWJlbCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaGFkb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zaGFkb3dSb290IHx8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFNoYWRvd1N0eWxlKCkge1xuICAgIHRoaXMuZ2V0U2hhZG93KCkuaW5uZXJIVE1MICs9IGA8c3R5bGU+JHt0aGlzLnNoYWRvd0Nzc308L3N0eWxlPmA7XG4gIH1cblxuICBwcml2YXRlIGZpeElvbkl0ZW1IYXNWYWx1ZUZsb2F0aW5nTGFiZWwoKSB7XG4gICAgaWYgKHRoaXMuc3RyaW5nVmFsdWUgJiYgdGhpcy5zdHJpbmdWYWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taGFzLXZhbHVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2l0ZW0taGFzLXZhbHVlJyk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==