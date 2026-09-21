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

            }
        ]
    }

];
