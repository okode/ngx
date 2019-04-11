/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
var IonSelectDirective = /** @class */ (function () {
    function IonSelectDirective(el) {
        this.el = el;
        this.shadowCss = "\n    .select-icon-inner {\n      left: -15px;\n      margin-top: -4px;\n      border-top: 8px solid;\n      border-right: 5px solid transparent;\n      border-left: 5px solid transparent;\n      opacity: .33;\n    }\n    .select-text {\n      min-height: 24px;\n      padding-right: 30px;\n      margin-bottom: 7px;\n    }\n  ";
    }
    /**
     * @return {?}
     */
    IonSelectDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setShadowStyle();
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
     * @return {?}
     */
    IonSelectDirective.prototype.setShadowStyle = /**
     * @private
     * @return {?}
     */
    function () {
        this.getShadow().innerHTML += "<style>" + this.shadowCss + "</style>";
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
    IonSelectDirective.prototype.shadowCss;
    /**
     * @type {?}
     * @private
     */
    IonSelectDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXNlbGVjdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWN1c3RvbS1wYWxldHRlLyIsInNvdXJjZXMiOlsibGliL2Zvcm0vaW9uLXNlbGVjdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlEO0lBcUJFLDRCQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQWhCMUIsY0FBUyxHQUFHLHlVQWNuQixDQUFDO0lBRW1DLENBQUM7Ozs7SUFFdEMscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBRU8sc0NBQVM7Ozs7SUFBakI7UUFDRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNsRyxDQUFDOzs7OztJQUVPLDJDQUFjOzs7O0lBQXRCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsSUFBSSxZQUFVLElBQUksQ0FBQyxTQUFTLGFBQVUsQ0FBQztJQUNuRSxDQUFDOztnQkFqQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO2lCQUN2Qjs7OztnQkFKMkIsVUFBVTs7SUFxQ3RDLHlCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0FoQ1ksa0JBQWtCOzs7Ozs7SUFFN0IsdUNBY0U7Ozs7O0lBRVUsZ0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgaW9uLXNlbGVjdGBcbn0pXG5leHBvcnQgY2xhc3MgSW9uU2VsZWN0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIHNoYWRvd0NzcyA9IGBcbiAgICAuc2VsZWN0LWljb24taW5uZXIge1xuICAgICAgbGVmdDogLTE1cHg7XG4gICAgICBtYXJnaW4tdG9wOiAtNHB4O1xuICAgICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkO1xuICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgb3BhY2l0eTogLjMzO1xuICAgIH1cbiAgICAuc2VsZWN0LXRleHQge1xuICAgICAgbWluLWhlaWdodDogMjRweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRTaGFkb3dTdHlsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTaGFkb3coKSB7XG4gICAgcmV0dXJuIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zaGFkb3dSb290IHx8IHRoaXMuZWwubmF0aXZlRWxlbWVudC5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFNoYWRvd1N0eWxlKCkge1xuICAgIHRoaXMuZ2V0U2hhZG93KCkuaW5uZXJIVE1MICs9IGA8c3R5bGU+JHt0aGlzLnNoYWRvd0Nzc308L3N0eWxlPmA7XG4gIH1cblxufVxuIl19