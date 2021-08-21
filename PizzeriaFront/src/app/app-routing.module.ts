import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { IngredientCompComponent } from './ingredient-comp/ingredient-comp.component';
import { PizzaCompComponent } from './pizza-comp/pizza-comp.component';
import { CartCompComponent } from './cart-comp/cart-comp.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeCompComponent },
  { path: 'pizza-comp', component: PizzaCompComponent },
  { path: 'ingredient-comp', component: IngredientCompComponent },
  { path: 'cart-comp', component: CartCompComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
