import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../core/services/car.service';
import { CarSummary } from '../../../core/models/car-summary.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-car-list',
  imports: [JsonPipe],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
})
export class CarListComponent implements OnInit {

  cars: CarSummary[] = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(response => {
      this.cars = response.items;
    })
  }

}
