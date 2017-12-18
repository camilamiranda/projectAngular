import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from "@angular/router";

import { AppComponent }  from './app.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {VoyageComponent} from "./voyage/voyage.component";
import {AppService} from "./service/app.service";


@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'voyage', component: VoyageComponent },
    ])],
  declarations: [AppComponent, LoginComponent, RegisterComponent, VoyageComponent],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
