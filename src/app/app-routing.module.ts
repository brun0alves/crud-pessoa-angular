import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pessoa
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { ListarPessoaComponent } from './pessoa/listar-pessoa/listar-pessoa.component';

// Endereco
import { EditarEnderecoComponent } from './endereco/editar-endereco/editar-endereco.component';
import { InserirEnderecoComponent } from './endereco/inserir-endereco/inserir-endereco.component';
import { ListarEnderecoComponent } from './endereco/listar-endereco/listar-endereco.component';

const pessoasRoutes: Routes = [
  { path: 'pessoas', redirectTo: 'pessoas/listar', pathMatch: 'full' },
  { path: 'pessoas/listar', component: ListarPessoaComponent },
  { path: 'pessoas/novo', component: InserirPessoaComponent },
  { path: 'pessoas/editar/:pessoaId', component: EditarPessoaComponent },
];

const enderecosRoutes: Routes = [
  { path: 'enderecos', redirectTo: 'enderecos/listar', pathMatch: 'full' },
  { path: 'enderecos/listar', component: ListarEnderecoComponent },
  { path: 'enderecos/novo', component: InserirEnderecoComponent },
  { path: 'enderecos/editar/:enderecoId', component: EditarEnderecoComponent },
];

const routes: Routes = [
  { path: '', redirectTo: 'pessoas/listar', pathMatch: 'full' },
  ...pessoasRoutes,
  ...enderecosRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
