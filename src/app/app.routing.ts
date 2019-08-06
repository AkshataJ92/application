import {Routes, RouterModule  } from "@angular/router";
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupComponent } from './userdisplay/signup/signup.component';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
const arr:Routes=[
  {path:"", component:ProductdisplayComponent},
  {path:"productadd", component:ProductaddComponent},
  {path:"userdisplay", component:UserdisplayComponent},
  {path:"signup", component:SignupComponent},
  {path:'edituser/:user_email',component:EdituserComponent},
  {path:'editproduct/:pro_id',component:EditproductComponent},
  {path:"taskdisplay", component:TaskdisplayComponent},
  {path:"addtask", component:AddtaskComponent},
  {path:'edittask/:Id', component:EdittaskComponent}
];

export const routing=RouterModule.forRoot(arr);
