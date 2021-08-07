import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';

@NgModule({
  declarations: [
    ListarEstadoComponent,
    InserirEstadoComponent,
    EditarEstadoComponent
  ],
  imports: [CommonModule, SharedModule, RouterModule, FormsModule],
})
export class EstadoModule { }
