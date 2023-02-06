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



  }


