import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    {
        path: 'product',
        loadComponent: () => loadRemoteModule('product', './Component').then((m) => m.App),
    },
    {
        path: 'cart',
        loadComponent: () => loadRemoteModule('cart', './Component').then((m) => m.App),
    },
    {
        path: 'about',
        loadComponent: () => loadRemoteModule('about', './Component').then((m) => m.App),
    },
    {
        path: 'contact',
        loadComponent: () => loadRemoteModule('contact', './Component').then((m) => m.App),
    },
    {
        path: 'remote',
        loadComponent: () => loadRemoteModule('remote', './Component').then((m) => m.App),
    },
];
