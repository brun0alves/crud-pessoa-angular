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

//Cidade
import { EditarCidadeComponent } from './cidade/editar-cidade/editar-cidade.component';
import { InserirCidadeComponent } from './cidade/inserir-cidade/inserir-cidade.component';
import { ListarCidadeComponent } from './cidade/listar-cidade/listar-cidade.component';

//Estado
import { EditarEstadoComponent } from './estado/editar-estado/editar-estado.component';
import { InserirEstadoComponent } from './estado/inserir-estado/inserir-estado.component';
import { ListarEstadoComponent } from './estado/listar-estado/listar-estado.component';

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

const cidadesRoutes: Routes = [
  { path: 'cidades', redirectTo: 'cidades/listar', pathMatch: 'full' },
  { path: 'cidades/listar', component: ListarCidadeComponent },
  { path: 'cidades/novo', component: InserirCidadeComponent },
  { path: 'cidades/editar/:cidadeId', component: EditarCidadeComponent },
];

const estadosRoutes: Routes = [
  { path: 'estados', redirectTo: 'estados/listar', pathMatch: 'full' },
  { path: 'estados/listar', component: ListarEstadoComponent },
  { path: 'estados/novo', component: InserirEstadoComponent },
  { path: 'estados/editar/:estadoId', component: EditarEstadoComponent },
];



const routes: Routes = [
  { path: '', redirectTo: 'pessoas/listar', pathMatch: 'full' },
  ...pessoasRoutes,
  ...enderecosRoutes,
  ...cidadesRoutes,
  ...estadosRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
