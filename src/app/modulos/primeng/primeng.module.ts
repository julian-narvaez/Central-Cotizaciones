import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng-lts/table';
import { ButtonModule } from 'primeng-lts/button';
import { InputTextModule } from 'primeng-lts/inputtext';
import { MessageModule } from 'primeng-lts/message';
import { ToastModule } from 'primeng-lts/toast';
import { ToolbarModule } from 'primeng-lts/toolbar';
import { SidebarModule } from 'primeng-lts/sidebar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    MessageModule,
    ToastModule,
    ToolbarModule,
    SidebarModule

  ], exports: [
    TableModule,
    ButtonModule,
    InputTextModule,
    MessageModule,
    ToastModule,
    ToolbarModule,
    SidebarModule
  ]
})
export class PrimengModule { }
