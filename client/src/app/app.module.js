"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var core_2 = require("@agm/core");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var voyage_component_1 = require("./voyage/voyage.component");
var app_service_1 = require("./service/app.service");
var detail_component_1 = require("./detail/detail.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: '/', pathMatch: 'full' },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'register', component: register_component_1.RegisterComponent },
                { path: 'voyage', component: voyage_component_1.VoyageComponent },
                { path: 'detail', component: detail_component_1.DetailComponent },
            ]),
            core_2.AgmCoreModule.forRoot({
                apiKey: 'AIzaSyAhL-yPSfHxIOpLgUlhhj4YoiLRtpBxDsM'
            })
        ],
        declarations: [app_component_1.AppComponent, login_component_1.LoginComponent, register_component_1.RegisterComponent, voyage_component_1.VoyageComponent, detail_component_1.DetailComponent],
        providers: [app_service_1.AppService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map