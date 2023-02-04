import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { ServicesService } from '../services/services.service';
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
        // this.userService.setToken(data.token);
        if(user.email) {
        console.log('desde component LOGIN', data);
        this.router.navigateByUrl("/destinatario");

        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "credenciales incorrectos"
          });

        }
      
      }
      // error => {
      //   console.log(error);
      // }
    );
    }catch(err) {
      console.log(err);
        // Swal.fire({
        //   icon: "error",
        //   title: "Error",
        //   text: "error"
        // });
    }
  }

}
