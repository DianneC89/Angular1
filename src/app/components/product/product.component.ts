import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

import {Producto} from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {


  @Input() product: Producto ={

    id:'',
    price: 0,
    image: '',
    title: '',
    category:'',
    description:''
  };

  @Output() addedProduct = new EventEmitter<Producto>();

  constructor() { }


  onAddToCart() {
    this.addedProduct.emit(this.product);
  }

}
