import { Component, OnInit } from '@angular/core';

import { CidadeService } from '../services/cidade.service';
import { Cidade } from '../../shared/models/cidade.model';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit {
  cidades!: Cidade[];

  constructor(private cidadeService: CidadeService) {}

  ngOnInit(): void {
    this.cidades = this.listarTodos();
  }

  listarTodos(): Cidade[] {
    return this.cidadeService.listarTodos();
  }

  excluir($event: any, cidade: Cidade): void {
    $event.preventDefault();
    if (
      confirm('Deseja realmente remover a cidade "' + cidade.nome + '"?') &&
      cidade.id
    ) {
      this.cidadeService.remover(cidade.id);
      this.cidades = this.listarTodos();
    }
  }
}
