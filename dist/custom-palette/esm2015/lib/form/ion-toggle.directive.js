/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input } from '@angular/core';
export class IonToggleDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.enabledText = '';
        this.disabledText = '';
        this.shadowCss = `
    :host {
      width: 80px;
    }
    :host(.toggle-checked) .toggle-inner {
      -webkit-transform: translate3d(48px, 0, 0);
      transform: translate3d(48px, 0, 0);
    }
    :host .toggle-icon:after {
      line-height: 33px;
      color: white;
      text-transform: uppercase;
      font-weight: 800;
      font-size: 13px;
      width: 50px;
      display: inline-block;
      text-align: center;
    }
    :host(.toggle-checked) .toggle-icon:after {}
    :host(:not(.toggle-checked)) .toggle-icon:after {
      position: absolute;
      margin-left: 28px;
    }
    :host(:not(.toggle-checked)) .toggle-icon {
      background-color: #919191;
    }
    :host(:not(.toggle-checked)) .toggle-icon:before {
      background: #919191;
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
        if (changes && (changes.enabledText || changes.disabledText)) {
            this.getShadow().innerHTML += `<style>
        :host(.toggle-checked) .toggle-icon:after { content: '${this.enabledText}'; }
        :host(:not(.toggle-checked)) .toggle-icon:after { content: '${this.disabledText}'; }
      </style>`;
        }
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
IonToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-toggle[custom-palette-toggle][mode='ios']`
            },] }
];
/** @nocollapse */
IonToggleDirective.ctorParameters = () => [
    { type: ElementRef }
];
IonToggleDirective.propDecorators = {
    enabledText: [{ type: Input }],
    disabledText: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    IonToggleDirective.prototype.enabledText;
    /** @type {?} */
    IonToggleDirective.prototype.disabledText;
    /**
     * @type {?}
     * @private
     */
    IonToggleDirective.prototype.shadowCss;
    /**
     * @type {?}
     * @private
     */
    IonToggleDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXRvZ2dsZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ab2tvZGUvbmd4LWN1c3RvbS1wYWxldHRlLyIsInNvdXJjZXMiOlsibGliL2Zvcm0vaW9uLXRvZ2dsZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUtoRixNQUFNLE9BQU8sa0JBQWtCOzs7O0lBb0M3QixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQWxDekIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFFbkIsY0FBUyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTZCbkIsQ0FBQztJQUVtQyxDQUFDOzs7O0lBRXRDLFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBTztRQUNqQixJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLElBQUk7Z0VBQzRCLElBQUksQ0FBQyxXQUFXO3NFQUNWLElBQUksQ0FBQyxZQUFZO2VBQ3hFLENBQUM7U0FDWDtJQUNILENBQUM7Ozs7O0lBRU8sU0FBUztRQUNmLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ2xHLENBQUM7Ozs7O0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxJQUFJLFVBQVUsSUFBSSxDQUFDLFNBQVMsVUFBVSxDQUFDO0lBQ25FLENBQUM7OztZQTVERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtDQUErQzthQUMxRDs7OztZQUoyQixVQUFVOzs7MEJBT25DLEtBQUs7MkJBQ0wsS0FBSzs7OztJQUROLHlDQUEwQjs7SUFDMUIsMENBQTJCOzs7OztJQUUzQix1Q0E2QkU7Ozs7O0lBRVUsZ0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBgaW9uLXRvZ2dsZVtjdXN0b20tcGFsZXR0ZS10b2dnbGVdW21vZGU9J2lvcyddYFxufSlcbmV4cG9ydCBjbGFzcyBJb25Ub2dnbGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgZW5hYmxlZFRleHQgPSAnJztcbiAgQElucHV0KCkgZGlzYWJsZWRUZXh0ID0gJyc7XG5cbiAgcHJpdmF0ZSBzaGFkb3dDc3MgPSBgXG4gICAgOmhvc3Qge1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgfVxuICAgIDpob3N0KC50b2dnbGUtY2hlY2tlZCkgLnRvZ2dsZS1pbm5lciB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNDhweCwgMCwgMCk7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDQ4cHgsIDAsIDApO1xuICAgIH1cbiAgICA6aG9zdCAudG9nZ2xlLWljb246YWZ0ZXIge1xuICAgICAgbGluZS1oZWlnaHQ6IDMzcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICA6aG9zdCgudG9nZ2xlLWNoZWNrZWQpIC50b2dnbGUtaWNvbjphZnRlciB7fVxuICAgIDpob3N0KDpub3QoLnRvZ2dsZS1jaGVja2VkKSkgLnRvZ2dsZS1pY29uOmFmdGVyIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xuICAgIH1cbiAgICA6aG9zdCg6bm90KC50b2dnbGUtY2hlY2tlZCkpIC50b2dnbGUtaWNvbiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTE5MTkxO1xuICAgIH1cbiAgICA6aG9zdCg6bm90KC50b2dnbGUtY2hlY2tlZCkpIC50b2dnbGUtaWNvbjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZDogIzkxOTE5MTtcbiAgICB9XG4gIGA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnNldFNoYWRvd1N0eWxlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgaWYgKGNoYW5nZXMgJiYgKGNoYW5nZXMuZW5hYmxlZFRleHQgfHwgY2hhbmdlcy5kaXNhYmxlZFRleHQpKSB7XG4gICAgICB0aGlzLmdldFNoYWRvdygpLmlubmVySFRNTCArPSBgPHN0eWxlPlxuICAgICAgICA6aG9zdCgudG9nZ2xlLWNoZWNrZWQpIC50b2dnbGUtaWNvbjphZnRlciB7IGNvbnRlbnQ6ICcke3RoaXMuZW5hYmxlZFRleHR9JzsgfVxuICAgICAgICA6aG9zdCg6bm90KC50b2dnbGUtY2hlY2tlZCkpIC50b2dnbGUtaWNvbjphZnRlciB7IGNvbnRlbnQ6ICcke3RoaXMuZGlzYWJsZWRUZXh0fSc7IH1cbiAgICAgIDwvc3R5bGU+YDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFNoYWRvdygpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNoYWRvd1Jvb3QgfHwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2hhZG93U3R5bGUoKSB7XG4gICAgdGhpcy5nZXRTaGFkb3coKS5pbm5lckhUTUwgKz0gYDxzdHlsZT4ke3RoaXMuc2hhZG93Q3NzfTwvc3R5bGU+YDtcbiAgfVxuXG59XG4iXX0=