import {Component, Input, OnInit} from '@angular/core';
import {Artist} from "./model/artist";
import {Album} from "./model/album";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ArtistService} from "./artist.service";

@Component({
    selector: 'album-artist',
    templateUrl: './album.component.html'
})
export class AlbumComponent implements OnInit {
    @Input() artist:Artist;
    @Input() artistID:number;
    @Input() listAlbums:Album[];
    constructor(private route:ActivatedRoute, private artistService: ArtistService) {}
    ngOnInit():void
    {
        this.route.paramMap
            .subscribe(params => this.setArtist(params.get('artist')));
    }
    private setArtist(artist:string):void
    {
        this.artistService.getArtist(artist).then(a => this.artist = a);
        this.artistService.getAlbumsOfArtist(artist).then(a => this.listAlbums = a);
    }
}