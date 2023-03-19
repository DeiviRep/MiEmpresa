import { Component, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-seccion8',
  templateUrl: './seccion8.component.html',
  styleUrls: ['./seccion8.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Seccion8Component {
  public img_proyectos:Array<any>;

  constructor(){
    this.img_proyectos = [
      'https://cdn.pixabay.com/photo/2017/03/01/10/03/businessman-2108029_1280.jpg',
      'https://cdn.pixabay.com/photo/2016/01/13/23/12/clay-1139098_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/06/02/18/24/watermelon-2367029_1280.jpg',
      'https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_1280.jpg',
      'https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg',
      'https://cdn.pixabay.com/photo/2012/11/28/10/32/welding-67640_1280.jpg',
    ]
  }
}
