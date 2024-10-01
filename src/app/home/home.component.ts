import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: any[] = []; // Will hold the movie data

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    // Fetch movie data from the JSON file using the MovieService
    this.movieService.getMovies().subscribe((data: any[]) => {
      this.movies = data;
    });
  }

  // Function to slide the movie list
  slideMovies(direction: string): void {
    const slider = document.getElementById('movieSlider');
    const scrollAmount = 300; // Amount to scroll (adjust as per your design)
    if (direction === 'right' && slider) {
      slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else if (direction === 'left' && slider) {
      slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  }
}
