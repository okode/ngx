/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
export class IonSelectDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.shadowCustomCss = `
    .select-icon-inner {
      left: -15px;
      margin-top: -4px;
      border-top: 8px solid;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      opacity: .33;
    }
    .select-text {
      min-height: 24px;
      padding-right: 20px;
      margin-bottom: 7px;
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
}
IonSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-select`
            },] }
];
/** @nocollapse */
IonSelectDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXNlbGVjdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWN1c3RvbS1wYWxldHRlLyIsInNvdXJjZXMiOlsibGliL2Zvcm0vaW9uLXNlbGVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzlELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFrQjdCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBaEIxQixvQkFBZSxHQUFHOzs7Ozs7Ozs7Ozs7OztHQWN6QixDQUFDO0lBRW1DLENBQUM7Ozs7SUFFdEMsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDOzs7OztJQUVPLFNBQVM7UUFDZixPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsRyxDQUFDOzs7OztJQUVPLGNBQWM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsSUFBSSxVQUFVLElBQUksQ0FBQyxlQUFlLFVBQVUsQ0FBQztJQUN6RSxDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7O1lBSjJCLFVBQVU7Ozs7Ozs7SUFPcEMsNkNBY0U7Ozs7O0lBRVUsZ0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgaW9uLXNlbGVjdGBcbn0pXG5leHBvcnQgY2xhc3MgSW9uU2VsZWN0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHNoYWRvd0N1c3RvbUNzcyA9IGBcbiAgICAuc2VsZWN0LWljb24taW5uZXIge1xuICAgICAgbGVmdDogLTE1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkO1xuICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgb3BhY2l0eTogLjMzO1xuICAgIH1cbiAgICAuc2VsZWN0LXRleHQge1xuICAgICAgbWluLWhlaWdodDogMjRweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRTaGFkb3dTdHlsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaGFkb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zaGFkb3dSb290IHx8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFNoYWRvd1N0eWxlKCkge1xuICAgIHRoaXMuZ2V0U2hhZG93KCkuaW5uZXJIVE1MICs9IGA8c3R5bGU+JHt0aGlzLnNoYWRvd0N1c3RvbUNzc308L3N0eWxlPmA7XG4gIH1cblxufVxuIl19