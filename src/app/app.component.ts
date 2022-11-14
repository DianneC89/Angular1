import { Component } from '@angular/core';

import { Producto} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  imgParent = '';
  nombre = 'Dianelly';
  edad = '30';
  img = 'https://i.pinimg.com/originals/47/9e/52/479e520ee3f0dc4002ebfc963e7699c4.jpg';
  btnDisabled = true;



  persona ={
    nombre : 'Yazmin',
    edad : 32,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  nombres: string[] = ['Angelica', 'Mario', 'Maria'];

  newNombre = '';

  box ={
    width: 100,
    height: 100,
    background: 'red'

  }
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



  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  incrementarEdad(){
    this.persona.edad += 1;
  }

  onScroll(event:Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  cambioNombre(event:Event){
    const element = event.target as HTMLInputElement
    this.persona.nombre = element.value;
  }

  agregarNombre(){
    this.nombres.push(this.newNombre);
    this.newNombre ='';
  }

  eliminarNombre(index: number){
    this.nombres.splice(index, 1);
  }

  registro ={
    name:'',
    email: '',
    password:''
  }

  onRegistro(){
      console.log(this.registro);
  }

  //creación a partir del curso de componentes y servicios

  onLoaded(img: string){
    console.log('log padre', img);
  }
}
