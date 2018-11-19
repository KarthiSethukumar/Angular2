import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { PasswordValidation } from './../_validator/PasswordValidation';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private usersArr: any = [];
  public signupForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('123456', [Validators.required]),
    confirmPassword: new FormControl('123456', [Validators.required]),
    // passgroup: new FormGroup({
    //   password: new FormControl('123456', [Validators.required, PasswordValidation.MatchPassword]),
    //   confirmPassword: new FormControl('123456', [Validators.required, PasswordValidation.MatchPassword]),
    // }),
  });

  constructor() { }

  ngOnInit() {
  }

  get signupFormControl() {
    return this.signupForm.controls;
  }

  signUp(form) {
    this.usersArr.push(form.value);
    console.log(this.usersArr);
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('Users', JSON.stringify(this.usersArr));
      // document.getElementById("result").innerHTML = localStorage.getItem("Users");
    }
  }
  // this.signupForm.get('email').setValidators(Validators.email);

  // get primaryEmail() {
    // return this.userForm.get('primaryEmail');
  // }

 /* <div *ngIf="primaryEmail.errors?.email">
     Primary Email not valid.
</div> */
}

