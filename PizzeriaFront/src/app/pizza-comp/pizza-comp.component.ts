import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza.service';
import { CartService } from './../cart.service';
@Component({
  selector: 'app-pizza-comp',
  templateUrl: './pizza-comp.component.html',
  styleUrls: ['./pizza-comp.component.css'],
})
export class PizzaCompComponent implements OnInit {
  pizzas: any;
  searchText: any;

  constructor(
    private pizzaservice: PizzaService,
    private cartservice: CartService
  ) {}

  ngOnInit(): void {
    this.pizzaservice.getPizza().subscribe((data) => {
      // console.log(data);
      this.pizzas = data;
      this.pizzas.forEach(function (element: any) {
        element.qty = 1;
      });
    });
  }

  addToCart(item: any) {
    // console.log(item);
    this.cartservice.addCartApi(item).subscribe({
      next: () => {
        console.log('Item added to cart');
      },
      error: (error: any) => {
        console.error('There was an error!', error);
      },
    });
  }
}
