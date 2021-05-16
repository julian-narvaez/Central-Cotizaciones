import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modulos/autenticacion/login/login.component';

const routes: Routes = [
  { path: 'ventas', loadChildren: () => import('./modulos/ventas/ventas.module').then(mod => mod.VentasModule) },
  { path: 'shared', loadChildren: () => import('./modulos/shared/shared.module').then(mod => mod.SharedModule) },
  { path: 'auth', loadChildren: () => import('./modulos/autenticacion/autenticacion.module').then(mod => mod.AutenticacionModule) },
  { path: '', pathMatch: 'full', redirectTo: '/ventas' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
