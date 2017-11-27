"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var album_1 = require("./model/album");
var song_1 = require("./model/song");
var AlbumService = (function () {
    function AlbumService() {
    }
    AlbumService.prototype.getAlbum = function (albumname) {
        var album;
        var result = album_1.ALBUMS.filter(function (a) { return a.name === album.name; });
        if (result.length > 0) {
            album = result[0];
        }
        return Promise.resolve(album);
    };
    AlbumService.prototype.getSongsOfAlbum = function (albumsongs) {
        var album;
        var result = album_1.ALBUMS.filter(function (a) { return a.name === album.name; });
        if (result.length > 0) {
            album = result[0];
        }
        var songs = song_1.SONGS.filter(function (s) { return s.album === album.id; });
        return Promise.resolve(songs);
    };
    return AlbumService;
}());
AlbumService = __decorate([
    core_1.Injectable()
], AlbumService);
exports.AlbumService = AlbumService;
//# sourceMappingURL=album.service.js.map