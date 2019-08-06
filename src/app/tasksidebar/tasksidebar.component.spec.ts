import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksidebarComponent } from './tasksidebar.component';

describe('TasksidebarComponent', () => {
  let component: TasksidebarComponent;
  let fixture: ComponentFixture<TasksidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
