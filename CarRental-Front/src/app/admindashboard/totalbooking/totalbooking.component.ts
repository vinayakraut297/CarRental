import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/booking.service';

@Component({
  selector: 'app-totalbooking',
  templateUrl: './totalbooking.component.html',
  styleUrls: ['./totalbooking.component.css']
})
export class TotalbookingComponent implements OnInit {
  bookings: any[] = [];

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.fetchBookings();
  }

  fetchBookings(): void {
    this.bookingService.getAllBookings().subscribe({
      next: (data) => {
        this.bookings = data;
        console.log(data);
      },
      error: (error) => {
        console.error('Error fetching bookings:', error);
      }
    });
  }
}