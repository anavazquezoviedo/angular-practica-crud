import { Component, OnInit, signal } from '@angular/core';
import { CarService } from '../../../core/services/car.service';
import { CarSummary } from '../../../core/models/car-summary.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-list',
  imports: [RouterLink],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
})

export class CarListComponent implements OnInit {

cars = signal<CarSummary[]>([]);


  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(response => {
      //console.log('Respuesta:', response);
      //console.log('Items:', response.items);
       this.cars.set(response.items);
     // console.log('Cars asignado:', this.cars);
    })
  }

}
