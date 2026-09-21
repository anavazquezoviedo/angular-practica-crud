import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout';

export const routes: Routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                loadComponent: () => import('./features/home/home').then(m => m.HomeComponent)

            },
            {
                path: 'cars',
                loadComponent: () => import('./features/cars/cars').then(m => m.CarsComponent)

            },
            {
                path: 'cars/list',
                loadComponent: () => import('./features/cars/car-list/car-list').then(m => m.CarListComponent)

            },
            {
                path: 'cars/new',
                loadComponent: () => import('./features/cars/car-create/car-create').then(m => m.CarCreateComponent)
            },
            {
                path: 'cars/:id/edit',
                loadComponent: () => import('./features/cars/car-edit/car-edit').then(m => m.CarEditComponent)
            },
            {
                path: 'cars/:id',
                loadComponent: () => import('./features/cars/car-detail/car-detail').then(m => m.CarDetailComponent)
            }

        ]
    }

];
