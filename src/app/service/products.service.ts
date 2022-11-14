import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Producto} from './../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Producto[]>('https://fakestoreapi.com/products');
   // return this.http.get<Producto[]>('https://young-sands-07814.herokuapp.com/api/products');
  }
}
