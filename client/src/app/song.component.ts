import {Component, Input, OnInit} from '@angular/core';
import { Album } from "./model/album";
import { Song } from "./model/song";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {AlbumService} from "./album.service";

@Component({
    selector: 'song-fromalbum',
    templateUrl: './song.component.html'
})
export class SongComponent implements OnInit {
    @Input() album:Album;
    @Input() listSongs:Song[];
    constructor(private route:ActivatedRoute, private albumService: AlbumService) {}

    ngOnInit():void {
        this.route.paramMap
            .subscribe(params => this.setAlbum(params.get('album')));
    }

    private setAlbum(album:string):void {
        this.albumService.getAlbum(album).then(a => this.album = a);
        this.albumService.getSongsOfAlbum(album).then(a => this.listSongs = a);
    }
}
