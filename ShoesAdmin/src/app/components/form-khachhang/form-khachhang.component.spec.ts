import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormKhachhangComponent } from './form-khachhang.component';

describe('FormKhachhangComponent', () => {
  let component: FormKhachhangComponent;
  let fixture: ComponentFixture<FormKhachhangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormKhachhangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormKhachhangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
