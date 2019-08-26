import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
import { ProductdataService } from "../productdata.service";
import { Product } from "../product";

@Component({
  selector: "app-addproductreactive",
  templateUrl: "./addproductreactive.component.html",
  styleUrls: ["./addproductreactive.component.css"]
})
export class AddproductreactiveComponent implements OnInit {
  constructor(private fb: FormBuilder, private _data: ProductdataService) {}
  product: FormGroup;

  ngOnInit() {
    this.product = this.fb.group({
      product_id: new FormControl(null, Validators.required),
      product_name: new FormControl(null, Validators.required),
      product_price: new FormControl(null, Validators.required),
      product_description: new FormControl(null, Validators.required),
      product_quantity: new FormControl(null, Validators.required),
      product_mfg: new FormControl(null),
      product_img_path: new FormControl(null)
    });
  }

  // onsubmit() {
  //   this._data
  //     .addProduct(
  //       new Product(
  //         this.product.value.product_id,
  //         this.product.value.product_name,
  //         this.product.value.product_price,
  //         this.product.value.product_description,
  //         this.product.value.product_quantity,
  //         this.product.value.product_mfg,
  //         this.product.value.product_img_path
  //       )
  //     )
  //     .subscribe((x: any) => {
  //       alert("record added");
  //     });
  // }
}
