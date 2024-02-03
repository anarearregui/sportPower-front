import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CarritoCompraComponent } from './components/carrito-compra/carrito-compra.component';

export const routes: Routes = [
    {path: 'home', component : HomeComponent},
    {path: 'login', component : LoginComponent},
    { path: 'carrito-compra', component: CarritoCompraComponent },
    {path: '', redirectTo: 'login', pathMatch: 'full'}
];
