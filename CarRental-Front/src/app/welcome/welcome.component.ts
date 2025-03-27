import { Component, OnInit } from '@angular/core';
import { Car, CarService } from '../car.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  cars: Car[] = [];
  filteredCars: Car[] = [];  
  searchText: string = '';   

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    this.carService.getCars().subscribe(
      (data) => {
        this.cars = data;
        this.filteredCars = data; // Initialize filteredCars with all cars initially
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }

  // Search function to filter cars based on user input
  onSearch(): void {
    const searchValue = this.searchText.toLowerCase();
    this.filteredCars = this.cars.filter(car => 
      car.brand.toLowerCase().includes(searchValue) || 
      car.model.toLowerCase().includes(searchValue)
    );
  }
}
