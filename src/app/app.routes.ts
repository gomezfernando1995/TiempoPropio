import { Routes } from '@angular/router';
import { NavbarHomeComponent } from './componentes/navbarHome/navbar-home/navbar-home.component';
import { NavbarAppComponent } from './componentes/navbarApp/navbar-app/navbar-app.component';
import { RegistradorComponent } from './componentes/registrador/registrador/registrador.component';

export const routes: Routes = [
    {path:'',
    component: NavbarHomeComponent},
    {path:'nav-home',
    component: NavbarHomeComponent},
    { 
        path: 'nav-app', 
        component: NavbarAppComponent,
        children: [
          // { path: '', redirectTo: 'registrador', pathMatch: 'full' },
          { path: 'registrador', component: RegistradorComponent },
        ]
    }
];
