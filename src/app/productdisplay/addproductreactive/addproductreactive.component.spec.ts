import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductreactiveComponent } from './addproductreactive.component';

describe('AddproductreactiveComponent', () => {
  let component: AddproductreactiveComponent;
  let fixture: ComponentFixture<AddproductreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproductreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
