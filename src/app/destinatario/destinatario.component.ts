import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ServicesService } from '../services/services.service';
import jwt_decode from 'jwt-decode';
import Swal from 'sweetalert2';
const bank: String[] = [];

@Component({
  selector: 'app-destinatario',
  templateUrl: './destinatario.component.html',
  styleUrls: ['./destinatario.component.css']
})
export class DestinatarioComponent {
  // bank: any[] | undefined;

  datos: any;
  bancos: any;
  // bancos: {};
  opcionSeleccionado: string = '0'; // Iniciamos
  verSeleccion: string = '';

  public workStatuses = [
    { id: 0, description: 'unknow' },
    { id: 1, description: 'student' },
    { id: 2, description: 'unemployed' },
    { id: 3, description: 'employed' }
  ];
  public contact = { name: '', isVIP: false, gender: '', workStatus: 0 };

  paises: string[] = ['Mexico', 'España', 'Venezuela'];
                default: string = 'Mexico';

                paisFormulario: FormGroup;

  constructor(public serviceService: ServicesService, public router: Router) {
    this.bancos = ['Santander', 'Itau', 'BCI', 'Banco Estado', 'Banco Falabella', 'Scotibank', 'Banco de Chile'];
    // this.bancos = [{'entida' :'Santander'}, {'entidad' :'Itau'}, { 'entidad': 'BCI'}, { 'entidad': 'Banco Estado'}, {'entidad' :'Banco Falabella'}, {'entidad':'Scotibank'}, {'entidad':'Banco de Chile'}];
    // this.bancos = [1,2,3,4,5,6,7,8,9,10];
    this.paisFormulario = new FormGroup({
      pais: new FormControl(null)
  });
// setValue es para agregarle un valor
  this.paisFormulario.controls['pais'].setValue(this.default, 
{onlySelf: true});
// para obtenerlo necesitarias un get por ejemplo
this.paisFormulario.get('pais');

  }

  rut: String | undefined;
  nombre: string | undefined;
  email: string | undefined;
  telefono: string | undefined;
  cuenta: string | undefined;
  bancodestino: string | undefined;
  // datos:any | undefined;
  // bancos: any;
  // bank: any[] | undefined;
  // const bank = [];

  // this.datos = [1,2,3,4,5,6,7,8,9,10];
  // this.datos = [1,2,3,4,5,6,7,8,9,10];
  // capturar() {

  //   this.verSeleccion = this.opcionSeleccionado;
  // }

  ngOnInit(): void {
    this.serviceService.bancos().subscribe(
      data => {
        console.log('Bancos', data)
        data.map((object: any) =>{
            console.log('MAP Bancos', object.banco)
            bank.push(object.banco)

            // sessionStorage.setItem('Banks', object.banco)
            // sessionStorage.setItem('Banks', JSON.stringify(object.banco))


        } )
        console.log('fuera de map', bank)
        // this.verSeleccion = this.opcionSeleccionado;
        // console.log("sdfsdfsdfsdfsdfsdfsdfsdsdsd", this.verSeleccion)
      }    
     );

  }


  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    this.verSeleccion = this.opcionSeleccionado;
    console.log("sdfsdfsdfsdfsdfsdfsdfsdsdsd", this.verSeleccion)
}


  banco() {
    try{
      this.serviceService.bancos().subscribe(
        data => {
          console.log('Bancos', data)
        }    
       );
    } catch(err) {
      console.log(err);
    } 
  }

  destinatario() {
    const user = { rut: this.rut, nombre: this.nombre, email: this.email, telefono: this.telefono, cuenta: this.cuenta, bancodestino: this.bancodestino };
    
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
            console.log("It is a Saturday.");
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
