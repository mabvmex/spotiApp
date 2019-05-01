
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
      'Authorization': 'Bearer BQBaBNs3fuN5oFBJ6PHCD3F4-J_S1LNbQ1NR3Bn8wFZxujRuKwM1pcFpsWRRlzsJRMqLoHdkArBLAKkrCUQ'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?country=MX&limit=50')
      .pipe(map(data => data['albums'].items));
  }

  getArtist(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=50`)
      .pipe(map(data => data['artists'].items));
  }

}
