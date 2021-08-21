import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:9000/api/';
  public flag: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient) { }
  loginService(user: any) {
    return this.http.post(this.url + 'login', user);
  }
  registerService(user: any) {
    return this.http.post(this.url + 'register', user);
  }

  login() {
    this.flag.next(true);
    console.log(this.flag);
  }

  display() {
    //let flag=true
    //console.log(this.flag)
    return this.flag.asObservable();
  }

  logout() {
    this.flag.next(false);
  }

}
