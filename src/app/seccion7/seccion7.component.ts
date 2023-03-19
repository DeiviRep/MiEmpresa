import { Component } from '@angular/core';

@Component({
  selector: 'app-seccion7',
  templateUrl: './seccion7.component.html',
  styleUrls: ['./seccion7.component.css'],
})
export class Seccion7Component {
  public ico1: string;
  public ico2: string;
  public ico3: string;
  public titulo1: string;
  public titulo2: string;
  public titulo3: string;
  public parrafo1: string;
  public parrafo2: string;
  public parrafo3: string;

  constructor() {
    this.ico1 = '../../assets/img/seccion8/IA.png';
    this.ico2 = '../../assets/img/seccion8/chrome.png';
    this.ico3 = '../../assets/img/seccion8/physics.png';

    this.titulo1 = 'I.A.';
    this.titulo2 = 'Google Cloud';
    this.titulo3 = 'React';

    this.parrafo1 = 'Ingrese Aqui';
    this.parrafo2 = '';
    this.parrafo3 = '';
  }
}
