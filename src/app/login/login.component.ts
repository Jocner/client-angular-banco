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
  // email: string;
  // password: string;

  constructor(public serviceService: ServicesService, public router: Router) {}

  email: string | undefined;
  password: string | undefined;

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
        
        // const result = data.msg || data.token.msg || data.token.message ? alerta : alert this.router.navigateByUrl("/destinatario");
        // const result = data.msg = 'ERROR DEL SERVICIO' || data.token == 'CREDENCIALES INVALIDOS' ? alerta : this.router.navigateByUrl("/destinatario");
        // const result = data == 'CREDENCIALES INVALIDOS' ? alerta : this.router.navigateByUrl("/");
       
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
          // case 3:
          //     console.log("It is a Wednesday.");
          //     break;
          // case 4:
          //     console.log("It is a Thursday.");
          //     break;
          // case 5:
          //     console.log("It is a Friday.");
          //     break;
          // case 6:
          //     console.log("It is a Saturday.");
          //     break;
          default:
            // this.router.navigateByUrl("/destinatario");
            console.log("Destinatario");
              break;
      }

        // return result;

  


        // const decoded: any = jwt_decode(token.token);




   
      
      }
  
    );
    }catch(err) {
      console.log('error catchc ', err);
     
    }
  }

}
