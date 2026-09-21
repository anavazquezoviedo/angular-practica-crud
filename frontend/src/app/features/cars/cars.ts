import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-cars',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './cars.html',
  styleUrl: './cars.css',
})
export class CarsComponent {}
