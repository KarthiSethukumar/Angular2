import { FormGroup, AbstractControl } from '@angular/forms';

export class PasswordValidation {
    static checkMatch(formGroup: AbstractControl) {
    //    const passwrd = formGroup.controls.password.value; // to get value in input tag
    //    const confirmPasswrd = formGroup.controls.confirmPassword.value; // to get value in input tag
       const passwrd = formGroup.get('password').value; // to get value in input tag
       const confirmPasswrd = formGroup.get('confirmPassword').value; // to get value in input tag
       console.log('passwrd', passwrd);
       console.log('confirmPasswrd', confirmPasswrd);

        if (passwrd !== confirmPasswrd) {
            console.log('false');
            formGroup.get('confirmPassword').setErrors({mismatch: true});
        } else {
            console.log('true');
            return null;
        }
    }
  }
