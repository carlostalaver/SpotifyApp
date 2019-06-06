import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {TOKEN} from '../config';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewRelease(): Observable<object> {
    const URL = `${this.getQuery()}browse/new-releases`;

    const headers = new HttpHeaders({
      Authorization: `${TOKEN}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });

    return this.http.get(URL, { headers })
      .pipe(
        map((res: any) => {
            return res.albums.items;
        })
      );
  }

  getArtists(artist: string, type = 'artist', market= 'US' ): Observable<object> {
    const URL = `${this.getQuery()}search?q=${artist}&type=${type}&${market}=US&limit=10&offset=5`;

    const headers = new HttpHeaders({
      Authorization: `${TOKEN}`,
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });

    return this.http.get(URL, {headers})
      .pipe(
        map( (res: any) => res.artists.items)
      );
  }

 getArtist(id: string): Observable<object> {
  const URL = `${this.getQuery()}artists/${id}`;

  const headers = new HttpHeaders({
    Authorization: `${TOKEN}`,
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });

  return this.http.get(URL, {headers});
 }

 getTopTracks(id: string, country = 'us', ): Observable<object> {
  const URL = `${this.getQuery()}artists/${id}/top-tracks?country=${country}`;

  const headers = new HttpHeaders({
    Authorization: `${TOKEN}`,
    'Content-Type': 'application/json',
    Accept: 'application/json'
  });

  return this.http.get(URL, {headers})
    .pipe(
      map( (res: any) => res.tracks)
    );
 }

  getQuery(): string {
    return `https://api.spotify.com/v1/`;
  }
}
