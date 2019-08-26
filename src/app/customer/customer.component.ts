import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, AbstractControl, FormGroup, FormArray } from '@angular/forms';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customer: FormGroup;
  invalidName: string[] = ['abcd', 'wxyz'];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.customer = this.fb.group({
      firstname: new FormControl(null, [Validators.required, Validators.minLength(4), this.checkFirstName.bind(this)]),
      lastname: new FormControl(null),
      passwordgroup: new FormGroup({
        password: new FormControl(null, Validators.required),
        confirm_password: new FormControl(null, Validators.required)
      }, this.matchPassword.bind(this)),
      email: new FormControl(),
      mobile_no: new FormControl(),
      notification: new FormControl('email'),
      hobby:new FormArray([])
    });

    this.customer.get('notification').valueChanges.subscribe(
      (x) => {
        let email = this.customer.get('email');
        let mobile_no = this.customer.get('mobile_no');
        if (x == "email") {
          email.setValidators(Validators.required);
          mobile_no.clearValidators();
        }
        else {
          email.clearValidators();
          mobile_no.setValidators(Validators.required);
        }
        email.updateValueAndValidity();
        mobile_no.updateValueAndValidity();
      }
    );

  }

  getControls() {
    return (<FormArray>this.customer.get('hobby')).controls;
 }
//  get controls(){
//    return (this.customer.get('hobby') as FormArray).controls;
//  }//this is same as above function bt it is declared as property by prefixing with get

  checkFirstName(x: AbstractControl): { [y: string]: boolean } {
    let value = x.value;
    if (this.invalidName.indexOf(value) !== -1) {
      return { 'Invalidname': true };
    }
    return null;
  }

  matchPassword(x: AbstractControl): { [y: string]: boolean } {
    let pass = x.get('password').value;
    let confirmpass = x.get('confirm_password').value;
    if (pass != confirmpass) {
      return { 'passwordnotmatched': true };
    }
    return null;
  }

  onSubmit() {
    console.log(this.customer);
  }

  onAddHobbyClick(){
    let control=new FormControl(null,Validators.required);
    (<FormArray> this.customer.get('hobby')).push(control);
  }

  onDeleteHobbyClick(i){
    (<FormArray> this.customer.get('hobby')).removeAt(i);
  }

}
