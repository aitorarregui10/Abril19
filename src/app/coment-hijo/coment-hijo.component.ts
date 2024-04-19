import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule,NgModel } from '@angular/forms';

@Component({
  selector: 'app-coment-hijo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './coment-hijo.component.html',
  styleUrl: './coment-hijo.component.css'
})
export class ComentHijoComponent {
  @Output() llamadaPadre: EventEmitter<string> = new EventEmitter();
  comentario: string = "";

  enviarPadre(): void {
    this.llamadaPadre.emit(this.comentario);
    this.comentario = ""; // Para limpiar lo que hemos escrito después de enviar
  }
}
