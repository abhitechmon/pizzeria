import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCompComponent } from './pizza-comp.component';
import { PizzaService } from './../pizza.service';
import { CartService } from './../cart.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('PizzaCompComponent', () => {
  let component: PizzaCompComponent;
  let fixture: ComponentFixture<PizzaCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PizzaCompComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('pizza not null', () => {
  //   const p = new PizzaCompComponent(PizzaService, CartService);
  //   expect(p.pizzas).toBeTruthy();
  // });

});
