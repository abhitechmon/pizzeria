import { Component } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: any;
  loginStatus: any;
  constructor(private userservice: UserService, private router: Router) {}

  onClickSubmit(data: any) {
    // console.log(data)
    this.userservice.loginService(data).subscribe({
      next: (res) => {
        console.log('Login Success', res);
        this.userservice.login();
        this.router.navigate(['']);
      },
      error: (error: any) => {
        console.error('There was an error in logging!', error);
      },
    });
  }
}
