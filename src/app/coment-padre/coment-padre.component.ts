import { Component } from '@angular/core';
import { ComentHijoComponent } from '../coment-hijo/coment-hijo.component';

@Component({
  selector: 'app-coment-padre',
  standalone: true,
  imports: [ComentHijoComponent],
  templateUrl: './coment-padre.component.html',
  styleUrl: './coment-padre.component.css'
})
export class ComentPadreComponent {
  comentarios: string[] = [];

  recibirComentario(comentario: string): void {
    this.comentarios.push(comentario);
  }
}
