import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Seccion5Component } from './seccion5/seccion5.component';
import { Seccion1Component } from './seccion1/seccion1.component';
// import { VideojuegosComponent } from './juegos/juego.component';
import { Seccion6Component } from './seccion6/seccion6.component';
import { Seccion7Component } from './seccion7/seccion7.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Seccion11FooterComponent } from './seccion11-footer/seccion11-footer.component';
import { Seccion8Component } from './seccion8/seccion8.component';
import { Seccion2Component } from './seccion2/seccion2.component';
import { Seccion4Component } from './seccion4/seccion4.component';
import { Seccion3Component } from './seccion3/seccion3.component';
import { Seccion10Component } from './seccion10/seccion10.component';
import { Seccion9Component } from './seccion9/seccion9.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Seccion5Component,
    Seccion1Component,
    // VideojuegosComponent,
    Seccion6Component,
    Seccion7Component,
    Seccion11FooterComponent,
    Seccion8Component,
    Seccion2Component,
    Seccion4Component,
    Seccion3Component,
    Seccion2Component,
    Seccion10Component,
    Seccion9Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
