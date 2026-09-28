import { Component, OnInit, signal } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrandsService } from '../../../core/services/brands.service';
import { Brand } from '../../../core/models/brand.model';
import { Model } from '../../../core/models/model.model';

@Component({
  selector: 'app-car-create',
  imports: [FormsModule],
  templateUrl: './car-create.html',
  styleUrl: './car-create.css',
})

export class CarCreateComponent implements OnInit {
  brands = signal<Brand[]>([]);
  models = signal<Model[]>([]);
  selectedBrandId = signal<string>('');
  selectedModelId = signal<string>('');
  isLoadingBrands = signal(true);
  isLoadingModels = signal(false);
  errorMessageBrands = signal('');
  errorMessageModels = signal('');
  constructor(private brandsService: BrandsService) {}

  ngOnInit(): void {
    this.loadBrands();
  }

  // Carga las marcas desde el servicio BrandsService y maneja los estados de carga y error.
  loadBrands() {}

  // Carga los modelos de la marca seleccionada desde el servicio BrandsService y maneja los estados de carga y error.
  loadModels(brandId: string): void {}

  // Maneja el cambio de marca seleccionada, carga los modelos correspondientes y maneja los estados de carga y error.
  onBrandChange() {}
}
