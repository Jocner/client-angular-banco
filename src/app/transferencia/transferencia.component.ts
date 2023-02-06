import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

const info = [] ;

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  // const result = sessionStorage.getItem('desti');

  constructor(public serviceService: ServicesService, private formBuilder: FormBuilder , public router: Router) {
    
    this.serviceService.alldestinatarios().subscribe(
      data => {
        data.clientes.map(function (object: any){
           console.log('listado con MAP', object);
          
           info.push(object);
        })
        // for(let info of data.cliente) console.log('FOR', info)
        // for(let i = 0; i <= data.length; i++){
        //   console.log('desde componente FOR', data[i].clientes)
        // }
        for(let i = 0; i <= data.clientes.length; i++){
          console.log('desde componente FOR', data.clientes[i])
          sessionStorage.setItem('desti', data.clientes[i].cuenta)
          // info.push( [data.clientes[i]])
        }
        
        // this.info.push(data.clientes)
        console.log('desde componente transferencia', data.clientes)
        console.log('info afuera de map', this.info)
      }
    );

  }
  
  info: any[] = [];
  info2: any ;
  info3 = sessionStorage.getItem('desti');

  
  
  ngOnInit(){
    // this.serviceService.alldestinatarios().subscribe(
    //   data => {
    //     data.clientes.map(function (object: any){
    //        console.log('listado con MAP', object);
          
    //        info.push(object);
    //     })
        // for(let info of data.cliente) console.log('FOR', info)
        // for(let i = 0; i <= data.length; i++){
        //   console.log('desde componente FOR', data[i].clientes)
        // }
    //     for(let i = 0; i <= data.clientes.length; i++){
    //       console.log('desde componente FOR', data.clientes[i])
    //       sessionStorage.setItem('desti', data.clientes[i].cuenta)
    //       // info.push( [data.clientes[i]])
    //     }
        
    //     // this.info.push(data.clientes)
    //     console.log('desde componente transferencia', data.clientes)
    //     console.log('info afuera de map', this.info)
    //   }
    // );

    // console.log('sessionStorage', (sessionStorage.getItem('desti')))


  }
  listado() {
     this.serviceService.alldestinatarios().subscribe(
      data => {
        // data.cliente.map(function (object: any){
        //    console.log('listado con MAP', object);
        // })
        // for(let info of data.cliente) console.log('FOR', info)
        for(let i = 0; i <= data.clientes.length; i++){
          console.log('desde componente FOR', data.clientes[i].bancodestino
          )
        }

        // sessionStorage.setItem('desti', data.clientes)
        console.log('desde componente transferencia', data.clientes)
        this.info2 = data;
        return data.clientes;
      }
    );
  }


}
