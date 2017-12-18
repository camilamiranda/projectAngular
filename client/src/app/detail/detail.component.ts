import {Component, OnInit, Input} from '@angular/core';
import {Voyage} from '../model/voyage';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Day} from "../model/day";
import {oneVoyage} from "./oneVoyage";
import {Schedule} from "../model/schedule";


@Component({
    selector: 'my-app',
    template: `

<br/>
<br/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<div class="bgimg">


    <div class="container">
        <div class="row">
            <div class="col-md-2">
                <div class="voyage">
                    <form>
                        <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" [(ngModel)]="title" name="title" class="form-control" id="title" required>
                        </div>
    
                        <div class="form-group">
                            <label for="text">Duration</label>
                            <input type="number" [(ngModel)]="duration" name="duration" class="form-control" id="duration" min="1" required>
                        </div>
    
                        <div class="form-group">
                            <label for="text">Budget $</label>
                            <input type="number" [(ngModel)]="budget" name="budget" class="form-control" id="budget" required>
                        </div>
    
                        <div class="form-group">
                            <label for="public">This is public / private</label>
                            <input type="text" [(ngModel)]="isPublic" name="isPublic" class="form-control" id="public" required>
                        </div>
    
                        <button type="submit" class="btn btn-default" (click)="show()">Test</button>

                    </form>
                </div>
            </div>
            <div class="col-md-4">
                <div class="voyage" *ngFor="let d of voyageDay; let idx = index">
                    <h3>Day {{idx + 1}}</h3>
                    
                    <div class="schedule" *ngFor="let s of d.schedule; let idx = index">
                        <h4>Schedule {{idx + 1}}</h4>      
                            <form>
                                <div class="form-group">
                                    <label for="Budget">Budget [{{s.budget}}] $ (enter new value)</label>
                                    <input type="number" [(ngModel)]="scheduleBudget" name="scheduleBudget" class="form-control" id="scheduleBudget" required>
                                </div>
                                <div class="form-group">
                                    <label for="Destination">Destination : [{{s.destination}}] (enter new value)</label>
                                    <input type="text" [(ngModel)]="scheduleDestination" name="scheduleDestination" class="form-control" id="scheduleDestination" required>
                                </div>
                                <div class="form-group">
                                    <label for="Transport">Transport : [{{s.transport}}] (enter new value)</label>
                                    <input type="text" [(ngModel)]="scheduleTransport" name="scheduleTransport" class="form-control" id="scheduleTransport" required>
                                </div>
                                <button type="submit" class="btn btn-default" (click)="schedule(s.id)">Change schedule</button>
                            </form>
                            
                            <br/>
                            <div class="activity" *ngFor="let a of s.activities; let idx = index">
                                <h4>Activity {{idx + 1}}</h4>
                                <form>
                                    <div class="form-group">
                                        <label for="Budget">Budget $</label>
                                        <input type="number" [(ngModel)]="activityBudget" name="activityBudget" class="form-control" id="activityBudget" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="Address">Address</label>
                                        <input type="text" [(ngModel)]="activityAddress" name="activityAddress" class="form-control" id="activityAddress" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="Begin">Begin</label>
                                        <input type="datetime-local" [(ngModel)]="activityBegin" name="activityBegin" class="form-control" id="activityBegin" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="End">End</label>
                                        <input type="datetime-local" [(ngModel)]="activityEnd" name="activityEnd" class="form-control" id="activityEnd" required>
                                    </div>
                                    <button type="submit" class="btn btn-default" (click)="show()">Change activity</button>
                                    <br/>
                                </form>
                            </div>
                    </div>
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
    
    .schedule {
        padding-right: 5px;
        padding-left: 5px;
        border: 2px solid white;
        border-radius: 5px;
    }
    
    .activity {
        margin: 15px;
    
        padding-right: 5px;
        padding-left: 5px;
        border: 1px solid white;
        border-radius: 5px;
        
        color: black;
        background-color: white;
    }
    
    .getValue {
        color: gray;
        background-color: white;
    }
  `],
})
export class DetailComponent implements OnInit {
    // @Input() oneVoyage: Voyage

    title = oneVoyage.oneVoyage.title;
    duration = oneVoyage.oneVoyage.duration;
    budget = oneVoyage.oneVoyage.budget;
    isPublic = oneVoyage.oneVoyage.isPublic;

    voyageDay:Day[] = oneVoyage.oneVoyage.day;

    scheduleBudget:number;
    scheduleDestination:string;
    scheduleTransport:string;

    ngOnInit() {
        if ( this.isLoged()) {
        }
    }
    constructor(private http: Http) {
    }

    isLoged(): boolean {
        return localStorage.getItem('Token') != null;
    }
    oneVoyageCall(v:Voyage): void {
        // let token = localStorage.getItem('Token');
        // let headers = new Headers({
        //     'Content-Type': 'application/json',
        //     'Authorization': 'Bearer ' + token
        // });
        // let options = new RequestOptions({headers: headers});
        // this.http.get('http://localhost:11601/api/get/'+v.id, options).toPromise()
        //     .then(response => {
        //         console.log(response.json());
        //         this.myVoyage = response.json();
        //     });
    }

    show():void{
        console.log(this.title);
        console.log(oneVoyage.oneVoyage.title);
    }

    schedule(id:number):void{
        console.log(id);

        let s:Schedule;
        // let ss:Schedule[] = this.voyageDay.filter(c => c.id == id);
        // if (ss.length > 0) {
        //     s = ss[0];
        // }
        console.log(s);


        let newSchedule = new Schedule();
        // if(this.scheduleBudget == null) {
        //     newSchedule.budget = s.budget;
        // } else{
        //     newSchedule.budget = this.scheduleBudget;
        // }
        // if(this.scheduleDestination == null) {
        //     newSchedule.destination = s.destination;
        // }else {
        //     newSchedule.destination = this.scheduleDestination;
        // }
        // if(this.scheduleTransport == null) {
        //     newSchedule.transport = s.transport;
        // }else{
        //     newSchedule.transport = this.scheduleTransport;
        // }

        console.log(s);
        console.log(newSchedule);
    }
}
