import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {
  url: string = 'http://localhost:9000/api/ingredient';
  constructor(private http: HttpClient) {}
  getIngredient() {
    return this.http.get(this.url);
  }
}
