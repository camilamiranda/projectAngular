import {Component, OnInit, Input} from '@angular/core';
import {Voyage} from '../model/voyage';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Day} from "../model/day";
import {oneVoyage} from "./oneVoyage";
import {Schedule} from "../model/schedule";
import {Transport} from "../model/transport";
import {Activity} from "../model/activity";
import any = jasmine.any;
import {forEach} from "@angular/router/src/utils/collection";


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
                <div class="voyage" *ngIf="vvoyage">
                    <h3>Voyage</h3>
                    <form>
                        <div class="form-group">
                            <label for="title">Title: {{vvoyage.title}}</label>
                            <input type="text" [(ngModel)]="title" name="title" class="form-control" id="title" required>
                        </div>
    
                        <div class="form-group">
                            <label for="text">Duration: {{vvoyage.duration}}</label>
                            <input type="number" [(ngModel)]="duration" name="duration" class="form-control" id="duration" min="1" required>
                        </div>
    
                        <div class="form-group">
                            <label for="text">Budget: {{vvoyage.budget}} $</label>
                            <input type="number" [(ngModel)]="budget" name="budget" class="form-control" id="budget" required>
                        </div>
    
                        <div class="form-group">
                            <label for="public">This is public: {{vvoyage.isPublic}}</label>
                            <input type="text" [(ngModel)]="isPublic" name="isPublic" class="form-control" id="public" required>
                        </div>
    
                        <button type="submit" class="btn btn-default" (click)="changeVoyage(vvoyage.id)">Change Voyage</button>

                    </form>
                </div>
            </div>
            <div class="col-md-4">
                <h3>Google Maps</h3>
                <agm-map [latitude]="this.latitude[0]" [longitude]="this.longitude[0]">
                  <agm-marker *ngFor="let latitude of this.latitude; let i = index" [latitude]="latitude" [longitude]="this.longitude[i]"></agm-marker>
                </agm-map>
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
                                    <label for="Destination">Destination: [{{s.destination}}] (enter new value)</label>
                                    <input type="text" [(ngModel)]="scheduleDestination" name="scheduleDestination" class="form-control" id="scheduleDestination" required>
                                </div>
                                <div class="form-group">
                                    <label for="Transport">Transport [{{s.transport.transport}}] : [{{s.transport.budget}}] (enter new value)</label>
                                    <input type="text" [(ngModel)]="scheduleTransportTransport" name="scheduleTransportTransport" class="form-control" id="scheduleTransportTransport" required>
                                    <input type="text" [(ngModel)]="scheduleTransportBudget" name="scheduleTransportBudget" class="form-control" id="scheduleTransportBudget" required>
                                </div>
                                <button type="submit" class="btn btn-default" (click)="changeSchedule(s.id)">Change schedule</button>
                            </form>
                            
                            <br/>
                            <div class="activity" *ngFor="let a of s.activities; let idx = index">
                                <h4>Activity {{idx + 1}}</h4>
                                <form>
                                    <div class="form-group">
                                        <label for="Budget">Budget [{{a.budget}}] $</label>
                                        <input type="number" [(ngModel)]="activityBudget" name="activityBudget" class="form-control" id="activityBudget" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="Address">Address: [{{a.address}}]</label>
                                        <input type="text" [(ngModel)]="activityAddress" name="activityAddress" class="form-control" id="activityAddress" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="Begin">Begin [{{a.begin.toLocaleString()}}]</label>
                                        <input type="datetime-local" [(ngModel)]="activityBegin" name="activityBegin" class="form-control" id="activityBegin" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="End">End [{{a.end.toLocaleString()}}]</label>
                                        <input type="datetime-local" [(ngModel)]="activityEnd" name="activityEnd" class="form-control" id="activityEnd" required>
                                    </div>
                                    <button type="submit" class="btn btn-default" (click)="changeActivity(a.id)">Change activity</button>
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
    
    agm-map {
      height: 300px;
    }
  `],
})
export class DetailComponent implements OnInit {
    // @Input() oneVoyage: Voyage
    latitude: number[] = new Array();
    longitude: number[] = new Array();

    vvoyage = oneVoyage;
    title = oneVoyage.title;
    duration = oneVoyage.duration;
    budget = oneVoyage.budget;
    isPublic = oneVoyage.isPublic;

    voyageDay:Day[] = oneVoyage.day;

    scheduleBudget:number;
    scheduleDestination:string;
    scheduleTransportTransport:string;
    scheduleTransportBudget:number;

    activityBudget:number;
    activityAddress:string;
    activityBegin:Date;
    activityEnd:Date;

    ngOnInit() {
        if ( this.isLoged()) {
            this.getCoord();
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

    changeSchedule(id:string):void{
        let s:Schedule;
        let ss:Schedule[] = this.voyageDay[0].schedule.filter(c => c.id == id);
        if (ss.length > 0) {
            s = ss[0];
        }

        let t:Transport;
        t = s.transport;

        let newTrans:Transport;
        newTrans = t;
        if(this.scheduleTransportTransport != null) {
            newTrans.transport = this.scheduleTransportTransport;
        }
        if(this.scheduleTransportBudget != null) {
            newTrans.budget = this.scheduleTransportBudget;
        }


        let newSchedule = new Schedule();
        newSchedule.transport = newTrans;
        if(this.scheduleBudget == null) {
            newSchedule.budget = s.budget;
        } else{
            newSchedule.budget = this.scheduleBudget;
        }
        if(this.scheduleDestination == null) {
            newSchedule.destination = s.destination;
        }else {
            newSchedule.destination = this.scheduleDestination;
        }

        console.log(newSchedule);

        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        let options = new RequestOptions({headers: headers});
        // this.http.get('http://localhost:11601/api/changeSchedule', JSON.stringify(newSchedule), options).toPromise()
        //     .then(response => {
        //         console.log(response.json());
        //     });
    }

    changeActivity(id:string):void{
        let a:Activity;
        let as:Activity[] = this.voyageDay[0].schedule[0].activities.filter(c => c.id == id);
        if (as.length > 0) {
            a = as[0];
        }

        let newActivity = a;
        if(this.activityBudget != null){
            newActivity.budget = this.activityBudget;
        }
        if(this.activityAddress != null){
            newActivity.address = this.activityAddress;
        }
        if(this.activityBegin != null){
            let d = new Date(this.activityBegin);
            newActivity.begin = d;
        }
        if(this.activityEnd != null){
            let d = new Date(this.activityEnd);
            newActivity.end = d;
        }

        console.log(newActivity);

        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        // let options = new RequestOptions({headers: headers});
        // this.http.get('http://localhost:11601/api/changeVoyage', JSON.stringify(newActivity), options).toPromise()
        //     .then(response => {
        //         console.log(response.json());
        //     });
    }

    changeVoyage(id:string):void{
        console.log(id);

        let newVoyage = new Voyage();
        newVoyage.title = this.title;
        newVoyage.duration = this.duration;
        newVoyage.budget = this.budget;
        newVoyage.isPublic = this.isPublic;

        console.log(newVoyage);

        let token = localStorage.getItem('Token');
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        // let options = new RequestOptions({headers: headers});
        // this.http.get('http://localhost:11601/api/changeVoyage', JSON.stringify(newVoyage), options).toPromise()
        //     .then(response => {
        //         console.log(response.json());
        //     });
    }

    getCoord(){
        for (let day of this.voyageDay){
            for(let schedule of day.schedule){
                for(let activity of schedule.activities){
                    this.http.get('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA4Ir550YaoKaIj9OiBlScsOWnPa9GT2So&address='+activity.address)
                        .toPromise().then(data => {
                            this.latitude.push(data.json().results[0].geometry.location.lat);
                            this.longitude.push(data.json().results[0].geometry.location.lng);
                        }
                    );
                }
            }
        }



        this.http.get('https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyA4Ir550YaoKaIj9OiBlScsOWnPa9GT2So&address=');
    }
}
