import { Component, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-seccion2',
  templateUrl: './seccion2.component.html',
  styleUrls: ['./seccion2.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Seccion2Component {
  public img_proyectos:Array<any>;

  constructor(){
    this.img_proyectos = [
      './img/3409297.jpg',
    ]
  }
}
