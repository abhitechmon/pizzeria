import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  url: string = 'http://localhost:9000/api/pizzas';
  constructor(private http: HttpClient) {}
  getPizza() {
    return this.http.get(this.url);
  }
}
