import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="container">
        <div *ngIf="this.isAuthenticated === false" class="page-header" id="banner">
            <button class="btn btn-default" (click)="login()" [routerLink]="['/','login']">Login - Récupérer le token</button>
        </div>
        <div>
        <button class="btn btn-default" [routerLink]="['/','register']">Enregistrer un nouvel utilisateur</button>
      </div>
        <div *ngIf="this.isAuthenticated !== false">
        <button class="btn btn-default" (click)="logout()" [routerLink]="['/','/']">Logout</button>
      </div>
    </div>
    <router-outlet></router-outlet>
    `,
})
export class AppComponent {
    title = 'Super musique infinie';
    isAuthenticated: boolean = false;

    login(): void {
        this.isAuthenticated = !this.isAuthenticated;
    }
    logout(): void {
        this.isAuthenticated = !this.isAuthenticated;
    }
}
