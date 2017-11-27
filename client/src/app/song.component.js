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
var album_1 = require("./model/album");
var router_1 = require("@angular/router");
var album_service_1 = require("./album.service");
var SongComponent = (function () {
    function SongComponent(route, albumService) {
        this.route = route;
        this.albumService = albumService;
    }
    SongComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .subscribe(function (params) { return _this.setAlbum(params.get('album')); });
    };
    SongComponent.prototype.setAlbum = function (album) {
        var _this = this;
        this.albumService.getAlbum(album).then(function (a) { return _this.album = a; });
        this.albumService.getSongsOfAlbum(album).then(function (a) { return _this.listSongs = a; });
    };
    return SongComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", album_1.Album)
], SongComponent.prototype, "album", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], SongComponent.prototype, "listSongs", void 0);
SongComponent = __decorate([
    core_1.Component({
        selector: 'song-fromalbum',
        templateUrl: './song.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, album_service_1.AlbumService])
], SongComponent);
exports.SongComponent = SongComponent;
//# sourceMappingURL=song.component.js.map