import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-navbar-home',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './navbar-home.component.html',
  styleUrl: './navbar-home.component.scss'
})
export class NavbarHomeComponent {

}
