import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  private url = 'assets/cinemas.json'; // Path to your JSON file

  constructor(private http: HttpClient) { }

  getCinemas(): Observable<any> {
    return this.http.get(this.url);
  }
}
