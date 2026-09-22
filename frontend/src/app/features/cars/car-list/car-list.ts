import { Component, OnInit, signal } from '@angular/core';
import { finalize } from 'rxjs';
import { RouterLink } from '@angular/router';

import { CarService } from '../../../core/services/car.service';
import { CarSummary } from '../../../core/models/car-summary.model';

@Component({
  selector: 'app-car-list',
  imports: [RouterLink],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css',
})
export class CarListComponent implements OnInit {
  cars = signal<CarSummary[]>([]);
  isLoading = signal(true);
  errorMessage = signal('');

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.carService
      .getCars()
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: (response) => {
          this.cars.set(response.items);
        },
        error: (error) => {
          console.error('Error cargando vehículos:', error);
          this.errorMessage.set('No se han podido cargar los vehículos. Inténtelo de nuevo.');
        },
      });
  }
}
