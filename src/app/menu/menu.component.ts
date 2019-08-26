import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdisplay/userdata.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _data:UserdataService) { }

  ngOnInit() {
  }

  onLogOut(){
    this._data.logout();
  }

  isLoggedIn(){
    return this._data.isLoggedIn;
  }
}
