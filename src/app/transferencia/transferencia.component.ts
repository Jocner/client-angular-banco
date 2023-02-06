import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DestinatarioModel } from '../model/destinatario.model';
import { TransfenciaModel } from '../model/transferencia.model';
import Swal from 'sweetalert2';

const info = [] ;

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {



  constructor(public serviceService: ServicesService) {

  }
  
  info: any[] = [];
  info2: any ;
  info3 = sessionStorage.getItem('desti');
  items: DestinatarioModel[] = [];
  searchText: any;
  email: any;
  rut: any;
  nombre: any;
  telefono: any;
  cuenta: any;
  bancodestino: any;
  monto: number | undefined;

  data: any = {
    rut: '',
    nombre: '',
    email: '',
    telefono: '',
    cuenta: "",
    bancodestino: "",
    monto: ''
}
  
  
  
  ngOnInit(){
    this.serviceService.alldestinatarios().subscribe(
      data => {
      
       
        this.items = data.clientes;
   
      }
    );


  }
  listado() {
    

     this.serviceService.alldestinatarios().subscribe(
      data => {

        for(let i = 0; i <= data.clientes.length; i++){
          console.log('desde componente FOR', data.clientes[i].bancodestino
          )
        }

        // sessionStorage.setItem('desti', data.clientes)
        console.log('desde componente transferencia', data.clientes)
        this.info2 = data;
       this.items = data.clientes;
      }
    );
  }

  transferencia() {
    const info = { email: this.email, rut: this.rut, nombre: this.nombre, telefono: this.telefono, cuenta: this.cuenta, bancodestino: this.bancodestino, monto: this.monto }

    try{
      this.serviceService.login(info).subscribe(
        data => {

          console.log("tranferencia realizada", data)
         
        Swal.fire({ 
          icon: "success",
          title: "Transferencia Realizada",
          text: "Exito",
        });
        }
      );    

    }catch(err) {
      console.log( err);
     
    }

  }
}
