import { Injectable } from '@angular/core';
import {Producto} from '../product.model';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

 // myShoppingCart: Producto[]= [];

  private myShoppingCart: Producto[] = [];
  private myCart = new BehaviorSubject<Producto[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() { }

  addProduct(producto: Producto){
    this.myShoppingCart.push(producto);
    this.myCart.next(this.myShoppingCart);
  }

  getShoppingCart() {
    return this.myShoppingCart;
  }

  getTotal(){
    return this.myShoppingCart.reduce((sum, item)=> sum + item.price,0);
  }
}
