import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { routing } from "./app.routing";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CustomerComponent } from './customer/customer.component';
import { SignupreactiveComponent } from './userdisplay/signupreactive/signupreactive.component';
import { EdituserreactiveComponent } from './userdisplay/edituserreactive/edituserreactive.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Interceptordemo } from './interceptordemo';
import { Product1Component } from './product1/product1.component';
import { User1Component } from './user1/user1.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppCustomPreloader } from './appcustompreloader';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CustomerComponent,
    SignupreactiveComponent,
    EdituserreactiveComponent,
    LoginComponent,
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Product1Component,
    User1Component,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:Interceptordemo,multi:true},
    AppCustomPreloader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
