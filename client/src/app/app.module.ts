import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppComponent }  from './app.component';
import {AlbumService} from "./album.service";
import {AlbumComponent} from "./album.component";
import {RouterModule} from "@angular/router";
import {ArtistComponent} from "./artist.component";
import {SongComponent} from "./song.component";
import {ArtistService} from "./artist.service";

@NgModule({
  imports: [BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/artists', pathMatch: 'full' },
      { path: 'artists', component: ArtistComponent },
      { path: 'album/:artist', component: AlbumComponent },
      { path: 'song/:artist/:album', component: SongComponent }
    ])],
  declarations: [AppComponent, ArtistComponent, AlbumComponent, SongComponent],
  providers: [ ArtistService, AlbumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
