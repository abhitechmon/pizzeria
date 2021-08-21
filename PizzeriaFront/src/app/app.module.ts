import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { PizzaCompComponent } from './pizza-comp/pizza-comp.component';
import { IngredientCompComponent } from './ingredient-comp/ingredient-comp.component';

import { PizzaService } from './pizza.service';
import { IngredientService } from './ingredient.service';
import { FooterComponent } from './footer/footer.component';
import { CartCompComponent } from './cart-comp/cart-comp.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeCompComponent,
    PizzaCompComponent,
    IngredientCompComponent,
    FooterComponent,
    CartCompComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, Ng2SearchPipeModule],
  providers: [PizzaService, IngredientService],
  bootstrap: [AppComponent],
})
export class AppModule { }
