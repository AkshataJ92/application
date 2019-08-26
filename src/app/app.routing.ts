import {Routes, RouterModule, PreloadAllModules  } from "@angular/router";
import { CustomerComponent } from './customer/customer.component';
import { SignupreactiveComponent } from './userdisplay/signupreactive/signupreactive.component';
import { EdituserreactiveComponent } from './userdisplay/edituserreactive/edituserreactive.component';
import { LoginComponent } from './login/login.component';
import { UserGaurdService } from './user-gaurd.service';
import { DemoComponent } from './demo/demo.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { Product1Component } from './product1/product1.component';
import { ProductResolverService } from './product-resolver.service';
import { UserResolverService } from './user-resolver.service';
import { User1Component } from './user1/user1.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppCustomPreloader } from './appcustompreloader';
import { TaskResolverService } from './task-resolver.service';

const arr:Routes=[
  {path:"",  component:HomepageComponent},
  {path:"customer",  component:CustomerComponent},
  {path:'edituserreactive/:user_email',component:EdituserreactiveComponent},
  {path:'login', component:LoginComponent},
  {path:'productdisplay', data:{preload:true}, loadChildren:'./productdisplay/product.module#ProductModule'},
  {path:'user', canLoad:[UserGaurdService],loadChildren:'./userdisplay/user.module#UserModule'},
  {path:'task',resolve:{tdata:TaskResolverService} ,canLoad:[UserGaurdService],loadChildren:'./taskdisplay/task.module#TaskModule'},
  {path:'signupreactive', component:SignupreactiveComponent},
  {path:'demo', component:DemoComponent},
  {path:'demo1/:id', component:Demo1Component},
  {path:'demo2', component:Demo2Component},
  {path:"product1", resolve:{pdata:ProductResolverService}, component:Product1Component},
  {path:"user1", resolve:{uData:UserResolverService}, component:User1Component}

];

export const routing=RouterModule.forRoot(arr,{preloadingStrategy:AppCustomPreloader});
