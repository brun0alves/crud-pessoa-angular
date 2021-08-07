import { Injectable } from '@angular/core';

import { Estado } from '../../shared/models/estado.model';

const LS_CHAVE: string = 'estados';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor() { }

  listarTodos(): Estado[] {
    const estados = localStorage[LS_CHAVE];

    return estados ? JSON.parse(estados) : [];
  }

  inserir(Estado: Estado): void {
    const estados = this.listarTodos();

    Estado.id = new Date().getTime();

    estados.push(Estado);

    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  buscarPorId(id: number): Estado | undefined {
    const estados: Estado[] = this.listarTodos();

    return estados.find((Estado) => Estado.id === id);
  }

  atualizar(Estado: Estado): void {
    const estados: Estado[] = this.listarTodos();

    estados.forEach((obj, index, objs) => {
      if (Estado.id === obj.id) {
        objs[index] = Estado;
      }
    });

    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  remover(id: number): void {
    let estados: Estado[] = this.listarTodos();

    estados = estados.filter((Estado) => Estado.id !== id);

    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }
}
