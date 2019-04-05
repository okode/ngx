/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef } from '@angular/core';
export class IonItemDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.componentCss = `
    ion-item[custom-palette] ion-label {
      z-index: 9999;
      padding-left: 10px;
      margin-left: 6px;
      pointer-events: none;
      color: gray !important;
    }
    ion-item[custom-palette] ion-label::first-line {
      content: ' ';
      position: absolute;
      background: white;
      box-shadow: 0px 0px 0px 10px white;
    }
    ion-item[custom-palette].item-has-value ion-label,
    ion-item[custom-palette].item-has-focus ion-label {
      transform: translateZ(0) translateY(2px) translateX(2px) scale(.8) !important;
    }
    ion-item[custom-palette] ion-input input {
      margin-left: 16px;
      margin-top: -2px;
    }
    ion-item[custom-palette] ion-select {
      padding-left: 16px;
      margin-top: -2px;
    }
    html.md ion-item[custom-palette].item-label-floating ion-label {
      margin-left: 6px;
      margin-bottom: 3px;
    }
  `;
        this.shadowCustomCss = `
    .item-native {
      border: none;
      padding: 0px;
    }
    .item-native:after {
      content: ' ';
      position: absolute;
      z-index: 1;
      left: 0px;
      bottom: -10px;
      height: 54px;
      width: calc(100% - 2px);
      border: 1px solid #ddd;
      margin-top: 20px;
      margin-bottom: 10px;
      border-radius: 3px;
    }
    .item-native .item-inner {
      margin-bottom: 8px;
      border: 0px;
    }
    .item-highlight {
      display: none !important;
    }
  `;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.el.nativeElement.querySelector('ion-label').setAttribute('position', 'floating');
        this.setShadowStyle(this.getShadow());
        this.setComponentStyle();
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
     * @param {?} shadow
     * @return {?}
     */
    setShadowStyle(shadow) {
        if (shadow) {
            shadow.innerHTML += `<style>${this.shadowCustomCss}</style>`;
        }
    }
    /**
     * @private
     * @return {?}
     */
    setComponentStyle() {
        /** @type {?} */
        const tagId = this.el.nativeElement.nodeName.toLowerCase() + '-component-style';
        if (document.getElementById(tagId)) {
            return;
        }
        /** @type {?} */
        const style = document.createElement('style');
        style.type = 'text/css';
        style.id = tagId;
        style.appendChild(document.createTextNode(this.componentCss));
        document.head.appendChild(style);
    }
}
IonItemDirective.decorators = [
    { type: Directive, args: [{
                selector: `ion-item[custom-palette]`
            },] }
];
/** @nocollapse */
IonItemDirective.ctorParameters = () => [
    { type: ElementRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    IonItemDirective.prototype.componentCss;
    /**
     * @type {?}
     * @private
     */
    IonItemDirective.prototype.shadowCustomCss;
    /**
     * @type {?}
     * @private
     */
    IonItemDirective.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9pb24taXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzlELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUE2RDNCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBM0QxQixpQkFBWSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4QnRCLENBQUM7UUFFTSxvQkFBZSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJ6QixDQUFDO0lBRW1DLENBQUM7Ozs7SUFFdEMsUUFBUTtRQUNOLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLE1BQU07UUFDM0IsSUFBSSxNQUFNLEVBQUU7WUFBRSxNQUFNLENBQUMsU0FBUyxJQUFJLFVBQVUsSUFBSSxDQUFDLGVBQWUsVUFBVSxDQUFDO1NBQUU7SUFDL0UsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7O2NBQ2pCLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsa0JBQWtCO1FBQy9FLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUFFLE9BQU87U0FBRTs7Y0FDekMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUM5RCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUF4RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7YUFDckM7Ozs7WUFKMkIsVUFBVTs7Ozs7OztJQU9wQyx3Q0E4QkU7Ozs7O0lBRUYsMkNBeUJFOzs7OztJQUVVLDhCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYGlvbi1pdGVtW2N1c3RvbS1wYWxldHRlXWBcbn0pXG5leHBvcnQgY2xhc3MgSW9uSXRlbURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBjb21wb25lbnRDc3MgPSBgXG4gICAgaW9uLWl0ZW1bY3VzdG9tLXBhbGV0dGVdIGlvbi1sYWJlbCB7XG4gICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWl0ZW1bY3VzdG9tLXBhbGV0dGVdIGlvbi1sYWJlbDo6Zmlyc3QtbGluZSB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDEwcHggd2hpdGU7XG4gICAgfVxuICAgIGlvbi1pdGVtW2N1c3RvbS1wYWxldHRlXS5pdGVtLWhhcy12YWx1ZSBpb24tbGFiZWwsXG4gICAgaW9uLWl0ZW1bY3VzdG9tLXBhbGV0dGVdLml0ZW0taGFzLWZvY3VzIGlvbi1sYWJlbCB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgdHJhbnNsYXRlWSgycHgpIHRyYW5zbGF0ZVgoMnB4KSBzY2FsZSguOCkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgaW9uLWl0ZW1bY3VzdG9tLXBhbGV0dGVdIGlvbi1pbnB1dCBpbnB1dCB7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgfVxuICAgIGlvbi1pdGVtW2N1c3RvbS1wYWxldHRlXSBpb24tc2VsZWN0IHtcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgfVxuICAgIGh0bWwubWQgaW9uLWl0ZW1bY3VzdG9tLXBhbGV0dGVdLml0ZW0tbGFiZWwtZmxvYXRpbmcgaW9uLWxhYmVsIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgfVxuICBgO1xuXG4gIHByaXZhdGUgc2hhZG93Q3VzdG9tQ3NzID0gYFxuICAgIC5pdGVtLW5hdGl2ZSB7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5pdGVtLW5hdGl2ZTphZnRlciB7XG4gICAgICBjb250ZW50OiAnICc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgbGVmdDogMHB4O1xuICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgIGhlaWdodDogNTRweDtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cbiAgICAuaXRlbS1uYXRpdmUgLml0ZW0taW5uZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgYm9yZGVyOiAwcHg7XG4gICAgfVxuICAgIC5pdGVtLWhpZ2hsaWdodCB7XG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lvbi1sYWJlbCcpLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCAnZmxvYXRpbmcnKTtcbiAgICB0aGlzLnNldFNoYWRvd1N0eWxlKHRoaXMuZ2V0U2hhZG93KCkpO1xuICAgIHRoaXMuc2V0Q29tcG9uZW50U3R5bGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2hhZG93KCkge1xuICAgIHJldHVybiB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc2hhZG93Um9vdCB8fCB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTaGFkb3dTdHlsZShzaGFkb3cpIHtcbiAgICBpZiAoc2hhZG93KSB7IHNoYWRvdy5pbm5lckhUTUwgKz0gYDxzdHlsZT4ke3RoaXMuc2hhZG93Q3VzdG9tQ3NzfTwvc3R5bGU+YDsgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb21wb25lbnRTdHlsZSgpIHtcbiAgICBjb25zdCB0YWdJZCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICsgJy1jb21wb25lbnQtc3R5bGUnO1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWdJZCkpIHsgcmV0dXJuOyB9XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIHN0eWxlLmlkID0gdGFnSWQ7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5jb21wb25lbnRDc3MpKTtcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG59XG4iXX0=