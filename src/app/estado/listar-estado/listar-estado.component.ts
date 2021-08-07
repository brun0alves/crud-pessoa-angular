import { Component, OnInit } from '@angular/core';

import { EstadoService } from '../services/estado.service';
import { Estado } from '../../shared/models/estado.model';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})
export class ListarEstadoComponent implements OnInit {
  estados!: Estado[];

  constructor(private estadoService: EstadoService) {}

  ngOnInit(): void {
    this.estados = this.listarTodos();
  }

  listarTodos(): Estado[] {
    return this.estadoService.listarTodos();
  }

  excluir($event: any, estado: Estado): void {
    $event.preventDefault();
    if (
      confirm('Deseja realmente remover a estado "' + estado.nome + '"?') &&
      estado.id
    ) {
      this.estadoService.remover(estado.id);
      this.estados = this.listarTodos();
    }
  }
}
