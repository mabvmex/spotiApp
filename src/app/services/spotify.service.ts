
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
      'Authorization': 'Bearer BQCuUZkGmOFeY-YKpDMJ9-gm70UNKvoyOcc03r1gQo6bz5WN5y-o-wXGHlfl5COrBtXbK8VXiE-mca7aMvI'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    // return this.getQuery('browse/new-releases?country=mx&limit=20')
    return this.getQuery('browse/new-releases?country=mx&limit=50')
      .pipe(map(data => data['albums'].items));
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
      .pipe(map(data => data['artists'].items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
      // .pipe(map(data => data['artist'].items));
  }


}
