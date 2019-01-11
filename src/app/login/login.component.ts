import { Component, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';

import { LocalStorageSetupService } from './../_services/localStorageSetup/local-storage-setup.service';
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

  public loginForm;
  constructor(private _LocalStorageSetupService: LocalStorageSetupService, private activatedRoute: ActivatedRoute) { 
    const id: string = activatedRoute.snapshot.params.id;
    const url: string = activatedRoute.snapshot.url.join('');
    const user = activatedRoute.snapshot.data.user;

  }

  ngOnInit() {
    console.log(this.activatedRoute.params)
    // this.activatedRoute.url.
    // .subscribe(url => console.log('The URL changed to: ' + url));
  }

  login(form) {
    console.log(form.value);
    // console.log(form.value.username);
    // console.log(form.value.password);
    this._LocalStorageSetupService.login(form.value);
  }


}
