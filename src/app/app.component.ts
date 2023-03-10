import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// Tambien se le puede decir que es un decorador
// componente es una seccion un trosito de una pagina, que tiene su propio objetivo
@Component({
  //
  selector: 'app-root',
  // plantilla que carga el fichero como vista
  templateUrl: './app.component.html',
  // sus estilos
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyect-portafolio';
  descript = 'MI EMPRESA DE SOTFWARE';
  faCoffee = faCoffee;
}
