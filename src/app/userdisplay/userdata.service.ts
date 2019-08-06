import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
url:string="https://nodejsapidemo.herokuapp.com/users/";
  constructor(private _http:HttpClient) { }

  getAllUsers(){
    return this._http.get(this.url);
  }
  getUserByEmail(user_email) {
    return this._http.get(this.url+user_email);
  }

  addUser(item){
    let head=new HttpHeaders().set("Content-Type","application/json");
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:head});
  }
  editUser(item){
    let head=new HttpHeaders().set("Content-Type","application/json");
    let body=JSON.stringify(item);
    return this._http.put(this.url+item.user_email,body,{headers:head});
  }
  deleteUser(user_email) {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.delete(this.url + user_email, { headers: head });
  }
}
