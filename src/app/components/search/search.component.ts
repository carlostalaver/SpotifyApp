import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  artistas: Array<any>;
  loading = true;

  constructor( private spotifuService: SpotifyService) { }

  ngOnInit() {
  }


  buscar(termino) {
    this.loading = false;
    if ((termino.value as string).length === 0) {
      return;
    }
    this.spotifuService.getArtists((termino.value as string))
      .subscribe((artistas: Array<any>) => {
        console.log(artistas);
        this.artistas = artistas;
        this.loading = true;
      });

  }
}
