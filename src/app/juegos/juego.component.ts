import{ Component } from '@angular/core';

@Component({
  selector: 'videojuegos',
  template:`
    <h2>Component de {{nombre}}</h2>
    <h3 *ngIf="mostrar_retro != true">El mejor juego es: {{mejor_juego}}</h3>
    <h3
        *ngIf="mostrar_retro">
        El mejor juego es: {{mejor_juego_retro}}</h3>
    `
})
export class VideojuegosComponent{
  public nombre = 'Videojuegos 2018';
  public mejor_juego = 'GTA 5';
  public mejor_juego_retro = 'Super Matio 64';
  public mostrar_retro = true;
}
