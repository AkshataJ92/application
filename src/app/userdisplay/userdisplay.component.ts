import { Component, OnInit } from '@angular/core';
import { UserdataService } from './userdata.service';
import { User } from './user';
import { Router } from "@angular/router";

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {
arr:User[]=[];
  constructor(private _data:UserdataService, private _router:Router) { }

  ngOnInit() {
    this._data.getAllUsers().subscribe(
      (data:User[])=>{
      this.arr=data;
      }
    );
  }
  onUserDelete(item:User){
    this._data.deleteUser(item.user_email).subscribe(
      (data:any)=>{
        this.arr.splice(this.arr.indexOf(item),1);
        alert('deleted');
      }
    );
  }
  onUserEdit(item:User){
    this._router.navigate(['/user/edituser',item.user_email]);
  }
  onEditUserReactive(item:User){
    this._router.navigate(['/edituserreactive',item.user_email]);
  }
}
