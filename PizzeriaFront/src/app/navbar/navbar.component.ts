import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router';
import { CartService } from './../cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public flag: any;
  cart: any;
  constructor(
    private userservice: UserService,
    private cartservice: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userservice.display().subscribe((res) => {
      this.flag = res;
    });
    this.cartservice.getCart().subscribe((data: any) => {
      // console.log(data);
      this.cart = data;
    });
  }
  logout() {
    this.userservice.logout();
    this.router.navigate(['']);
  }
  refresh() {
    this.cartservice.getCart().subscribe((data: any) => {
      // console.log(data);
      this.cart = data;
    });
  }
}
