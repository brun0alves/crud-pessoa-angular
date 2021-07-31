import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meuPipe'
})
export class MeuPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
