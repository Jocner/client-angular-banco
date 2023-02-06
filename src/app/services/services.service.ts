import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(user: any): Observable<any> {

    return this.http.post("http://localhost:4000/login", user);
  }

  destinatario(user: any): Observable<any> {
   
    return this.http.post("http://localhost:4000/newDestinatario", user);
  }

  alldestinatarios(): Observable<any> {

    return this.http.get("http://localhost:4000/destinatarios")
     
  }

  transferencia(transf: any): Observable<any> {
   
    return this.http.post("http://localhost:4000/newTransferencia", transf);
  }

  bancos(): Observable<any> {
   
    return this.http.get("http://localhost:4000/bancos");
  }
}
