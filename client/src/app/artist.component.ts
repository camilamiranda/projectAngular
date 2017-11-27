import {Component, Input, OnInit} from '@angular/core';
import { Artist,ARTISTS } from "./model/artist";
import {ArtistService} from "./artist.service";

@Component({
    selector: 'artist-selected',
    templateUrl: './artist.component.html'
})

export class ArtistComponent implements OnInit {
    artists: Artist[];
    constructor(private artistService: ArtistService){}
    ngOnInit(): void
    {
        this.artistService.getAllArtists().then(artists => this.artists = artists);
    }
}