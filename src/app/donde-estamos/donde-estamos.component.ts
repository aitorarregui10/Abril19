import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donde-estamos',
  standalone: true,
  imports: [],
  templateUrl: './donde-estamos.component.html',
  styleUrl: './donde-estamos.component.css'
})
export class DondeEstamosComponent {
  
  ubicacionActual: string="";

  obtenerUbicacion(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.ubicacionActual = `Latitud: ${position.coords.latitude}, Longitud: ${position.coords.longitude}`;
      }, (error) => {
        this.ubicacionActual = 'No se pudo obtener la ubicación';
      });
    } else {
      this.ubicacionActual = 'Geolocalización no es compatible con este navegador';
    }
  }

  dondeFilo(): void {
    window.location.href = 'https://letraslibres.com/revista-espana/donde-estamos/';
  }
}
