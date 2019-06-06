import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from './services/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 title = 'spotyApp';
}
