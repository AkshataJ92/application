import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { endpoints } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
url:string=endpoints.url+"users/";
  constructor(private _http:HttpClient, private _router:Router) { }

  private handleError(ex:HttpErrorResponse){
    if(ex.error instanceof ErrorEvent){
      console.log('client side error',ex.message);
    }
    else{
      console.log('server side error',ex.message);
    }
    return throwError('something went wrong');
  }

  getAllUsers(){
    return this._http.get(this.url).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  getUserByEmail(user_email) {
    return this._http.get(this.url+user_email);
  }

  addUser(item){
    //let head=new HttpHeaders().set("Content-Type","application/json");
    let body=JSON.stringify(item);
    return this._http.post(this.url,body,{headers:null}).pipe(
      catchError(this.handleError)
    );
  }
  editUser(item){
    //let head=new HttpHeaders().set("Content-Type","application/json");
    let body=JSON.stringify(item);
    return this._http.put(this.url+item.user_email,body,{headers:null}).pipe(
      catchError(this.handleError)
    );
  }
  deleteUser(user_email) {
    //let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.delete(this.url + user_email,{headers:null}).pipe(
      catchError(this.handleError)
    );
  }


  currentUser;
  redirectURL:string;
  login(user_email:string,user_password:string){
    if(user_email=="admin" && user_password=="1234"){
      this.currentUser={
        email:user_email,
        password:user_password,
        isAdmin:true
      };
      return;
    }
    this.currentUser={
      email:user_email,
      password:user_password,
      isAdmin:false
    };
  }

  logout(){
    this.currentUser=null;
    this.redirectURL='';
    this._router.navigate(['']);
  }

  get isLoggedIn():boolean{
    return !!this.currentUser;
  }


}
