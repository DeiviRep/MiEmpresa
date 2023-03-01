import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public image:string='../../assets/img/m1.jpg';
  public Titulo:string='Mi Empresa';
  constructor(){
  }
  ngOnInit(): void {
  }
}
