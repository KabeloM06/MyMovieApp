import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.css'],
  
})
export class MovieTileComponent implements OnInit {

  @Input() imageUrl: string = '';
  @Input() id: number = 0;
  @Input() isWatched: boolean = false;
  @Input() isFav: boolean = false;
  @Output() favClick = new EventEmitter();
  @Output() watchedClick = new EventEmitter();

  

  constructor() { }

  ngOnInit(): void {
    // setting default values
    this.faFav = this.isFav ? bi-heart : faNotFav;
    //this.faWatched = this.isWatched ? faEye : faNotWatched;
  }

  onFavClick(): void {
    this.favClick.emit();
  }

  onWatchedClick(): void {
    this.watchedClick.emit();
  }

}
