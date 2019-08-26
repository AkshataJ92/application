import { NgModule } from "@angular/core";
import { EdittaskreactiveComponent } from './edittaskreactive/edittaskreactive.component';
import { TaskdisplayComponent } from './taskdisplay.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { AddtaskreactiveComponent } from './addtaskreactive/addtaskreactive.component';
import { TasksidebarComponent } from '../tasksidebar/tasksidebar.component';
import { CommonModule } from '@angular/common';
import { taskrouting } from './task.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations:[
    TaskdisplayComponent,
    AddtaskComponent,
    EdittaskComponent,
    AddtaskreactiveComponent,
    EdittaskreactiveComponent,
    TasksidebarComponent
],
  imports:[
    CommonModule,
    taskrouting,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class TaskModule{}
