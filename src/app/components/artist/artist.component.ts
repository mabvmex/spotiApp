import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

artista: any = {};
topTracks: any[] = [];
loading: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {

    this.router.params.subscribe(params => {

      this.getArtist(params['id']); // Se llama la funcion de abajo.
      this.getTopTracks(params['id']);
    });
  }

  getArtist(id: string) {
    this.loading = true;
    this.spotify.getArtist(id)
      .subscribe(artista => { // El nomnbre de la variable es a discreción (respuesta, data, object, etc...)
        console.log(artista);
        this.artista = artista;
        this.loading = false;
      });
  }

getTopTracks(id: string ) {
  this.spotify.getTopTracks(id)
  .subscribe(topTracks => {
  console.log(topTracks);
  this.topTracks = topTracks;
  });
}

}
