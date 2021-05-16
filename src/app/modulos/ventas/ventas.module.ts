import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { VentasHomeComponent } from './ventas-home/ventas-home.component';
import { VentasComponent } from './ventas/ventas.component';
import { SharedModule } from '../shared/shared.module';
import { DetalleCategoriaComponent } from './detalle-categoria/detalle-categoria.component';
// import { SharedModule } from 'primeng-lts/api';


@NgModule({
  declarations:
  [
    VentasHomeComponent,
    VentasComponent,
    DetalleCategoriaComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    SharedModule
  ],
  exports : [
    VentasHomeComponent,
    VentasComponent,
    DetalleCategoriaComponent
  ],
})
export class VentasModule { }
