import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IngredientService } from '../ingredient.service';

@Component({
  selector: 'app-ingredient-comp',
  templateUrl: './ingredient-comp.component.html',
  styleUrls: ['./ingredient-comp.component.css'],
})
export class IngredientCompComponent implements OnInit {
  @Output() getTotPriceIngredients: EventEmitter<Number> = new EventEmitter();
  ingredients: any;
  tot: number = 0;
  search: any;

  constructor(private ingredientservice: IngredientService) {}

  ngOnInit(): void {
    this.ingredientservice.getIngredient().subscribe((data) => {
      // console.log(data);
      this.ingredients = data;
      this.ingredients.forEach(function (element: any) {
        element.checked = false;
      });
      // console.log(this.ingredients);
    });
  }

  checkPrice($event: any) {
    const id = $event.target.value;
    this.ingredients.forEach((item: any) => {
      if (id == item.id) item.checked = !item.checked;
    });
    this.tot = 0;
    this.ingredients.map((item: any) => {
      if (item.checked == true) this.tot += item.price;
    });

    this.getTotPriceIngredients.emit(this.tot);
  }
}
