import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  url: string = 'http://localhost:9000/api/cart/';

  constructor(private http: HttpClient) { }
  getCart() {
    return this.http.get(this.url);
  }
  addCartApi(item: any) {
    return this.http.post(this.url + 'add', item);
  }

  deleteItem(id: any) {
    return this.http.delete(this.url + 'delete/' + id);
  }
}
