import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarsPage } from './toolbars.page';

describe('ToolbarsPage', () => {
  let component: ToolbarsPage;
  let fixture: ComponentFixture<ToolbarsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolbarsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
