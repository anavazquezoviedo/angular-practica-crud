import { Routes } from '@angular/router';

export const routes: Routes = [
    //cars
    //  user
    //home
    {
        path: 'home',
        loadComponent: () => import('./features/home/home').then(m => m.HomeComponent)

    },
    // {
    //     path: 'cars',
    //     // ruta de cars
    // },
    // {
    //     path: 'user',
    //     // ruta de user
    // },
    // {
    //     path: '',
    //     redirectTo: 'home',
    //     pathMatch: 'full'
    // }


];
