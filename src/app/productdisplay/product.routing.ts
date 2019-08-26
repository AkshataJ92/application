import { ProductdisplayComponent } from './productdisplay.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { RouterModule, Routes } from '@angular/router';
import { AddproductreactiveComponent } from './addproductreactive/addproductreactive.component';


const arr:Routes=[
{path:'', children:[
  {path:'', component:ProductdisplayComponent},
  {path:'productadd', component:ProductaddComponent},
  {path:'editproduct/:pro_id', component:EditproductComponent},
  {path:'addproductreactive', component:AddproductreactiveComponent}
]}
];

export const productrouting=RouterModule.forChild(arr);
