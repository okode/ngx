import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogsPage } from './dialogs.page';

describe('DialogsPage', () => {
  let component: DialogsPage;
  let fixture: ComponentFixture<DialogsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
