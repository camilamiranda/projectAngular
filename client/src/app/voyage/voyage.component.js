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
//import {Destination} from '../model/destination';
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var VoyageComponent = (function () {
    function VoyageComponent(http) {
        this.http = http;
        this.title = '';
        this.publicVoyages = [
            {
                id: '1',
                isPublic: true,
                userID: '1',
                title: 'voyage1',
                duration: 7,
                budget: 100,
                day: []
            }
        ];
        this.myVoyage = [
            {
                id: '1',
                isPublic: false,
                userID: '1',
                title: 'voyage1',
                duration: 7,
                budget: 100,
                day: []
            }
        ];
        //destinations: Destination[] = [];
        this.failed = false;
    }
    VoyageComponent.prototype.ngOnInit = function () {
        // this.allPublicVoyage();
        if (this.isLoged()) {
            this.myVoyageCall();
        }
    };
    VoyageComponent.prototype.isLoged = function () {
        return localStorage.getItem('Token') != null;
    };
    VoyageComponent.prototype.allPublicVoyage = function () {
        var _this = this;
        this.http.get('http://localhost:11601/api/all').toPromise()
            .then(function (response) {
            console.log(response.json());
            _this.publicVoyages = response.json();
        });
    };
    VoyageComponent.prototype.myVoyageCall = function () {
        var _this = this;
        var token = localStorage.getItem('Token');
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.get('http://localhost:11601/api/get', options).toPromise()
            .then(function (response) {
            console.log(response.json());
            _this.myVoyage = response.json();
        });
    };
    /*addDestination(desti: string, ds: number): void{
        let newDes = new Destination;
        newDes.destination = desti;
        newDes.days = ds;
        this.destinations.push(newDes);
    }*/
    VoyageComponent.prototype.addVoyage = function () {
        if (this.isLoged()) {
            this.failed = false;
            var newVoyage = new voyage_1.Voyage();
            newVoyage.title = this.title;
            newVoyage.isPublic = this.isPublic;
            newVoyage.duration = this.duration;
            newVoyage.budget = this.budget;
            var token = localStorage.getItem('Token');
            var headers = new http_1.Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            });
            var options = new http_1.RequestOptions({ headers: headers });
            // this.http.post("http://localhost:11601/api/new", JSON.stringify(newVoyage), options).toPromise();
            console.log(newVoyage);
        }
        else {
            this.failed = true;
        }
    };
    return VoyageComponent;
}());
VoyageComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\n<!--<br/><br/>\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<div class=\"bgimg\"/>-->\n\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div class=\"voyage\" *ngFor=\"let v of publicVoyages\">\n                        <h3>All voyage</h3>\n                        <table style=\"width:100%;\">\n                            <tr>\n                                <th colspan=\"2\"><i>Title:</i> {{v.title}}</th>\n                                <th><i>Budget:</i> {{v.budget}} $</th>\n                            </tr>\n                            <tr>\n                                <th><i>User:</i> {{v.userID}}</th>\n                                <th><i>Days:</i> {{v.duration}}</th>\n                                <th><i>IsPublic:</i> {{v.isPublic}}</th>\n                            </tr>\n                            <tr>\n                                <th colspan=\"3\"><i>Schedule:</i> {{v.day}}</th>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"voyage\" *ngFor=\"let v of myVoyage\">\n                        <h3>My voyage</h3>\n                        <table style=\"width:100%;\">\n                            <tr>\n                                <th colspan=\"2\"><i>Title:</i> {{v.title}}</th>\n                                <th><i>Budget:</i> {{v.budget}} $</th>\n                            </tr>\n                            <tr>\n                                <th><i>User:</i> {{v.userID}}</th>\n                                <th><i>Days:</i> {{v.days}}</th>\n                                <th><i>IsPublic:</i> {{v.isPublic}}</th>\n                            </tr>\n                            <tr>\n                                <th colspan=\"3\"><i>Schedule:</i> {{v.schedule}}</th>\n                            </tr>\n                        </table>\n                    </div>\n                </div>\n            </div>\n            <br/>\n            <br/>\n            <div class=\"row createVoyage\">\n\n                <h1 style=\"background-color: darkgray;\">New Voyage</h1>\n                <h4 *ngIf=\"failed\" style=\"color: red; background-color: white; text-align: center;\"> FAILED <i>(Are you connected?)</i></h4>\n                <div class=\"col-md-5\">\n                    <form>\n                        <div class=\"form-group\">\n                            <label for=\"title\">Title</label>\n                            <input type=\"text\" [(ngModel)]=\"title\" name=\"title\" class=\"form-control\" id=\"title\" required>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"text\">Number of days</label>\n                            <input type=\"number\" [(ngModel)]=\"duration\" name=\"days\" class=\"form-control\" id=\"days\" min=\"1\" required>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"text\">Budget $</label>\n                            <input type=\"number\" [(ngModel)]=\"budget\" name=\"budget\" class=\"form-control\" id=\"budget\" required>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"public\">This is public / private</label>\n                            <input type=\"checkbox\" [(ngModel)]=\"isPublic\" name=\"isPublic\" class=\"form-control\" id=\"public\" required>\n                        </div>\n\n                    </form>\n                </div>\n\n                <div class=\"col-md-4\">\n                    <form>\n                        <div class=\"form-group\">\n                            <label for=\"title\">Destination(s) for {{days}} days</label>\n                            <input type=\"text\" [(ngModel)]=\"destination\" name=\"destination\" class=\"form-control\" id=\"destination\">\n                        </div>\n                    \n                        <div class=\"form-group\">\n                            <label for=\"title\">Number of days for {{destination}}</label>\n                            <input type=\"number\" [(ngModel)]=\"destinationDays\" name=\"destinationDays\" class=\"form-control\" id=\"destinationDays\" min=\"1\">\n                        </div>\n                        \n                        <button type=\"submit\" class=\"btn btn-default\" (click)=\"addDestination(destination, destinationDays)\">Add destination</button>\n                    </form>\n                </div>\n\n                <div class=\"col-md-3\">\n                    <div *ngFor=\"let d of destinations; let i = index\" [attr.data-index]=\"i\">\n                    <label for=\"title\"><i>{{i+1}} Destination</i></label>\n                    <ul style=\"text-align: center;\">\n                      <li class=\"btn btn-default\">{{d.days}} days in {{d.destination}}</li>\n                    </ul>\n                    </div>\n                    \n                    <button type=\"submit\" class=\"btn btn-success\" style=\"width:100%;\" (click)=\"addVoyage()\">Create</button>\n                </div>\n\n            </div>\n\n        </div>\n        \n    \n    \n    <!--<router-outlet></router-outlet>-->\n    \n\n    \n    ",
        styles: ["\n    .bgimg {\n        background-image: url('https://www.hdwallpapers.in/walls/town_huawei_mate_9_stock-wide.jpg');\n        min-height: 100%;\n        background-position: center;\n        background-size: cover;\n        color: white;\n    }\n    \n    table {\n        border-collapse: collapse;\n    }\n    \n    table,\n    td,\n    th {\n        border: 2px solid white;\n        padding: 5px;\n    }\n    \n    .createVoyage {\n        border: 4px solid white;\n        border-radius: 5px;\n    }\n    \n    .container {\n        background-color: #919cad;\n    }\n  "],
    }),
    __metadata("design:paramtypes", [http_1.Http])
], VoyageComponent);
exports.VoyageComponent = VoyageComponent;
//# sourceMappingURL=voyage.component.js.map