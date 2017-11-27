"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
var core_1 = require("@angular/core");
var song_1 = require("./model/song");
var SongService = (function () {
    function SongService() {
    }
    SongService.prototype.getAllSongs = function () {
        return Promise.resolve(song_1.SONGS);
    };
    SongService.prototype.getSongsOfAlbum = function (albumID) {
        var result = song_1.SONGS.filter(function (s) { return s.album === albumID; });
        return Promise.resolve(result);
    };
    return SongService;
}());
SongService = __decorate([
    core_1.Injectable()
], SongService);
exports.SongService = SongService;
