import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class LocalStorageSetupService {
  private usersArray: any = [];
  constructor(private router: Router) { }

  createUser(newUsers): void {
    const newUser: any = newUsers;
    console.log('newUser', newUser);
    this.checkInDB(newUser, 'signup');
  }

  login(curUser): void {
    this.checkInDB(curUser, 'login');
  }

  checkInDB(user: any, loginType: string): void {
    if (typeof(Storage) !== 'undefined') {
      let getUsersArray = localStorage.getItem('Users');
      console.log('localstorage_1', getUsersArray);
      if (getUsersArray !== undefined && getUsersArray !== null) {
        this.usersArray = JSON.parse(getUsersArray);
        console.log('localstorage_2', this.usersArray);
        if (loginType === 'signup') {
          this.usersArray.forEach((obj) => {
            if (obj.email !== user.email) {
              this.usersArray.push(user);
              localStorage.setItem('Users', JSON.stringify(this.usersArray));
              this.router.navigate(['/Userpage']);
            } else {
              this.router.navigate(['/Login']);
              // this.username.errors.mismatch =  true;
            }
          });
        } else {
          this.usersArray.forEach((obj) => {
            if (obj.email == user.username) {
              this.router.navigate(['/Userpage']);
            } else {
              this.router.navigate(['/Signup']);
            }
          });
        }
      } else {
        if (loginType === 'signup') {
          this.usersArray.push(user);
          localStorage.setItem('Users', JSON.stringify(this.usersArray));
          this.router.navigate(['/Login']);
        } else {
          console.log('User Doesnt exists');
          this.router.navigate(['/Signup']);
        }
      }
    }
  }
}
