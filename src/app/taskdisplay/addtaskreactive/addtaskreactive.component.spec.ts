import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtaskreactiveComponent } from './addtaskreactive.component';

describe('AddtaskreactiveComponent', () => {
  let component: AddtaskreactiveComponent;
  let fixture: ComponentFixture<AddtaskreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtaskreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtaskreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
