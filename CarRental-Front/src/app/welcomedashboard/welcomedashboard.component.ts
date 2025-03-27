import { Component, OnInit } from '@angular/core';
import { Car, CarService } from '../car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcomedashboard',
  templateUrl: './welcomedashboard.component.html',
  styleUrls: ['./welcomedashboard.component.css']
})
export class WelcomedashboardComponent implements OnInit {
  cars: Car[] = [];
  userId: string | null = null;
  filteredCars: Car[] = []; 
  searchText: string = '';

  constructor(private carService: CarService,private router:Router) {}

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId');
        console.log("Retrieved userId from localStorage:", this.userId);
    this.fetchCars();
  }

  fetchCars(): void {
    this.carService.getCars().subscribe(
      (data) => {
        this.cars = data;
        this.filteredCars = data;
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }
  logout() {
    localStorage.removeItem('userId'); 
    this.router.navigate(['/welcome']);
  }
  onSearch(): void {
        const searchValue = this.searchText.toLowerCase();
        this.filteredCars = this.cars.filter(car => 
          car.brand.toLowerCase().includes(searchValue) || 
          car.model.toLowerCase().includes(searchValue)
        );
      }
}
