import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { DondeEstamosComponent } from './donde-estamos/donde-estamos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ComentHijoComponent } from './coment-hijo/coment-hijo.component';
import { ComentPadreComponent } from './coment-padre/coment-padre.component';

export const routes: Routes = [
    {path: 'inicio', component: InicioComponent },
    {path: 'donde-estamos', component: DondeEstamosComponent },
    {path: 'quienes-somos', component: QuienesSomosComponent },
    {path: 'coment-hijo', component: ComentHijoComponent },
    {path: 'coment-padre', component: ComentPadreComponent }
];
