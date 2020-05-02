import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { ToolComponent } from './tool/tool.component';

//import du service qu'il faut ajouter dans le tableau providers
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
//Ne pas oublier d importer les services
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import {AuthGuard} from "./services/auth-guard.service";

//Utiliser des routes dans notre application (single page application)
const appRoutes: Routes = [
        { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
        { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
        { path: 'auth', component: AuthComponent },
        { path: '', component: AppareilViewComponent },
    //Routing redirection
        { path :'not-found', component: FourOhFourComponent},
    //Il est essentiel de mettre le path wildcard a la fin
        { path: '**', redirectTo: '/not-found' }
    ];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ToolComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
  ],
  //Mentionner les differents services
  providers: [
      AppareilService,
      AuthService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
