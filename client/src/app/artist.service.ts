import {Injectable} from "@angular/core";
import {Artist, ARTISTS} from "./model/artist";
import {Album, ALBUMS} from "./model/album";

@Injectable()
export class ArtistService {

    public getAllArtists(): Promise<Artist[]> {
        return Promise.resolve(ARTISTS);
    }

    public getArtist(artistname: string): Promise<Artist> {
        let artist: Artist;
        let result: Artist[] = ARTISTS.filter(a => a.name === artistname);
        if (result.length > 0)
        {
            artist = result[0];
        }
        return Promise.resolve(artist);
    }

    public getAlbumsOfArtist(artistname: string): Promise<Album[]> {
        let artist: Artist;
        let result: Artist[] = ARTISTS.filter(a => a.name === artistname);
        if (result.length > 0)
        {
            artist = result[0];
        }
        let albums: Album[] = ALBUMS.filter(a => a.artist === artist.id);
        return Promise.resolve(albums);
    }

}
