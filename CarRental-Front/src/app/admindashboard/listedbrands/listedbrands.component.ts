import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/car.service';

@Component({
  selector: 'app-listedbrands',
  templateUrl: './listedbrands.component.html',
  styleUrls: ['./listedbrands.component.css']
})
export class ListedbrandsComponent  implements OnInit {
  brands: string[] = [];

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.fetchBrands();
  }

  fetchBrands(): void {
    this.carService.getAllBrands().subscribe({
      next: (data) => {
        this.brands = data;
      },
      error: (error) => {
        console.error('Error fetching brands:', error);
      }
    });
  }
}