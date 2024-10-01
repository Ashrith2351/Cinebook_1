import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router for navigation
import { MovieService } from '../services/movie.service'; // Import MovieService for fetching movie details
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: any; // Holds the movie details

  constructor(
    private route: ActivatedRoute, // For handling route parameters
    private movieService: MovieService, // For fetching movie data
    private router: Router, // Inject Router for navigation
    private location: Location
  ) {}

  ngOnInit(): void {
    // Get the movie ID from the route and handle null or undefined cases
    const movieId = this.route.snapshot.paramMap.get('id');
    
    // Ensure the movieId is not null or undefined before using it
    if (movieId !== null) {
      const movieIndex = +movieId; // Convert movieId to number (array index)

      // Fetch movie details based on the movie ID from the JSON file
      this.movieService.getMovies().subscribe((movies: any[]) => {
        if (movies && movieIndex >= 0 && movieIndex < movies.length) {
          this.movie = movies[movieIndex]; // Fetch the movie using the index
        }
      });
    }
  }

  onBookTickets() {
    // Navigate to the booking page (showtime and seat selection)
    this.router.navigate(['/book-tickets'], { state: { movie: this.movie } });
  }
  goBack() {
    this.location.back();
  }
}
