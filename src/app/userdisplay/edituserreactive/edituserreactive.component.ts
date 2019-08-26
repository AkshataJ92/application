import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { UserdataService } from '../userdata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-edituserreactive',
  templateUrl: './edituserreactive.component.html',
  styleUrls: ['./edituserreactive.component.css']
})
export class EdituserreactiveComponent implements OnInit {
  signup:FormGroup;
  email:string;
  displayUser:User;
  constructor(private fb:FormBuilder, private _data:UserdataService, private _act:ActivatedRoute, private _route:Router ) { }

  ngOnInit() {


    this.email=this._act.snapshot.params["user_email"];
    this._data.getUserByEmail(this.email).subscribe((data:User[])=>{
      this.displayUser=data[0];
      this.signup.patchValue({
        user_email:this.displayUser.user_email,
        user_name:this.displayUser.user_name,
        user_mobile_no:this.displayUser.user_mobile_no,
        user_password_group:{
          user_password:this.displayUser.user_password,
          user_confirm_password:this.displayUser.user_password
        }
      });
    } );


    this.signup = this.fb.group({
      user_email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      user_name: new FormControl(null, Validators.required),
      user_password_group: new FormGroup(
        {
          user_password: new FormControl(null, Validators.required),
          user_confirm_password: new FormControl(null, Validators.required)
        },
        this.matchPassword.bind(this)
      ),
      user_mobile_no: new FormControl()
    });

  }

  matchPassword(x: AbstractControl): { [y: string]: boolean } {
    let password = x.get("user_password").value;
    let cnfmpassword = x.get("user_confirm_password").value;
    if (password != cnfmpassword) {
      return { passwordNotMatched: true };
    }
    return null;
  }

  onUserEdit(){
    this._data.editUser(new User(this.signup.value.user_email,this.signup.value.user_name,this.signup.value.user_password_group.user_password,this.signup.value.user_mobile_no)).subscribe(
      (data:any[])=>{
        this._route.navigate(['/userdisplay']);
      }
    );
  }

}
