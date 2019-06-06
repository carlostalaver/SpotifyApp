import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: unknown;
  error: boolean;
  mensajeError: string;

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    this.error = false;
    this.spotifyService.getNewRelease()
    .subscribe((albums) => {
      this.nuevasCanciones = albums;
      console.log(albums);
    }, err => {
      this.error = true;
      this.mensajeError = err.error.error.message;
    });
  }

}
