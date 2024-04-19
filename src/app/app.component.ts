import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DondeEstamosComponent } from './donde-estamos/donde-estamos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ComentHijoComponent } from './coment-hijo/coment-hijo.component';
import { ComentPadreComponent } from './coment-padre/coment-padre.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,InicioComponent,DondeEstamosComponent, QuienesSomosComponent,ComentHijoComponent,ComentPadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril19';
}
