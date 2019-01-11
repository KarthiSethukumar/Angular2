import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordValidation } from './../_validator/PasswordValidation';

import { LocalStorageSetupService } from './../_services/localStorageSetup/local-storage-setup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnChanges {
  nameChangeLog: string[] = [];
  public signupForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    passwordgroup: new FormGroup({
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    }, {
      validators : PasswordValidation.checkMatch,
    })
    // password: new FormControl('', [Validators.required]),
    // confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor(private _LocalStorageSetupService: LocalStorageSetupService) { }

  ngOnInit() {
     this.logNameChange();
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  get signupFormControl() {
    return this.signupForm.controls;
  }
  get passGrpControl() {
    return this.signupForm.controls['passwordgroup'].controls;
  }

  logNameChange() {
    const nameControl = this.signupForm.get('firstName');
    nameControl.valueChanges.forEach((value: string) => {
      this.nameChangeLog.push(value);
      console.log(this.nameChangeLog);
    }
    );
  }

  signUp(form) {
    // this.usersArr.push(form.value);
    console.log(form.value);
    this._LocalStorageSetupService.createUser(form.value);
  }
  // this.signupForm.get('email').setValidators(Validators.email);

  // get primaryEmail() {
    // return this.userForm.get('primaryEmail');
  // }

 /* <div *ngIf="primaryEmail.errors?.email">
     Primary Email not valid.
</div> */
}

