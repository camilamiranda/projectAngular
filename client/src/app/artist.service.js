"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var artist_1 = require("./model/artist");
var album_1 = require("./model/album");
var ArtistService = (function () {
    function ArtistService() {
    }
    ArtistService.prototype.getAllArtists = function () {
        return Promise.resolve(artist_1.ARTISTS);
    };
    ArtistService.prototype.getArtist = function (artistname) {
        var artist;
        var result = artist_1.ARTISTS.filter(function (a) { return a.name === artistname; });
        if (result.length > 0) {
            artist = result[0];
        }
        return Promise.resolve(artist);
    };
    ArtistService.prototype.getAlbumsOfArtist = function (artistname) {
        var artist;
        var result = artist_1.ARTISTS.filter(function (a) { return a.name === artistname; });
        if (result.length > 0) {
            artist = result[0];
        }
        var albums = album_1.ALBUMS.filter(function (a) { return a.artist === artist.id; });
        return Promise.resolve(albums);
    };
    return ArtistService;
}());
ArtistService = __decorate([
    core_1.Injectable()
], ArtistService);
exports.ArtistService = ArtistService;
//# sourceMappingURL=artist.service.js.map