import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginModel = {
    username: '',
    password: '',
  };
  private usersArr: any = [];
  public loginForm;
  public username;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(form) {
    console.log(form.value);
    console.log(form.value.username);
    console.log(form.value.password);

    this.usersArr = localStorage.getItem('Users');
    this.usersArr = JSON.parse(this.usersArr);
    console.log('localstorage', this.usersArr);
    if(this.usersArr != 'undefined') {
      this.usersArr.forEach((obj) => {
        if (obj.email == this.loginModel.username) {
          this.router.navigate(['/Signup']);
        } else {
          // this.username.errors.mismatch =  true;
        }
      });
    }


  }


}
