import {Component, OnInit} from '@angular/core';
import {Voyage} from '../model/voyage';
import {Destination} from '../model/destination';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Component({
    selector: 'my-app',
    template: `

<!--<br/><br/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<div class="bgimg"/>-->

        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="voyage" *ngFor="let v of publicVoyages">
                        <h3>All voyage</h3>
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
            <div class="row createVoyage">

                <h1 style="background-color: darkgray;">New Voyage</h1>
                <h4 *ngIf="failed" style="color: red; background-color: white; text-align: center;"> FAILED <i>(Are you connected?)</i></h4>
                <div class="col-md-5">
                    <form>
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" [(ngModel)]="title" name="title" class="form-control" id="title" required>
                        </div>

                        <div class="form-group">
                            <label for="text">Number of days</label>
                            <input type="number" [(ngModel)]="days" name="days" class="form-control" id="days" min="1" required>
                        </div>

                        <div class="form-group">
                            <label for="text">Budget $</label>
                            <input type="number" [(ngModel)]="budget" name="budget" class="form-control" id="budget" required>
                        </div>

                        <div class="form-group">
                            <label for="public">This is public / private</label>
                            <input type="text" [(ngModel)]="isPublic" name="isPublic" class="form-control" id="public" required>
                        </div>

                    </form>
                </div>

                <div class="col-md-4">
                    <form>
                        <div class="form-group">
                            <label for="title">Destination(s) for {{days}}</label>
                            <input type="text" [(ngModel)]="destination" name="destination" class="form-control" id="destination">
                        </div>
                    
                        <div class="form-group">
                            <label for="title">Number of days for {{destination}}</label>
                            <input type="number" [(ngModel)]="destinationDays" name="destinationDays" class="form-control" id="destinationDays" min="1">
                        </div>
                        
                        <button type="submit" class="btn btn-default" (click)="addDestination(destination, destinationDays)">Add destination</button>
                    </form>
                </div>

                <div class="col-md-3">
                    <div *ngFor="let d of destinations; let i = index" [attr.data-index]="i">
                    <label for="title"><i>{{i+1}} Destination</i></label>
                    <ul style="text-align: center;">
                      <li class="btn btn-default">{{d.days}} days in {{d.destination}}</li>
                    </ul>
                    </div>
                    
                    <button type="submit" class="btn btn-success" style="width:100%;" (click)="addVoyage()">Create</button>
                </div>

            </div>

        </div>
        
    
    
    <!--<router-outlet></router-outlet>-->
    

    
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
    
    .container {
        background-color: #919cad;
    }
  `],
})
export class VoyageComponent implements OnInit {
    title = '';
    isPublic: boolean;
    days: number;
    budget: number;
    publicVoyages: Voyage[] = [
        {
            id: '1',
            isPublic: true,
            userID: '1',
            title: 'voyage1',
            days: 7,
            budget: 100,
            destinations: []
        }
    ];
    myVoyage: Voyage[] = [
        {
            id: '1',
            isPublic: false,
            userID: '1',
            title: 'voyage1',
            days: 7,
            budget: 100,
            destinations: []
        }
    ];
    destinations: Destination[] = [];
    failed: boolean = false;

    ngOnInit() {
        // this.allPublicVoyage();
        if ( this.isLoged()) {
            this.myVoyageCall();
        }
    }
    constructor(private http: Http) {
    }

    isLoged(): boolean {
        return localStorage.getItem('Token') != null;
    }

    allPublicVoyage(): void {
        this.http.get('http://localhost:11601/api/all').toPromise()
            .then(response => {
                console.log(response.json());

                this.publicVoyages = response.json();
            });
    }
    myVoyageCall(): void {
        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        let options = new RequestOptions({headers: headers});
        this.http.get('http://localhost:11601/api/get', options).toPromise()
            .then(response => {
                console.log(response.json());
                this.myVoyage = response.json();
            });
    }

    addDestination(desti: string, ds: number): void{
        let newDes = new Destination;
        newDes.destination = desti;
        newDes.days = ds;
        this.destinations.push(newDes);
    }

    addVoyage(): void {
        if (this.isLoged()) {
            this.failed = false;

            let newVoyage = new Voyage();
            newVoyage.title = this.title;
            newVoyage.isPublic = this.isPublic;
            newVoyage.days = this.days;
            newVoyage.budget = this.budget;
            newVoyage.destinations = this.destinations;


            let token = localStorage.getItem('Token');
            let headers = new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            });
            let options = new RequestOptions({headers: headers});

            // this.http.post("http://localhost:11601/api/new", JSON.stringify(newVoyage), options).toPromise();

            console.log(newVoyage);
        } else {
            this.failed = true;
        }
    }
}