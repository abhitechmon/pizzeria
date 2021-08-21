import { Component } from '@angular/core';
import { UserService } from './../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user: any;
  reg: any;
  constructor(private userservice: UserService) {}

  onClickSubmit(data: any) {
    // console.log(data)
    this.userservice.registerService(data).subscribe({
      next: (res) => {
        // console.log('Registration Success', res);
        this.reg = res;
      },
      error: (error: any) => {
        // console.error('There was an error in registering!', error);
      },
    });
  }
}
