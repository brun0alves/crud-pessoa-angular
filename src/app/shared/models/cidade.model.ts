import { Estado } from ".";

export class Cidade {
    constructor(
      public id: number = 0,
      public nome: string = '',
      public estado?: Estado
    ) {}
  }
  