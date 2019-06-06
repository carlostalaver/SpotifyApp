import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {
  artist: any = {};
  loading = false;
  topTracks: Array<any> = [];
  url = 'https://open.spotify.com/embed?uri=';

  constructor(private route: ActivatedRoute, private spotifyService: SpotifyService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.getArtista(params.id);
      this.getTopTracks(params.id);
    });
  }

  getArtista(id: string) {
    this.spotifyService.getArtist(id)
    .subscribe( (artista: any) => {
      this.artist = artista;
      this.loading = true;
      console.log('el artista ', artista);

    });
  }

  getTopTracks(id: string) {
    this.spotifyService.getTopTracks(id)
      .subscribe(( topTracks: Array<any>) => {
        this.topTracks = topTracks;
        console.log(this.topTracks);
      });
  }

}
