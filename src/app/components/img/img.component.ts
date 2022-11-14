import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent  {

  @Input() img: string = '';

  @Output() loaded = new EventEmitter<string>();


  imageDefault = './assets/images/default.png';

  constructor() { }



  imgError(){
    this.img = this.imageDefault;

  }

  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }

}
