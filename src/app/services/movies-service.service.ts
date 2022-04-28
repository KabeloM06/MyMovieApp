import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../movies';

const httpOptions = {
  headers: new HttpHeaders({
    'Çontent-Type' : 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseApiUrl = 'http://localhost:4200/movies'

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movies[]>{
    return this.http.get<Movies[]>(this.baseApiUrl);
  }
}
