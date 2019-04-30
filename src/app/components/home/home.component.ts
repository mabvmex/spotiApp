import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  // paises: any[] = [];

  // constructor(private http: HttpClient) {

  //   console.log('constructor del HOME hecho');
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //     .subscribe((dataPaises: any) => {
  //       this.paises = dataPaises;
  //       console.log(dataPaises);
  //     });
  // constructor(private http: HttpClient) {


  estrenos: any[] = [];

  constructor(private spotify: SpotifyService) {

    this.spotify.getNewReleases()
      .subscribe( (data: any) => {     //No sabemos como viene el formato
      console.log( data.albums.items);
      this.estrenos = data.albums.items;
    });
  }




}
