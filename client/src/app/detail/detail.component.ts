import {Component, OnInit} from '@angular/core';
import {Voyage} from '../model/voyage';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Component({
    selector: 'my-app',
    template: `

<br/>
<br/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<div class="bgimg">

    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="voyage" *ngIf="oneVoyage">
                    <h3>All voyage</h3>
                    <table style="width:100%;">
                        <tr>
                            <th colspan="2"><i>Title:</i> {{v.title}}</th>
                            <th><i>Budget:</i> {{v.budget}} $</th>
                        </tr>
                        <tr>
                            <th><i>User:</i> {{v.userID}}</th>
                            <th><i>Days:</i> {{v.duration}}</th>
                            <th><i>IsPublic:</i> {{v.isPublic}}</th>
                        </tr>
                        <tr>
                            <th colspan="3"><i>Schedule:</i> {{v.day}}</th>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="col-md-6">
                <div class="voyage" *ngFor="let v of myVoyage">
                    <h3>My voyage</h3>
                    <table style="width:100%;">
                        <tr>
                            <th colspan="2"><i>Title:</i> {{v.title}}</th>
                            <th><i>Budget:</i> {{v.budget}} $</th>
                        </tr>
                        <tr>
                            <th><i>User:</i> {{v.userID}}</th>
                            <th><i>Days:</i> {{v.days}}</th>
                            <th><i>IsPublic:</i> {{v.isPublic}}</th>
                        </tr>
                        <tr>
                            <th colspan="3"><i>Schedule:</i> {{v.schedule}}</th>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <br/>
        <br/>

    </div>

</div>

    <router-outlet></router-outlet>
    

    
    `,
    styles: [`
    .bgimg {
        background-image: url('https://www.hdwallpapers.in/walls/town_huawei_mate_9_stock-wide.jpg');
        min-height: 100%;
        background-position: center;
        background-size: cover;
        color: white;
    }
    
    table {
        border-collapse: collapse;
    }
    
    table,
    td,
    th {
        border: 2px solid white;
        padding: 5px;
    }
    
    .createVoyage {
        border: 4px solid white;
        border-radius: 5px;
    }
  `],
})
export class DetailComponent implements OnInit {

    

    ngOnInit() {
        // this.allPublicVoyage();
        if ( this.isLoged()) {
        }
    }
    constructor(private http: Http) {
    }

    isLoged(): boolean {
        return localStorage.getItem('Token') != null;
    }
    oneVoyageCall(v:Voyage): void {
        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        let options = new RequestOptions({headers: headers});
        this.http.get('http://localhost:11601/api/get/'+v.id, options).toPromise()
            .then(response => {
                console.log(response.json());
                this.myVoyage = response.json();
            });
    }
}
