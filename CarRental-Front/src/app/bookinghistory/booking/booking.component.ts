import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/booking.service';
import { CarService } from 'src/app/car.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  carId!: number;
  userId!: number;
  startDate!: string;
  endDate!: string;
  totalCost?: number;
  pricePerDay!: number;

  constructor(
    private bookingService: BookingService,
    private carService: CarService,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.carId = Number(this.route.snapshot.paramMap.get('id')); // Get carId from URL
    this.userId = Number(localStorage.getItem('userId'));
    console.log("Retrieved userId for booking:", this.userId);

    this.carService.getCars().subscribe((cars) => {
      const car = cars.find((c) => c.id === this.carId);
      if (car) {
        this.pricePerDay = Number(car.priceperday); // Ensure it's a number
      }
    });
  }

  calculateTotalCost(): void {
    if (this.startDate && this.endDate && this.pricePerDay) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);

      if (start >= end) {
        alert('End date must be after start date');
        this.totalCost = undefined;
        return;
      }

      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

      this.totalCost = diffDays * this.pricePerDay;
    } else {
      this.totalCost = undefined;
    }
  }


  bookCar(): void {
    const booking = {
      user: { id: this.userId },
      car: { id: this.carId },
      userId: this.userId,
      carId: this.carId,
      startDate: this.startDate,
      endDate: this.endDate,
      totalCost: this.totalCost
    };
    this.bookingService.createBooking(booking).subscribe({
      next: (response) => {
        alert(`Booking successful! Total Cost: ₹${response.totalCost}`);
        console.log("Booking Data:", booking);
         this.router.navigate(['/bookinghistory']); 
      },
      error: (error) => {
        alert('Booking failed. Please try again.');
        console.error(error);
      }
    });
  }

}