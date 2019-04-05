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
                selector: `[custom-palette]`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWl0ZW0uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG9rb2RlL25neC1jdXN0b20tcGFsZXR0ZS8iLCJzb3VyY2VzIjpbImxpYi9pb24taXRlbS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzlELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUE2RDNCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBM0QxQixpQkFBWSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4QnRCLENBQUM7UUFFTSxvQkFBZSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBeUJ6QixDQUFDO0lBRW1DLENBQUM7Ozs7SUFFdEMsUUFBUTtRQUNOLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2YsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUFDLE1BQU07UUFDM0IsSUFBSSxNQUFNLEVBQUU7WUFBRSxNQUFNLENBQUMsU0FBUyxJQUFJLFVBQVUsSUFBSSxDQUFDLGVBQWUsVUFBVSxDQUFDO1NBQUU7SUFDL0UsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7O2NBQ2pCLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsa0JBQWtCO1FBQy9FLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUFFLE9BQU87U0FBRTs7Y0FDekMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLEtBQUssQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUM5RCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUF4RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7Ozs7WUFKMkIsVUFBVTs7Ozs7OztJQU9wQyx3Q0E4QkU7Ozs7O0lBRUYsMkNBeUJFOzs7OztJQUVVLDhCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogYFtjdXN0b20tcGFsZXR0ZV1gXG59KVxuZXhwb3J0IGNsYXNzIElvbkl0ZW1EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgY29tcG9uZW50Q3NzID0gYFxuICAgIGlvbi1pdGVtW2N1c3RvbS1wYWxldHRlXSBpb24tbGFiZWwge1xuICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1pdGVtW2N1c3RvbS1wYWxldHRlXSBpb24tbGFiZWw6OmZpcnN0LWxpbmUge1xuICAgICAgY29udGVudDogJyAnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxMHB4IHdoaXRlO1xuICAgIH1cbiAgICBpb24taXRlbVtjdXN0b20tcGFsZXR0ZV0uaXRlbS1oYXMtdmFsdWUgaW9uLWxhYmVsLFxuICAgIGlvbi1pdGVtW2N1c3RvbS1wYWxldHRlXS5pdGVtLWhhcy1mb2N1cyBpb24tbGFiZWwge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHRyYW5zbGF0ZVkoMnB4KSB0cmFuc2xhdGVYKDJweCkgc2NhbGUoLjgpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGlvbi1pdGVtW2N1c3RvbS1wYWxldHRlXSBpb24taW5wdXQgaW5wdXQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgIH1cbiAgICBpb24taXRlbVtjdXN0b20tcGFsZXR0ZV0gaW9uLXNlbGVjdCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgIH1cbiAgICBodG1sLm1kIGlvbi1pdGVtW2N1c3RvbS1wYWxldHRlXS5pdGVtLWxhYmVsLWZsb2F0aW5nIGlvbi1sYWJlbCB7XG4gICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIH1cbiAgYDtcblxuICBwcml2YXRlIHNoYWRvd0N1c3RvbUNzcyA9IGBcbiAgICAuaXRlbS1uYXRpdmUge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cbiAgICAuaXRlbS1uYXRpdmU6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyAnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIGxlZnQ6IDBweDtcbiAgICAgIGJvdHRvbTogLTEwcHg7XG4gICAgICBoZWlnaHQ6IDU0cHg7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB9XG4gICAgLml0ZW0tbmF0aXZlIC5pdGVtLWlubmVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIGJvcmRlcjogMHB4O1xuICAgIH1cbiAgICAuaXRlbS1oaWdobGlnaHQge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgYDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpb24tbGFiZWwnKS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgJ2Zsb2F0aW5nJyk7XG4gICAgdGhpcy5zZXRTaGFkb3dTdHlsZSh0aGlzLmdldFNoYWRvdygpKTtcbiAgICB0aGlzLnNldENvbXBvbmVudFN0eWxlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFNoYWRvdygpIHtcbiAgICByZXR1cm4gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNoYWRvd1Jvb3QgfHwgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2hhZG93U3R5bGUoc2hhZG93KSB7XG4gICAgaWYgKHNoYWRvdykgeyBzaGFkb3cuaW5uZXJIVE1MICs9IGA8c3R5bGU+JHt0aGlzLnNoYWRvd0N1c3RvbUNzc308L3N0eWxlPmA7IH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29tcG9uZW50U3R5bGUoKSB7XG4gICAgY29uc3QgdGFnSWQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSArICctY29tcG9uZW50LXN0eWxlJztcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFnSWQpKSB7IHJldHVybjsgfVxuICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICBzdHlsZS5pZCA9IHRhZ0lkO1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMuY29tcG9uZW50Q3NzKSk7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxufVxuIl19