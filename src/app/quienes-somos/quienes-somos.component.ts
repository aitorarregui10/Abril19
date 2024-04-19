import { Component } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  standalone: true,
  imports: [],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {

  quienFilo(): void {
    window.location.href = 'https://www.austral.edu.ar/cerebroypersona/es/2018/12/quienes-somos-a-la-luz-de-la-filosofia-y-la-ciencia/';
  }

  
  citaDni(): void {
    window.location.href = 'https://www.citapreviadnie.es/citaPreviaDni/';
  }

}
