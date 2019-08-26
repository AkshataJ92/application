import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { UserdataService } from '../userdisplay/userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:FormGroup;
  constructor(private fb:FormBuilder, private _data:UserdataService,private _route:Router) { }

  ngOnInit() {
    this.login=this.fb.group({
      user_email:new FormControl(),
      user_password:new FormControl()
    });
  }

  onLoginSubmit(){
    this._data.login(this.login.value.user_email,this.login.value.user_password);

    if(this._data.redirectURL){
      this._route.navigateByUrl(this._data.redirectURL);
    } else{
    this._route.navigate(['/user']);
  }
}

}
