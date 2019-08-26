import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProductdisplayComponent } from './productdisplay.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

import { productrouting } from './product.routing';
import { AddproductreactiveComponent } from './addproductreactive/addproductreactive.component';




@NgModule({
  declarations:[
    ProductdisplayComponent,
    ProductaddComponent,
    EditproductComponent,
    SidebarComponent,
    AddproductreactiveComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    productrouting
  ]
})

export class ProductModule { }
