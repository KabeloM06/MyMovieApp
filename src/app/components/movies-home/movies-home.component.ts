import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/movies';

@Component({
  selector: 'app-movies-home',
  templateUrl: './movies-home.component.html',
  styleUrls: ['./movies-home.component.css']
})
export class MoviesHomeComponent implements OnInit {

  movies: Movies[] = [];
  notWatchedYet: Movies[] = [];
  watchedMovies: Movies[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
