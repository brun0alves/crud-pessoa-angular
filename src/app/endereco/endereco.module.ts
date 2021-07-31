import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListarEnderecoComponent } from './listar-endereco/listar-endereco.component';
import { InserirEnderecoComponent } from './inserir-endereco/inserir-endereco.component';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';

@NgModule({
  declarations: [
    ListarEnderecoComponent,
    InserirEnderecoComponent,
    EditarEnderecoComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule, FormsModule],
})
export class EnderecoModule {}
