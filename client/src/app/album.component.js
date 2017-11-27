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
var artist_1 = require("./model/artist");
var router_1 = require("@angular/router");
var artist_service_1 = require("./artist.service");
var AlbumComponent = (function () {
    function AlbumComponent(route, artistService) {
        this.route = route;
        this.artistService = artistService;
    }
    AlbumComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .subscribe(function (params) { return _this.setArtist(params.get('artist')); });
    };
    AlbumComponent.prototype.setArtist = function (artist) {
        var _this = this;
        this.artistService.getArtist(artist).then(function (a) { return _this.artist = a; });
        this.artistService.getAlbumsOfArtist(artist).then(function (a) { return _this.listAlbums = a; });
    };
    return AlbumComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", artist_1.Artist)
], AlbumComponent.prototype, "artist", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], AlbumComponent.prototype, "artistID", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AlbumComponent.prototype, "listAlbums", void 0);
AlbumComponent = __decorate([
    core_1.Component({
        selector: 'album-artist',
        templateUrl: './album.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, artist_service_1.ArtistService])
], AlbumComponent);
exports.AlbumComponent = AlbumComponent;
//# sourceMappingURL=album.component.js.map