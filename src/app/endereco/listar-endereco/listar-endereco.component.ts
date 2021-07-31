import { Component, OnInit } from '@angular/core';

import { EnderecoService } from '../services/endereco.service';
import { Endereco } from '../../shared/models/endereco.model';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css'],
})
export class ListarEnderecoComponent implements OnInit {
  enderecos!: Endereco[];

  constructor(private enderecoService: EnderecoService) {}

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }

  listarTodos(): Endereco[] {
    return this.enderecoService.listarTodos();
  }

  excluir($event: any, endereco: Endereco): void {
    $event.preventDefault();
    if (
      confirm('Deseja realmente remover a endereco "' + endereco.rua + '"?') &&
      endereco.id
    ) {
      this.enderecoService.remover(endereco.id);
      this.enderecos = this.listarTodos();
    }
  }
}
