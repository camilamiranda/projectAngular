/**
 * Created by 1395118 on 2017-12-04.
 */
import {Component, OnInit} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/toPromise';

@Component({
    selector: 'loginComponent',
    template: `
    <div>
          <h2>Email</h2>
          <input class="form-control" [(ngModel)]="emailUtil" placeholder="email"/>
      </div>
      <div>
          <h2>Password</h2>
          <input class="form-control" [(ngModel)]="passwordUtil" placeholder="password"/>
      </div>
      
    <div class="row">
      <div>
        <button class="btn btn-default" (click)="login()" [routerLink]="['/','memo']">Authentification</button>
      </div>
    </div>
    `,
})
export class LoginComponent implements OnInit {
    emailUtil = '';
    passwordUtil = '';

    constructor(private http: Http, private route: ActivatedRoute) { }

    ngOnInit(): void {
        console.log('login');
    }

    login(): void {
        let body: URLSearchParams = new URLSearchParams()
        body.set('grant_type', 'password');
        body.set('username', this.emailUtil);
        body.set('password', this.passwordUtil);

        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({headers: headers});
        this.http.post('http://localhost:11601/Token', body, options).toPromise()
            .then(response => {
                console.log(response.json());
                localStorage.setItem('Token', response.json().access_token);
            });
    }

}
