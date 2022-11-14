import { Component, OnInit } from '@angular/core';

import {Producto} from '../../product.model';

import { StoreService } from '../../service/store.service';

import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productos: Producto[] =[];
  myShoppingCart: Producto[] = [];
  total = 0;

  today = new Date(2020, 11, 9);
  date = new Date(2021, 1, 21)
  // productos: Producto[]  =[
  //   {
  //     id : '1',
  //     nombre: 'Producto 1',
  //     price: 450,
  //     image:'./assets/images/album.jpg'
  //   },
  //   {
  //     id : '2',
  //     nombre: 'Producto 2',
  //     price: 250,
  //     image:'./assets/images/books.jpg'
  //   },

  //   {
  //     id : '3',
  //     nombre: 'Producto 3',
  //     price: 1120,
  //     image:'./assets/images/juguete03.jpg'
  //   },

  //   {
  //     id : '4',
  //     nombre: 'Producto 4',
  //     price: 1120,
  //     image:'./assets/images/toy.jpg'
  //   },

  //   {
  //     id : '5',
  //     nombre: 'Producto 5',
  //     price: 1120,
  //     image:'./assets/images/house.jpg'
  //   }

  // ]

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts()
    .subscribe(data => {
      this.productos= data;});
  }

  onAddToShoppingCart(product: Producto) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }



}
