import {Component} from '@angular/core';
import {AppService} from './service/app.service';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
        <div *ngIf="this.appService.isAuthenticated === false" class="page-header" id="banner">
            <button class="btn btn-default" [routerLink]="['/','login']">Login - Récupérer le token</button>
            <button class="btn btn-default" [routerLink]="['/','register']">Enregistrer un nouvel utilisateur</button>
        </div>
        <div *ngIf="this.appService.isAuthenticated !== false">
        <button class="btn btn-default" (click)="logout()" [routerLink]="['/','/']">Logout</button>
      </div>
    </div>
    <router-outlet></router-outlet>
    `,
})
export class AppComponent {
    title = 'Super musique infinie';
    isAuthenticated: boolean = false;

    constructor(private appService: AppService) { }
    /*login(): void {
        this.isAuthenticated = !this.isAuthenticated;
    }*/
    logout(): void {
        this.appService.isAuthenticated = false;
        localStorage.removeItem('Token');
    }
}
