import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdisplay/userdata.service';
import { ActivatedRoute } from '@angular/router';
import { UserResolved, User } from '../userdisplay/user';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  userArr:User[]=[];
  userData:UserResolved;
  errorMessage:String='';
  constructor(private _userdata:UserdataService,private _actroute:ActivatedRoute) {

   this.userData= this._actroute.snapshot.data["uData"];
  }

  ngOnInit() {
      this.userArr=this.userData.data;
      this.errorMessage=this.userData.errorMessage;
  }

}
