/**
 * Created by 1395118 on 2017-12-04.
 */
import {Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'registerComponent',
    template: `    
  
      <div>
          <h2>Email</h2>
          <input class="form-control" [(ngModel)]="emailUtil" placeholder="email"/>
      </div>
      <div>
          <h2>Password</h2>
          <input class="form-control" [(ngModel)]="passwordUtil" placeholder="password"/>
      </div>
      <div>
          <h2>Confirm Password</h2>
          <input class="form-control" [(ngModel)]="confirmPasswordUtil" placeholder="password"/>
      </div>
    <div class="row">
      <div>
        <button class="btn btn-default" (click)="register()" [routerLink]="['/','/']">Enregistrer un nouvel utilisateur</button>
      </div>
    </div>
  `,
})
export class RegisterComponent implements OnInit {
    emailUtil = '';
    passwordUtil = '';
    confirmPasswordUtil = '';

    constructor(private http: Http, private route: ActivatedRoute) { }

    ngOnInit(): void {
        console.log('register');
    }

    register(): void {
        let data = {
            Email: this.emailUtil,
            Password: this.passwordUtil,
            ConfirmPassword: this.confirmPasswordUtil
        };
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({headers: headers});

        this.http.post('http://localhost:11601/api/Account/Register', JSON.stringify(data), options).toPromise()
            .then(response => { });
    }

}
