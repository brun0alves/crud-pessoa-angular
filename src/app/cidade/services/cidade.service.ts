import { Injectable } from '@angular/core';

import { Cidade } from '../../shared/models/cidade.model';

const LS_CHAVE: string = 'cidades';

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor() { }

  listarTodos(): Cidade[] {
    const cidades = localStorage[LS_CHAVE];

    return cidades ? JSON.parse(cidades) : [];
  }

  inserir(Cidade: Cidade): void {
    const cidades = this.listarTodos();

    Cidade.id = new Date().getTime();

    cidades.push(Cidade);

    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  buscarPorId(id: number): Cidade | undefined {
    const cidades: Cidade[] = this.listarTodos();

    return cidades.find((Cidade) => Cidade.id === id);
  }

  atualizar(Cidade: Cidade): void {
    const cidades: Cidade[] = this.listarTodos();

    cidades.forEach((obj, index, objs) => {
      if (Cidade.id === obj.id) {
        objs[index] = Cidade;
      }
    });

    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  remover(id: number): void {
    let cidades: Cidade[] = this.listarTodos();

    cidades = cidades.filter((Cidade) => Cidade.id !== id);

    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }
}
