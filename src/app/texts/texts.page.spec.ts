import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextsPage } from './texts.page';

describe('TextsPage', () => {
  let component: TextsPage;
  let fixture: ComponentFixture<TextsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
