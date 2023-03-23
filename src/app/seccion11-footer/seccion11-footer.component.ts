import { Component } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-seccion11-footer',
  templateUrl: './seccion11-footer.component.html',
  styleUrls: ['./seccion11-footer.component.css']
})
export class Seccion11FooterComponent {
  public social1:string;
  public social2:string;
  public social3:string;
  public social4:string;
  public social5:string;
  public social6:string;

  send = faPaperPlane;
  constructor(){
    this.social1 = '../../assets/img/seccion7/face.svg';
    this.social2 = '../../assets/img/seccion7/titer.svg';
    this.social3 = '../../assets/img/seccion7/watssap.svg';
    this.social4 = '../../assets/img/seccion7/linkedin.svg';
    this.social5 = '../../assets/img/seccion7/discord.svg';
    this.social6 = '../../assets/img/seccion7/instagram.svg';
  }
}
