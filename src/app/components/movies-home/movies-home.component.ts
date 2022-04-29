import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/movies';
import { MoviesService } from 'src/app/services/movies-service.service';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.css']
})
export class MoviesHomeComponent implements OnInit {

  movies: Movies[] = [];
  notWatchedYet: Movies[] = [];
  watchedMovies: Movies[] = [];
  

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => this.movies = movies);
    console.log('movies', this.movies);
  }

  // Filter to see which list a movie belongs into
  // watched or not watched 
  ngDoCheck(): void {
    if (this.movies.length && !this.watchedMovies.length){
      this.notWatchedYet = this.movies.filter((m) => !m.isFav && !m.isWatched);
      this.watchedMovies = this.movies.filter((m) => m.isWatched);
    }
  }

}
