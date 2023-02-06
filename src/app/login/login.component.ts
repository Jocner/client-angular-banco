import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ServicesService } from '../services/services.service';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(public serviceService: ServicesService, public router: Router) {}

  email: string | undefined;
  password: string | undefined;
  public isCollapsed = true;
  login() {
    const user = { email: this.email, password: this.password };
    
    try{
    this.serviceService.login(user).subscribe(
      data => {
        
        const token = data;

        const alerta = Swal.fire({
          icon: "error",
          title: "Error",
          text: "credenciales incorrectos"
        });
        const alert = Swal.fire({
          icon: "success",
          title: "Inicio de Sesión",
          text: "Bienvenido ",
        });

        console.log('data', data)
        console.log('dsfsdfsd', data.token)
        

        switch (data.msg || data.token.msg || data.token.message ) {
          case "ERROR DEL SERVICIO":
              alerta
              break;
          case 'CREDENCIALES INVALIDOS':
             alerta
              break;
          case 'SUCCESS':
            alert
            this.router.navigateByUrl("/destinatario");
              break;
          default:
            console.log("Destinatario");
              break;
      }


      
      }
  
    );
    }catch(err) {
      console.log('error catchc ', err);
     
    }
  }

}
