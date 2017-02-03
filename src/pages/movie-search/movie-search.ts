import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieService} from '../../providers/movie-service';
import {MovieInfoPage} from '../movie-info/movie-info';

@Component({
  selector: 'page-movie-search',
  templateUrl: 'movie-search.html',
  providers: [MovieService],
  entryComponents: [MovieInfoPage]
})
export class MovieSearchPage {
  movies: Array<any>;
  public searchTerm: string;
  constructor(public navCtrl: NavController, private movieService: MovieService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieSearchPage');
  }

  searchMovieDB() {
    if(this.searchTerm.length > 2) {
      this.movieService.searchMovies(this.searchTerm).subscribe(
        data => {
          this.movies = data.results; 
          //console.log(data);
        },
        err => {
          console.log(err);
        },
        () => console.log('Movie Search Complete')
      );
    }
  }

  selectItem(event, movie) {
		console.log(movie.title + ' was selected.');  
		this.navCtrl.push(MovieInfoPage, {
			movie: movie
		});
  }
}
