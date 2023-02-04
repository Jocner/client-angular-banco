import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";
// import * as dotenv from 'dotenv';

// dotenv.config();

// const api = process.env['SERVE']

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(user: any): Observable<any> {
    // return this.http.post(`${api}/login`, user);
    return this.http.post("http://localhost:4000/login", user);
  }
}