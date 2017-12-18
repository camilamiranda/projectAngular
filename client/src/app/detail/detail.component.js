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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var DetailComponent = (function () {
    function DetailComponent(http) {
        this.http = http;
    }
    DetailComponent.prototype.ngOnInit = function () {
        // this.allPublicVoyage();
        if (this.isLoged()) {
        }
    };
    DetailComponent.prototype.isLoged = function () {
        return localStorage.getItem('Token') != null;
    };
    DetailComponent.prototype.oneVoyageCall = function (v) {
        var _this = this;
        var token = localStorage.getItem('Token');
        var headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.get('http://localhost:11601/api/get/' + v.id, options).toPromise()
            .then(function (response) {
            console.log(response.json());
            _this.myVoyage = response.json();
        });
    };
    return DetailComponent;
}());
DetailComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n\n<br/>\n<br/>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n<div class=\"bgimg\">\n\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"voyage\" *ngIf=\"oneVoyage\">\n                    <h3>All voyage</h3>\n                    <table style=\"width:100%;\">\n                        <tr>\n                            <th colspan=\"2\"><i>Title:</i> {{v.title}}</th>\n                            <th><i>Budget:</i> {{v.budget}} $</th>\n                        </tr>\n                        <tr>\n                            <th><i>User:</i> {{v.userID}}</th>\n                            <th><i>Days:</i> {{v.duration}}</th>\n                            <th><i>IsPublic:</i> {{v.isPublic}}</th>\n                        </tr>\n                        <tr>\n                            <th colspan=\"3\"><i>Schedule:</i> {{v.day}}</th>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"voyage\" *ngFor=\"let v of myVoyage\">\n                    <h3>My voyage</h3>\n                    <table style=\"width:100%;\">\n                        <tr>\n                            <th colspan=\"2\"><i>Title:</i> {{v.title}}</th>\n                            <th><i>Budget:</i> {{v.budget}} $</th>\n                        </tr>\n                        <tr>\n                            <th><i>User:</i> {{v.userID}}</th>\n                            <th><i>Days:</i> {{v.days}}</th>\n                            <th><i>IsPublic:</i> {{v.isPublic}}</th>\n                        </tr>\n                        <tr>\n                            <th colspan=\"3\"><i>Schedule:</i> {{v.schedule}}</th>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <br/>\n\n    </div>\n\n</div>\n\n    <router-outlet></router-outlet>\n    \n\n    \n    ",
        styles: ["\n    .bgimg {\n        background-image: url('https://www.hdwallpapers.in/walls/town_huawei_mate_9_stock-wide.jpg');\n        min-height: 100%;\n        background-position: center;\n        background-size: cover;\n        color: white;\n    }\n    \n    table {\n        border-collapse: collapse;\n    }\n    \n    table,\n    td,\n    th {\n        border: 2px solid white;\n        padding: 5px;\n    }\n    \n    .createVoyage {\n        border: 4px solid white;\n        border-radius: 5px;\n    }\n  "],
    }),
    __metadata("design:paramtypes", [http_1.Http])
], DetailComponent);
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map