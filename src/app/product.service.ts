import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url="http://200.0.1.91:3000/product";
  constructor(private http:Http) { }

  getProduct(){

    return this.http.get(this.url);
  }

  Test(){
    return this.http.get("http://200.0.1.91:3000/");
  }
}
