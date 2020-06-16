import { Injectable } from '@angular/core';
import { HttpClient,   } from '@angular/common/http';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUri = 'http://localhost:3000';
  constructor(private http: HttpClient , private router: Router) {}
  // register
  Register(data) {
    const url = `${this.baseUri}/users/register`;
    console.log(data);
    return this.http.post(url, data);
  }
  Login(data) {
const url = `${this.baseUri}/users/login`;
console.log(data);
this.router.navigateByUrl('/ToDoS');
return this.http.post(url, data) ;

  }
  AddBook(data) {
    const url = `${this.baseUri}/todos/addbook`;
    console.log(data);
    return this.http.post(url, data);
  }
}
