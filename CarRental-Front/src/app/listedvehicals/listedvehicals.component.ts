import { Component, OnInit } from '@angular/core';
import { Car, CarService } from '../car.service';

@Component({
  selector: 'app-listedvehicals',
  templateUrl: './listedvehicals.component.html',
  styleUrls: ['./listedvehicals.component.css']
})
export class ListedvehicalsComponent  implements OnInit {
  cars: Car[] = [];

  newCar: any = { model: '', brand: '', priceperday: '', fueltype: '',image:'', availability: true };

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService.getCars().subscribe((data) => {
      this.cars = data;
    });
  }


  loadCars() {
    this.carService.getCars().subscribe(data => this.cars = data);
  }

   addCar() {
    this.carService.addCar(this.newCar).subscribe(
      (response) => {
        console.log('Car added successfully', response);
        window.alert('Car added successfully');
      },
      (error) => {
        console.error('Error adding car', error);
        window.alert('Error adding car');
      }
    );
  }

  updateCar(car: any) {
    this.carService.updateCar(car.id, car).subscribe(() => this.loadCars());
    window.alert('Data Updated successfully');
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe(() => this.loadCars());
    window.alert('Data Deleted successfully');
  }
}