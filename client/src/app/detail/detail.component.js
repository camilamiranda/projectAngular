"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var voyage_1 = require("../model/voyage");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var oneVoyage_1 = require("./oneVoyage");
var schedule_1 = require("../model/schedule");
var DetailComponent = (function () {
    function DetailComponent(http) {
        this.http = http;
        // @Input() oneVoyage: Voyage
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.vvoyage = oneVoyage_1.oneVoyage;
        this.title = oneVoyage_1.oneVoyage.title;
        this.duration = oneVoyage_1.oneVoyage.duration;
        this.budget = oneVoyage_1.oneVoyage.budget;
        this.isPublic = oneVoyage_1.oneVoyage.isPublic;
        this.voyageDay = oneVoyage_1.oneVoyage.day;
    }
    DetailComponent.prototype.ngOnInit = function () {
        if (this.isLoged()) {
        }
    };
    DetailComponent.prototype.isLoged = function () {
        return localStorage.getItem('Token') != null;
    };
    DetailComponent.prototype.oneVoyageCall = function (v) {
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
    };
    DetailComponent.prototype.changeSchedule = function (id) {
        var s;
        var ss = this.voyageDay[0].schedule.filter(function (c) { return c.id == id; });
        if (ss.length > 0) {
            s = ss[0];
        }
        var t;
        t = s.transport;
        var newTrans;
        newTrans = t;
        if (this.scheduleTransportTransport != null) {
            newTrans.transport = this.scheduleTransportTransport;
        }
        if (this.scheduleTransportBudget != null) {
            newTrans.budget = this.scheduleTransportBudget;
        }
        var newSchedule = new schedule_1.Schedule();
        newSchedule.transport = newTrans;
        if (this.scheduleBudget == null) {
            newSchedule.budget = s.budget;
        }
        else {
            newSchedule.budget = this.scheduleBudget;
        }
        if (this.scheduleDestination == null) {
            newSchedule.destination = s.destination;
        }
        else {
            newSchedule.destination = this.scheduleDestination;
        }
        console.log(newSchedule);
        var token = localStorage.getItem('Token');
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        var options = new http_1.RequestOptions({ headers: headers });
        // this.http.get('http://localhost:11601/api/changeSchedule', JSON.stringify(newSchedule), options).toPromise()
        //     .then(response => {
        //         console.log(response.json());
        //     });
    };
    DetailComponent.prototype.changeActivity = function (id) {
        var a;
        var as = this.voyageDay[0].schedule[0].activities.filter(function (c) { return c.id == id; });
        if (as.length > 0) {
            a = as[0];
        }
        var newActivity = a;
        if (this.activityBudget != null) {
            newActivity.budget = this.activityBudget;
        }
        if (this.activityAddress != null) {
            newActivity.address = this.activityAddress;
        }
        if (this.activityBegin != null) {
            var d = new Date(this.activityBegin);
            newActivity.begin = d;
        }
        if (this.activityEnd != null) {
            var d = new Date(this.activityEnd);
            newActivity.end = d;
        }
        console.log(newActivity);
        var token = localStorage.getItem('Token');
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        // let options = new RequestOptions({headers: headers});
        // this.http.get('http://localhost:11601/api/changeVoyage', JSON.stringify(newActivity), options).toPromise()
        //     .then(response => {
        //         console.log(response.json());
        //     });
    };
    DetailComponent.prototype.changeVoyage = function (id) {
        console.log(id);
        var newVoyage = new voyage_1.Voyage();
        newVoyage.title = this.title;
        newVoyage.duration = this.duration;
        newVoyage.budget = this.budget;
        newVoyage.isPublic = this.isPublic;
        console.log(newVoyage);
        var token = localStorage.getItem('Token');
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        // let options = new RequestOptions({headers: headers});
        // this.http.get('http://localhost:11601/api/changeVoyage', JSON.stringify(newVoyage), options).toPromise()
        //     .then(response => {
        //         console.log(response.json());
        //     });
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\n<br/>\n<br/>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<div class=\"bgimg\">\n\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-2\">\n                <div class=\"voyage\" *ngIf=\"vvoyage\">\n                    <h3>Voyage</h3>\n                    <form>\n                        <div class=\"form-group\">\n                            <label for=\"title\">Title: {{vvoyage.title}}</label>\n                            <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\" id=\"title\" required>\n                        </div>\n    \n                        <div class=\"form-group\">\n                            <label for=\"text\">Duration: {{vvoyage.duration}}</label>\n                            <input type=\"number\" [(ngModel)]=\"duration\" name=\"duration\" class=\"form-control\" id=\"duration\" min=\"1\" required>\n                        </div>\n    \n                        <div class=\"form-group\">\n                            <label for=\"text\">Budget: {{vvoyage.budget}} $</label>\n                            <input type=\"number\" [(ngModel)]=\"budget\" name=\"budget\" class=\"form-control\" id=\"budget\" required>\n                        </div>\n    \n                        <div class=\"form-group\">\n                            <label for=\"public\">This is public: {{vvoyage.isPublic}}</label>\n                            <input type=\"text\" [(ngModel)]=\"isPublic\" name=\"isPublic\" class=\"form-control\" id=\"public\" required>\n                        </div>\n    \n                        <button type=\"submit\" class=\"btn btn-default\" (click)=\"changeVoyage(vvoyage.id)\">Change Voyage</button>\n\n                    </form>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <h3>Google Maps</h3>\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n                  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n                </agm-map>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"voyage\" *ngFor=\"let d of voyageDay; let idx = index\">\n                    <h3>Day {{idx + 1}}</h3>\n                    \n                    <div class=\"schedule\" *ngFor=\"let s of d.schedule; let idx = index\">\n                        <h4>Schedule {{idx + 1}}</h4>      \n                            <form>\n                                <div class=\"form-group\">\n                                    <label for=\"Budget\">Budget [{{s.budget}}] $ (enter new value)</label>\n                                    <input type=\"number\" [(ngModel)]=\"scheduleBudget\" name=\"scheduleBudget\" class=\"form-control\" id=\"scheduleBudget\" required>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"Destination\">Destination: [{{s.destination}}] (enter new value)</label>\n                                    <input type=\"text\" [(ngModel)]=\"scheduleDestination\" name=\"scheduleDestination\" class=\"form-control\" id=\"scheduleDestination\" required>\n                                </div>\n                                <div class=\"form-group\">\n                                    <label for=\"Transport\">Transport [{{s.transport.transport}}] : [{{s.transport.budget}}] (enter new value)</label>\n                                    <input type=\"text\" [(ngModel)]=\"scheduleTransportTransport\" name=\"scheduleTransportTransport\" class=\"form-control\" id=\"scheduleTransportTransport\" required>\n                                    <input type=\"text\" [(ngModel)]=\"scheduleTransportBudget\" name=\"scheduleTransportBudget\" class=\"form-control\" id=\"scheduleTransportBudget\" required>\n                                </div>\n                                <button type=\"submit\" class=\"btn btn-default\" (click)=\"changeSchedule(s.id)\">Change schedule</button>\n                            </form>\n                            \n                            <br/>\n                            <div class=\"activity\" *ngFor=\"let a of s.activities; let idx = index\">\n                                <h4>Activity {{idx + 1}}</h4>\n                                <form>\n                                    <div class=\"form-group\">\n                                        <label for=\"Budget\">Budget [{{a.budget}}] $</label>\n                                        <input type=\"number\" [(ngModel)]=\"activityBudget\" name=\"activityBudget\" class=\"form-control\" id=\"activityBudget\" required>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"Address\">Address: [{{a.address}}]</label>\n                                        <input type=\"text\" [(ngModel)]=\"activityAddress\" name=\"activityAddress\" class=\"form-control\" id=\"activityAddress\" required>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"Begin\">Begin [{{a.begin.toLocaleString()}}]</label>\n                                        <input type=\"datetime-local\" [(ngModel)]=\"activityBegin\" name=\"activityBegin\" class=\"form-control\" id=\"activityBegin\" required>\n                                    </div>\n                                    <div class=\"form-group\">\n                                        <label for=\"End\">End [{{a.end.toLocaleString()}}]</label>\n                                        <input type=\"datetime-local\" [(ngModel)]=\"activityEnd\" name=\"activityEnd\" class=\"form-control\" id=\"activityEnd\" required>\n                                    </div>\n                                    <button type=\"submit\" class=\"btn btn-default\" (click)=\"changeActivity(a.id)\">Change activity</button>\n                                    <br/>\n                                </form>\n                            </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <br/>\n\n    </div>\n\n</div>\n\n    <router-outlet></router-outlet>\n    \n\n    \n    ",
        styles: ["\n    .bgimg {\n        background-image: url('https://www.hdwallpapers.in/walls/town_huawei_mate_9_stock-wide.jpg');\n        min-height: 100%;\n        background-position: center;\n        background-size: cover;\n        color: white;\n    }\n    \n    table {\n        border-collapse: collapse;\n    }\n    \n    table,\n    td,\n    th {\n        border: 2px solid white;\n        padding: 5px;\n    }\n    \n    .createVoyage {\n        border: 4px solid white;\n        border-radius: 5px;\n    }\n    \n    .schedule {\n        padding-right: 5px;\n        padding-left: 5px;\n        border: 2px solid white;\n        border-radius: 5px;\n    }\n    \n    .activity {\n        margin: 15px;\n    \n        padding-right: 5px;\n        padding-left: 5px;\n        border: 1px solid white;\n        border-radius: 5px;\n        \n        color: black;\n        background-color: white;\n    }\n    \n    .getValue {\n        color: gray;\n        background-color: white;\n    }\n    \n    agm-map {\n      height: 300px;\n    }\n  "],
    }),
    __metadata("design:paramtypes", [http_1.Http])
], DetailComponent);
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map