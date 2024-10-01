import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

interface Movie {
  title: string;
}

interface Cinema {
  name: string;
  showtimes: string[];
}

interface Seat {
  booked: boolean;
  label: string;
}

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent implements OnInit {
  movie!: Movie;
  cinema!: Cinema;
  date!: Date;
  showtime!: string;
  seatMap: Seat[][] = [];
  selectedSeats: { row: number, col: number }[] = [];
  confirmationMessage: string = '';  // Add this line
  showModal: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {
    this.initializeNavigationState();
    this.seatMap = this.generateSeatMap(10, 20); // Example: 10 rows, 20 seats per row
  }

  ngOnInit(): void {}

  initializeNavigationState() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      const state = navigation.extras.state as any;
      this.movie = state.movie;
      this.cinema = state.cinema;
      this.date = state.date;
      this.showtime = state.showtime;
    }
  }

  generateSeatMap(rows: number, cols: number): Seat[][] {
    let map = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < cols; j++) {
        row.push({ booked: Math.random() < 0.2, label: String.fromCharCode(65 + i) + (j + 1) });
      }
      map.push(row);
    }
    return map;
  }

  toggleSeat(rowIndex: number, seatIndex: number): void {
    if (this.seatMap[rowIndex][seatIndex].booked) return;
    let seatFound = this.selectedSeats.find(s => s.row === rowIndex && s.col === seatIndex);
    if (seatFound) {
      this.selectedSeats = this.selectedSeats.filter(s => s !== seatFound);
    } else {
      this.selectedSeats.push({ row: rowIndex, col: seatIndex });
    }
  }

  isSelectedSeat(rowIndex: number, seatIndex: number): boolean {
    return !!this.selectedSeats.find(s => s.row === rowIndex && s.col === seatIndex);
  }

  confirmSelection(): void {
    const selectedLabels = this.selectedSeats.map(s => this.seatMap[s.row][s.col].label);
    this.confirmationMessage = 'You have booked the following seats: ' + selectedLabels.join(', ');
    this.showModal = true;  // Show the modal with the confirmation message
  }

  closeModal(): void {
    this.showModal = false;  // Hide the modal
  }

  goBack() {
    this.location.back();
  }
  
}
