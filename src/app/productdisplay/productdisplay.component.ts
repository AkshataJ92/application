import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductdataService } from './productdata.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-productdisplay',
  templateUrl: './productdisplay.component.html',
  styleUrls: ['./productdisplay.component.css']
})
export class ProductdisplayComponent implements OnInit {
  name:string='watch';
arr:Product[]=[];
  constructor(private _data:ProductdataService,private _router:Router) {}

  ngOnInit() {
    this._data.getAllProducts().subscribe(
      (data:Product[])=>{
      this.arr=data;
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
    this._router.navigate(['/editproduct',item.pro_id]);
  }
}

