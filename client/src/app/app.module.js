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
var app_component_1 = require("./app.component");
var album_service_1 = require("./album.service");
var album_component_1 = require("./album.component");
var router_1 = require("@angular/router");
var artist_component_1 = require("./artist.component");
var song_component_1 = require("./song.component");
var artist_service_1 = require("./artist.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: '/artists', pathMatch: 'full' },
                { path: 'artists', component: artist_component_1.ArtistComponent },
                { path: 'album/:artist', component: album_component_1.AlbumComponent },
                { path: 'song/:artist/:album', component: song_component_1.SongComponent }
            ])],
        declarations: [app_component_1.AppComponent, artist_component_1.ArtistComponent, album_component_1.AlbumComponent, song_component_1.SongComponent],
        providers: [artist_service_1.ArtistService, album_service_1.AlbumService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map