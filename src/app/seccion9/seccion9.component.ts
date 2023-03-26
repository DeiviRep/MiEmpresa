
import { Component, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
 SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-seccion9',
  templateUrl: './seccion9.component.html',
  styleUrls: ['./seccion9.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Seccion9Component {
  public img_directorio:Array<any>;
  constructor(){
    this.img_directorio = [
      'https://us.123rf.com/450wm/pandavector/pandavector1612/pandavector161200355/69246438-icono-del-programador-en-estilo-plano-aislado-sobre-fondo-blanco-gente-de-diferente-profesi%C3%B3n.jpg',
      'https://avatars.githubusercontent.com/u/102246561?v=4',
      'https://us.123rf.com/450wm/pandavector/pandavector1612/pandavector161200355/69246438-icono-del-programador-en-estilo-plano-aislado-sobre-fondo-blanco-gente-de-diferente-profesi%C3%B3n.jpg',
    ]
  }
}
