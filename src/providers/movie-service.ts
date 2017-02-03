import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MovieService {
  static get parameters() {
        return [[Http]];
  }
  constructor(public http: Http) {
    console.log('started MovieService Provider');
  }
  searchMovies(movieName: string) {
          var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
          var response = this.http.get(url).map(res => res.json());
          console.log(url);
      return response;
  }

}
