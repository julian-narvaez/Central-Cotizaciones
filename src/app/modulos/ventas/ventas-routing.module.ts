import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleCategoriaComponent } from './detalle-categoria/detalle-categoria.component';
import { VentasHomeComponent } from './ventas-home/ventas-home.component';
import { VentasComponent } from './ventas/ventas.component';

const routes: Routes = [
  {
    path: '',
    component: VentasHomeComponent,
    children: [
      { path: '', component: VentasComponent },
      { path: 'detalle-categoria', component: DetalleCategoriaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
