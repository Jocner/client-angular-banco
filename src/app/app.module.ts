import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { routing } from "./app.routing";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DestinatarioComponent } from './destinatario/destinatario.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransacionComponent } from './transacion/transacion.component';

// import { MatCardModule,MatFormFieldModule,MatInputModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DestinatarioComponent,
    TransferenciaComponent,
    TransacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
