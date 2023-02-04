import { RouterModule } from "@angular/router";
// import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DestinatarioComponent } from "./destinatario/destinatario.component";
import { TransferenciaComponent } from "./transferencia/transferencia.component";


const appRoutes = [
    // { path: "", component: AppComponent},
    { path: "home", component: HomeComponent},
    { path: "", component: LoginComponent},
    { path: "destinatario", component: DestinatarioComponent},
    { path: "transferencia", component: TransferenciaComponent},
    // { path: "login", component: LoginComponent},
  ];

export const routing = RouterModule.forRoot(appRoutes);