import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableKhoComponent } from './table-kho.component';

describe('TableKhoComponent', () => {
  let component: TableKhoComponent;
  let fixture: ComponentFixture<TableKhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableKhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableKhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
