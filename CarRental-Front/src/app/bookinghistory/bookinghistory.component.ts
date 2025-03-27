import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bookinghistory',
  templateUrl: './bookinghistory.component.html',
  styleUrls: ['./bookinghistory.component.css']
})
export class BookinghistoryComponent implements OnInit {
  bookings: any[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    const userId = localStorage.getItem('userId'); // Retrieve logged-in user ID
    if (!userId) {
      console.error("User ID not found! Please log in.");
      return;
    }
  
    this.bookingService.getAllBookings().subscribe({
      next: (data) => {
        // Filter bookings that belong to the logged-in user
        this.bookings = data.filter((booking: any) => booking.user?.id == userId);
        console.log("Filtered Bookings:", this.bookings);
      },
      error: (error) => {
        console.error('Error fetching bookings:', error);
      }
    });
  }
  

}