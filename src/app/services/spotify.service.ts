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
      'Authorization': 'Bearer BQD2nj1oN3NqcoGrzOjtdlyY3p3ukGjgjkQjWFlXOCR8NoG4kjwMqRcz6CSHHq6kShsa2gfIvk6BQ8yThFpTNxn1K8ekdGzdrpAYoUtUpl5dWfM4KVUwdoyZhIJRbgrl9LyqHI1Wa5ZfXg' });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
      // .subscribe((data: any) => {
      //   console.log(data);
      // });
  }
}
