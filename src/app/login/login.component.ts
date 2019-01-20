import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { CustomerService } from '../shared/customer.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth, private router: Router, private customerService: CustomerService) { }
  public email: string = '';
  public password: string = '';
  ngOnInit() {
  }

  onLogin(): void {
    this.customerService.loginEmailUser(this.email, this.password)
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLoginGoogle(): void {
    this.customerService.loginGoogleUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }
  onLoginFacebook(): void {
    this.customerService.loginFacebookUser()
      .then((res) => {
        this.onLoginRedirect();
      }).catch(err => console.log('err', err.message));
  }

  onLogout() {
    this.customerService.logoutUser();
  }
  onLoginRedirect(): void {
    this.router.navigate(['admin/list-books']);
  }
}
