import { FormGroup, AbstractControl } from '@angular/forms';

export class PasswordValidation {
    static MatchPassword(controle: FormGroup) {
       const passwrd = controle.get('password'); // to get value in input tag
       const confirmPasswrd = controle.get('confirmPassword'); // to get value in input tag
       console.log('passwrd', passwrd);
       console.log('confirmPasswrd', confirmPasswrd);

        if (passwrd !== confirmPasswrd) {
            console.log('false');
            controle.get('confirmPassword').setErrors( {mismatch: true} );
        } else {
            console.log('true');
            return null;
        }
    }
  }
