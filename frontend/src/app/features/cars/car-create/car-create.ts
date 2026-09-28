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
  loadBrands(): void {
    this.brandsService.getBrands().subscribe({
      next: (brands) => {
        this.brands.set(brands);
        this.isLoadingBrands.set(false);
      },
      error: (error) => {
        console.error('Error cargando marcas', error);
        this.errorMessageBrands.set('No se han podido cargar las marcas');
        this.isLoadingBrands.set(false);
      },
    });
  }

  // Carga los modelos de la marca seleccionada desde el servicio BrandsService y maneja los estados de carga y error.
  loadModels(brandId: string): void {
    this.isLoadingModels.set(true);

    this.brandsService.getModelsByBrandId(brandId).subscribe({
      next: models => {
        this.models.set(models);
        this.isLoadingModels.set(false);
      },
      error: error =>{
        console.error('Error cargando modelos', error);
        this.errorMessageModels.set(
          'No se han podido cargar los modelos'
        );
        this.isLoadingModels.set(false);
      }
    });
  }

  // Maneja el cambio de marca seleccionada, carga los modelos correspondientes y maneja los estados de carga y error.
  onBrandChange(brandId: string): void {
    this.selectedBrandId.set(brandId);

    //reseteo
    this.selectedModelId.set('');
    this.models.set([]);
    this.errorMessageModels.set('');

    if (!brandId) {
      return;
    }
    this.loadModels(brandId);
  }
}
