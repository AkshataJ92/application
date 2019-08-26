import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittaskreactiveComponent } from './edittaskreactive.component';

describe('EdittaskreactiveComponent', () => {
  let component: EdittaskreactiveComponent;
  let fixture: ComponentFixture<EdittaskreactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittaskreactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittaskreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
