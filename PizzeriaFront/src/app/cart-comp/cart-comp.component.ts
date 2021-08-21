import { Component, Input, OnInit } from '@angular/core';
import { CartService } from './../cart.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart-comp',
  templateUrl: './cart-comp.component.html',
  styleUrls: ['./cart-comp.component.css'],
})
export class CartCompComponent implements OnInit {
  // cart: any;
  @Input() cart: any;
  tot: number = 0;
  totIngredient: number = 0;
  // totPerPizza: object={}

  constructor(
    private cartservice: CartService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cartservice.getCart().subscribe((data) => {
      // console.log(data);
      this.cart = data;
      this.cart.map((item: any) => {
        this.tot += item.price * item.qty;
      });
    });
  }
  qtyIncrease(pizza: any) {
    this.cart.forEach((item: any) => {
      if (pizza.id == item.id) {
        item.qty += 1;
        this.tot += item.price;
      }
    });
  }

  qtyDecrease(pizza: any) {
    this.cart.forEach((item: any) => {
      if (pizza.id == item.id && pizza.qty > 1) {
        item.qty -= 1;
        this.tot -= item.price;
      }
    });
  }

  deletePizza(id: any) {
    //removing the amount added to the total
    this.cart.forEach((item: any) => {
      if (item._id == id) {
        this.tot -= item.price * item.qty;
      }
    });
    //removing the pizza itself
    this.cartservice.deleteItem(id).subscribe({
      next: () => {
        console.log('Item deleted from cart');
        this.cartservice.getCart().subscribe((data) => {
          this.cart = data;
        });
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      },
    });
  }

  getTotPriceIngredients(price: any) {
    console.log(price);
    this.totIngredient = Number(price);
    // this.totPerPizza.price=
  }
}
