/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
import { Platform } from '@ionic/angular';
var IonTextAreaDirective = /** @class */ (function () {
    function IonTextAreaDirective(el, platform) {
        this.el = el;
        this.platform = platform;
    }
    /**
     * @return {?}
     */
    IonTextAreaDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.input) {
            this.input = this.el.nativeElement.querySelector('textarea');
            if (this.input) {
                this.input.addEventListener('focus', (/**
                 * @return {?}
                 */
                function () { return _this.fixScrollAndCaret(); }));
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    IonTextAreaDirective.prototype.fixScrollAndCaret = /**
     * @private
     * @return {?}
     */
    function () {
        // workaroud to flix floating caret
        if (this.platform.is('ios')) {
            /** @type {?} */
            var val = this.el.nativeElement.value;
            this.el.nativeElement.value = val + '.';
            this.el.nativeElement.value = val;
        }
    };
    IonTextAreaDirective.decorators = [
        { type: Directive, args: [{
                    selector: "ion-textarea"
                },] }
    ];
    /** @nocollapse */
    IonTextAreaDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Platform }
    ]; };
    return IonTextAreaDirective;
}());
export { IonTextAreaDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IonTextAreaDirective.prototype.input;
    /**
     * @type {?}
     * @private
     */
    IonTextAreaDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    IonTextAreaDirective.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXRleHRhcmVhLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bva29kZS9uZ3gtY3VzdG9tLXBhbGV0dGUvIiwic291cmNlcyI6WyJsaWIvZm9ybS9pb24tdGV4dGFyZWEuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBb0IsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFDO0lBT0UsOEJBQ1UsRUFBYyxFQUNkLFFBQWtCO1FBRGxCLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3pCLENBQUM7Ozs7SUFFSixpREFBa0I7OztJQUFsQjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM3RCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPOzs7Z0JBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUF4QixDQUF3QixFQUFDLENBQUM7YUFDdEU7U0FDRjtJQUNILENBQUM7Ozs7O0lBRU8sZ0RBQWlCOzs7O0lBQXpCO1FBQ0UsbUNBQW1DO1FBQ25DLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUU7O2dCQUNyQixHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSztZQUN2QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUN4QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztpQkFDekI7Ozs7Z0JBTG1CLFVBQVU7Z0JBQ3JCLFFBQVE7O0lBZ0NqQiwyQkFBQztDQUFBLEFBOUJELElBOEJDO1NBM0JZLG9CQUFvQjs7Ozs7O0lBRS9CLHFDQUFjOzs7OztJQUdaLGtDQUFzQjs7Ozs7SUFDdEIsd0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBBZnRlclZpZXdDaGVja2VkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgaW9uLXRleHRhcmVhYFxufSlcbmV4cG9ydCBjbGFzcyBJb25UZXh0QXJlYURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xuXG4gIHByaXZhdGUgaW5wdXQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIGlmICghdGhpcy5pbnB1dCkge1xuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpO1xuICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHRoaXMuZml4U2Nyb2xsQW5kQ2FyZXQoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmaXhTY3JvbGxBbmRDYXJldCgpIHtcbiAgICAvLyB3b3JrYXJvdWQgdG8gZmxpeCBmbG9hdGluZyBjYXJldFxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSkge1xuICAgICAgY29uc3QgdmFsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsICsgJy4nO1xuICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=