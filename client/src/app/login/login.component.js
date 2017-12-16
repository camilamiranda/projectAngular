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
/**
 * Created by 1395118 on 2017-12-04.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
require("rxjs/add/operator/toPromise");
var LoginComponent = (function () {
    function LoginComponent(http, route) {
        this.http = http;
        this.route = route;
        this.emailUtil = '';
        this.passwordUtil = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('login');
    };
    LoginComponent.prototype.login = function () {
        var body = new http_1.URLSearchParams();
        body.set('grant_type', 'password');
        body.set('username', this.emailUtil);
        body.set('password', this.passwordUtil);
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        this.http.post('http://localhost:11601/Token', body, options).toPromise()
            .then(function (response) {
            console.log(response.json());
            localStorage.setItem('Token', response.json().access_token);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: 'loginComponent',
        template: "\n    <div>\n          <h2>Email</h2>\n          <input class=\"form-control\" [(ngModel)]=\"emailUtil\" placeholder=\"email\"/>\n      </div>\n      <div>\n          <h2>Password</h2>\n          <input class=\"form-control\" [(ngModel)]=\"passwordUtil\" placeholder=\"password\"/>\n      </div>\n      \n    <div class=\"row\">\n      <div>\n        <button class=\"btn btn-default\" (click)=\"login()\" [routerLink]=\"['/','voyage']\">Authentification</button>\n      </div>\n    </div>\n    ",
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.ActivatedRoute])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map