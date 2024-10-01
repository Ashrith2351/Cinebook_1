import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { LoginComponent } from './login/login.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'book-tickets', component: BookTicketsComponent },
  { path: 'seat-selection', component: SeatSelectionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
