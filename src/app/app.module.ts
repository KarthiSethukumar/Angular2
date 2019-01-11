import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

// Custom Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserpageComponent } from './userpage/userpage.component';

// Custom Services
import { LocalStorageSetupService } from './_services/localStorageSetup/local-storage-setup.service';

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent},
  { path: 'Login', component: LoginComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'Userpage', component: UserpageComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent }
  // { path: '', redirectTo: '/Login', pathMatch: 'full'},
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    UserpageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    LocalStorageSetupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
