import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private jsonUrl = 'assets/movies.json';

  constructor(private http: HttpClient) {}

  // Method to fetch movie data from JSON file
  getMovies(): Observable<any> {
    return this.http.get(this.jsonUrl);
  }
}
