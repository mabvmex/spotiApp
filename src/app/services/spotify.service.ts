
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery(query: string) { // El proposito de este metódo es centralizar las peticiones de URL

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCUq86g6wk9X7GQ1NRzozBPKhJQ2uJKtEwdjBpk_XjJL10T812ZBNddbzfF2IvHXjpH3b4g1GwVhBa41-0'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    // return this.getQuery('browse/new-releases?country=mx&limit=20')
    return this.getQuery('browse/new-releases?country=mx&limit=50')
      .pipe(map(data => data['albums'].items));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=50`)
      .pipe(map(data => data['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
    // .pipe(map(data => data['artist'].items));
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=mx`)
    .pipe(map(data => data['tracks']));

  }
}