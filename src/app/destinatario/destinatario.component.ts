import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormControl, NgForm, ReactiveFormsModule  } from '@angular/forms';
import { Router } from "@angular/router";
import { ServicesService } from '../services/services.service';
import Swal from 'sweetalert2';
const bank: String[] = [];


@Component({
  selector: 'app-destinatario',
  templateUrl: './destinatario.component.html',
  styleUrls: ['./destinatario.component.css']
})
export class DestinatarioComponent implements OnInit {


  datos: any;
  items: any;

  data: any = {
      rut: '',
      nombre: '',
      email: '',
      telefono: '',
      cuenta: "",
      bancodestino: ""
  }

  

  cuentas: any[] = [{id : 0, cuenta :"Corriente"}, {id : 1, cuenta :"Vista"}, {id : 2, cuenta :'Ahorro'}, {id : 3, cuenta :'Rut'}];
  bancos = [{id : 0, banco :"Santander"}, {id : 1, banco :"Itau"}, {id : 2, banco :'BCI'}, {id : 3, banco :'Banco Estado'}, {id : 4, banco :'Banco Falabella'}, {id : 5, banco :'Scotibank'}, {id : 6, banco : 'Banco de Chile'}];




  constructor(public serviceService: ServicesService, private formBuilder: FormBuilder , public router: Router) {

  }



  ngOnInit(): void {

  }

 destinatario() {

    try{
    this.items = this.serviceService.destinatario(this.data).subscribe(
      result => {
        console.log("registrado destinatario", result)
         
        Swal.fire({ 
          icon: "success",
          title: "Nuevo Destinatario",
          text: "Exito",
        });

        this.router.navigateByUrl("/transferencia");
      }); 
   } catch(err) {

   }
    console.warn('Your order has been submitted', this.data);
  }


  SaveData(){
    

  }


//   capturar() {
//     // Pasamos el valor seleccionado a la variable verSeleccion
//     this.verSeleccion = this.opcionSeleccionado;
//     console.log("sdfsdfsdfsdfsdfsdfsdfsdsdsd", this.verSeleccion)
// }


  // banco() {
  //   try{
  //     this.serviceService.bancos().subscribe(
  //       data => {
  //         console.log('Bancos', data)
  //       }    
  //      );
  //   } catch(err) {
  //     console.log(err);
  //   } 
  // }

  // destinatario() {
  //   const user = { rut: this.rut, nombre: this.nombre, email: this.email, telefono: this.telefono, cuenta: this.cuenta, bancodestino: this.bancodestino };
    
  //   try{
  //   this.serviceService.login(user).subscribe(
  //     data => {
        
  //       const token = data;

  //       const alerta = Swal.fire({
  //         icon: "error",
  //         title: "Error",
  //         text: "credenciales incorrectos"
  //       });
  //       const alert = Swal.fire({
  //         icon: "success",
  //         title: "Inicio de Sesión",
  //         text: "Bienvenido ",
  //       });

  //       console.log('data', data)
  //       console.log('dsfsdfsd', data.token)
        
  //       // const result = data.msg || data.token.msg || data.token.message ? alerta : alert this.router.navigateByUrl("/destinatario");
  //       // const result = data.msg = 'ERROR DEL SERVICIO' || data.token == 'CREDENCIALES INVALIDOS' ? alerta : this.router.navigateByUrl("/destinatario");
  //       // const result = data == 'CREDENCIALES INVALIDOS' ? alerta : this.router.navigateByUrl("/");
       
  //       switch (data.msg || data.token.msg || data.token.message ) {
  //         case "ERROR DEL SERVICIO":
  //             alerta
  //             break;
  //         case 'CREDENCIALES INVALIDOS':
  //            alerta
  //             break;
  //         case 'SUCCESS':
  //           alert
  //           this.router.navigateByUrl("/destinatario");
  //             break;
  //         // case 3:
  //         //     console.log("It is a Wednesday.");
  //         //     break;
  //         // case 4:
  //         //     console.log("It is a Thursday.");
  //         //     break;
  //         // case 5:
  //         //     console.log("It is a Friday.");
  //         //     break;
  //         // case 6:
  //         //     console.log("It is a Saturday.");
  //         //     break;
  //         default:
  //           // this.router.navigateByUrl("/destinatario");
  //           console.log("It is a Saturday.");
  //             break;
  //     }

  //       // return result;

  


  //       // const decoded: any = jwt_decode(token.token);




   
      
  //     }
  
  //   );
  //   }catch(err) {
  //     console.log('error catchc ', err);
     
  //   }
  }


