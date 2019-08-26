
import { RouterModule, Routes } from '@angular/router';
import { TaskdisplayComponent } from './taskdisplay.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { EdittaskComponent } from './edittask/edittask.component';
import { AddtaskreactiveComponent } from './addtaskreactive/addtaskreactive.component';
import { EdittaskreactiveComponent } from './edittaskreactive/edittaskreactive.component';



const arr:Routes=[
{path:'', children:[
  {path:'', component:TaskdisplayComponent},
  {path:'addtask', component:AddtaskComponent},
  {path:'edittask/:Id', component:EdittaskComponent},
  {path:'addtaskreactive', component:AddtaskreactiveComponent},
  {path:'edittaskreactive/:Id', component:EdittaskreactiveComponent}
]}
];

export const taskrouting=RouterModule.forChild(arr);
