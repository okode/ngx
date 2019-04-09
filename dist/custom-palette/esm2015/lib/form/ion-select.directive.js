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
        this.shadowCss = `
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
        this.getShadow().innerHTML += `<style>${this.shadowCss}</style>`;
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
    IonSelectDirective.prototype.shadowCss;
    /**
     * @type {?}
     * @private
     */
    IonSelectDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXNlbGVjdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWN1c3RvbS1wYWxldHRlLyIsInNvdXJjZXMiOlsibGliL2Zvcm0vaW9uLXNlbGVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzlELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFrQjdCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBaEIxQixjQUFTLEdBQUc7Ozs7Ozs7Ozs7Ozs7O0dBY25CLENBQUM7SUFFbUMsQ0FBQzs7OztJQUV0QyxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU8sU0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7O0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxJQUFJLFVBQVUsSUFBSSxDQUFDLFNBQVMsVUFBVSxDQUFDO0lBQ25FLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFKMkIsVUFBVTs7Ozs7OztJQU9wQyx1Q0FjRTs7Ozs7SUFFVSxnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpb24tc2VsZWN0YFxufSlcbmV4cG9ydCBjbGFzcyBJb25TZWxlY3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc2hhZG93Q3NzID0gYFxuICAgIC5zZWxlY3QtaWNvbi1pbm5lciB7XG4gICAgICBsZWZ0OiAtMTVweDtcbiAgICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgICBib3JkZXItdG9wOiA4cHggc29saWQ7XG4gICAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBvcGFjaXR5OiAuMzM7XG4gICAgfVxuICAgIC5zZWxlY3QtdGV4dCB7XG4gICAgICBtaW4taGVpZ2h0OiAyNHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgICB9XG4gIGA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFNoYWRvd1N0eWxlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFNoYWRvdygpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNoYWRvd1Jvb3QgfHwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2hhZG93U3R5bGUoKSB7XG4gICAgdGhpcy5nZXRTaGFkb3coKS5pbm5lckhUTUwgKz0gYDxzdHlsZT4ke3RoaXMuc2hhZG93Q3NzfTwvc3R5bGU+YDtcbiAgfVxuXG59XG4iXX0=