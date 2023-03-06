import{ Component } from '@angular/core';

@Component({
  selector: 'videojuegos',
  template:`
    <h2>Component de {{nombre}}</h2>
    <h3 *ngIf="mostrar_retro != true">El mejor juego es: {{mejor_juego}}</h3>
    <h3
        *ngIf="mostrar_retro">
        El mejor juego es: {{mejor_juego_retro}}</h3>
    <h2>Listado de Videojuegos</h2>
    <ul>
      <li *ngFor="let game of videoJuegos">{{game}}</li>
    </ul>
    `
})
export class VideojuegosComponent{
  public nombre:string;
  public mejor_juego:string;
  public mejor_juego_retro:string;
  public mostrar_retro:boolean;
  public color:string;
  public videoJuegos:Array<any>;

    constructor(){
      this.nombre = 'Videojuegos 2000';
      this.mejor_juego = 'GTA 5';
      this.mejor_juego_retro = 'Super Matio 64';
      this.mostrar_retro = true;
      this.color = 'red'
      this.videoJuegos = [
        'Los simpsoms',
        'Assins creed',
        'GTA 5',
        'Makako',
        'Tekken',
        2021,
      ];
    }
}
