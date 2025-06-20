import { Routes } from '@angular/router';
import { Product } from './product/product';
import { Home } from './home/home';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'products', component: Product }
];
