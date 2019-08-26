import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from './product';
import { ProductdataService } from './productdata.service';
import { Router } from "@angular/router";
// import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ProductdisplayComponent implements OnInit {
  name:string='watch';
arr:Product[]=[];
loading:boolean=true;
  constructor(private _data:ProductdataService,private _router:Router) {}

  ngOnInit() {
    this.loading=true;
    this._data.getAllProducts().subscribe(
      (data:Product[])=>{
      this.arr=data;
      this.loading=false;
      },
      function(error) {
        alert(Error);
      },
      function() {}
    );
  }
  onSideBarClick(value) {
    if (value != "") {
      this.arr = this.arr.filter(x => x.pro_name.indexOf(value) != -1);
    } else {
      this._data.getAllProducts().subscribe(
        (data: Product[]) => {
          this.arr = data;
        },
        function(error) {
          alert(error);
        },
        function() {}
      );
    }
  }
  onUserDelete(item:Product){
    this._data.deleteUser(item.pro_id).subscribe(
      (data:any)=>{
        this.arr.splice(this.arr.indexOf(item),1);
        alert('deleted');
      }
    );
  }
  onProductEdit(item:Product){
    this._router.navigate(['/productdisplay/editproduct',item.pro_id]);
  }
}

