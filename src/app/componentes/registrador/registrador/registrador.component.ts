import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { NavbarAppComponent } from '../../navbarApp/navbar-app/navbar-app.component';

@Component({
  selector: 'app-registrador',
  standalone: true,
  imports: [NavbarAppComponent],
  templateUrl: './registrador.component.html',
  styleUrl: './registrador.component.scss'
})
export class RegistradorComponent implements OnInit, OnDestroy  {

  horaImprimible!:string; 
  intervalo: any; // Variable para almacenar el ID del intervalo

  ngOnInit() {
    // Llama a la función actualizarHora cada 1000 milisegundos (1 segundo)
    this.intervalo = setInterval(() => {
      this.reloj();
    }, 1000);
  }

  ngOnDestroy() {
    // Limpia el intervalo cuando el componente se destruye para evitar fugas de memoria
    clearInterval(this.intervalo);
  }

  reloj (){
    const momentoActual:Date =  new Date(); 
    let hora = momentoActual.getHours()
    let minuto =momentoActual.getMinutes()
    let segundo =momentoActual.getSeconds()
    this.horaImprimible = hora + ":" + minuto + ":" + segundo
  }
  

}
