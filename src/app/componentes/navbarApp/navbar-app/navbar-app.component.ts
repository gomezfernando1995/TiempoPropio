import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { RegistradorComponent } from '../../registrador/registrador/registrador.component';

@Component({
  selector: 'app-navbar-app',
  standalone: true,
  imports: [RouterOutlet,RouterModule,RegistradorComponent],
  templateUrl: './navbar-app.component.html',
  styleUrl: './navbar-app.component.scss'
})
export class NavbarAppComponent {
  showMenu = false;
  
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
