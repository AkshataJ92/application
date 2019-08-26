import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../productdisplay/product';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {
arr:Product[]=[];
productData:any;
errormessage:string='';
  constructor(private _act:ActivatedRoute) {
    this.productData=this._act.snapshot.data["pdata"];
    console.log(this.productData);
   }

  ngOnInit() {
    this.arr=this.productData.products;
    console.log(this.arr);
    this.errormessage=this.productData.errormsg;
  }

}
