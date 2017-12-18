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
var app_service_1 = require("./service/app.service");
var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.title = 'Super musique infinie';
        this.isAuthenticated = false;
    }
    /*login(): void {
        this.isAuthenticated = !this.isAuthenticated;
    }*/
    AppComponent.prototype.logout = function () {
        this.appService.isAuthenticated = false;
        localStorage.removeItem('Token');
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div class=\"container\">\n        <div *ngIf=\"this.appService.isAuthenticated === false\" class=\"page-header\" id=\"banner\">\n            <button class=\"btn btn-default\" [routerLink]=\"['/','login']\">Login - R\u00E9cup\u00E9rer le token</button>\n            <button class=\"btn btn-default\" [routerLink]=\"['/','register']\">Enregistrer un nouvel utilisateur</button>\n        </div>\n        <div *ngIf=\"this.appService.isAuthenticated !== false\">\n        <button class=\"btn btn-default\" (click)=\"logout()\" [routerLink]=\"['/','/']\">Logout</button>\n      </div>\n    </div>\n    <router-outlet></router-outlet>\n    ",
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map