/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
var IonSelectDirective = /** @class */ (function () {
    function IonSelectDirective(el) {
        this.el = el;
        this.shadowCustomCss = "\n    .select-icon-inner {\n      left: -7px;\n      margin-top: -2px;\n      border-top: 6px solid;\n      border-right: 5px solid transparent;\n      border-left: 5px solid transparent;\n      opacity: .33;\n    }\n    .select-text {\n      min-height: 30px;\n    }\n  ";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXNlbGVjdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWN1c3RvbS1wYWxldHRlLyIsInNvdXJjZXMiOlsibGliL2lvbi1zZWxlY3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RDtJQW1CRSw0QkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7UUFkMUIsb0JBQWUsR0FBRyxpUkFZekIsQ0FBQztJQUVtQyxDQUFDOzs7O0lBRXRDLHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFTyxzQ0FBUzs7OztJQUFqQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7OztJQUVPLDJDQUFjOzs7OztJQUF0QixVQUF1QixNQUFNO1FBQzNCLElBQUksTUFBTSxFQUFFO1lBQUUsTUFBTSxDQUFDLFNBQVMsSUFBSSxZQUFVLElBQUksQ0FBQyxlQUFlLGFBQVUsQ0FBQztTQUFFO0lBQy9FLENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQUoyQixVQUFVOztJQW1DdEMseUJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQTlCWSxrQkFBa0I7Ozs7OztJQUU3Qiw2Q0FZRTs7Ozs7SUFFVSxnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9uSW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IGBpb24tc2VsZWN0YFxufSlcbmV4cG9ydCBjbGFzcyBJb25TZWxlY3REaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgc2hhZG93Q3VzdG9tQ3NzID0gYFxuICAgIC5zZWxlY3QtaWNvbi1pbm5lciB7XG4gICAgICBsZWZ0OiAtN3B4O1xuICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICAgIGJvcmRlci10b3A6IDZweCBzb2xpZDtcbiAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIG9wYWNpdHk6IC4zMztcbiAgICB9XG4gICAgLnNlbGVjdC10ZXh0IHtcbiAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zZXRTaGFkb3dTdHlsZSh0aGlzLmdldFNoYWRvdygpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2hhZG93KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCB8fCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTaGFkb3dTdHlsZShzaGFkb3cpIHtcbiAgICBpZiAoc2hhZG93KSB7IHNoYWRvdy5pbm5lckhUTUwgKz0gYDxzdHlsZT4ke3RoaXMuc2hhZG93Q3VzdG9tQ3NzfTwvc3R5bGU+YDsgfVxuICB9XG5cbn1cbiJdfQ==