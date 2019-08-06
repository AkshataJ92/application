import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { ProductdisplayComponent } from './productdisplay/productdisplay.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductaddComponent } from './productdisplay/productadd/productadd.component';
import { UserdisplayComponent } from './userdisplay/userdisplay.component';
import { SignupComponent } from './userdisplay/signup/signup.component';
import { EdituserComponent } from './userdisplay/edituser/edituser.component';
import { EditproductComponent } from './productdisplay/editproduct/editproduct.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
//import { TasksidebarComponent } from './taskdisplay/tasksidebar/tasksidebar.component';
import { TasksidebarComponent } from './tasksidebar/tasksidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductdisplayComponent,
    MenuComponent,
    SidebarComponent,
    ProductaddComponent,
    UserdisplayComponent,
    SignupComponent,
    EdituserComponent,
    EditproductComponent,
    TaskdisplayComponent,
    AddtaskComponent,
    EdittaskComponent,
    TasksidebarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
