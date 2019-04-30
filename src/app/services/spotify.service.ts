
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDDrvrp3GNgW6RzzRogoHKXysAjQ0cGyidHinW0_nffIStdc_ZZrDEfaxWDFp4PyzInkSiGke1uzhl17j6u7GtnsJv5qS5GAlSgHZTaeUyIM2h8sEG0qWPvi1LC0sGHAAtAM6G1sl8RBw'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtist(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDDrvrp3GNgW6RzzRogoHKXysAjQ0cGyidHinW0_nffIStdc_ZZrDEfaxWDFp4PyzInkSiGke1uzhl17j6u7GtnsJv5qS5GAlSgHZTaeUyIM2h8sEG0qWPvi1LC0sGHAAtAM6G1sl8RBw'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, { headers });
  }

}
