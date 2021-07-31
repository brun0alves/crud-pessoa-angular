import { Validator, NG_VALIDATORS, FormControl} from '@angular/forms';
import { Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[minimoValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinimoValidatorDirective,
    multi: true
  }]
})

export class MinimoValidatorDirective implements Validator, OnInit {
  @Input("valorMinimo") valorMinimo!: string;
  @Input("valorMaximo") valorMaximo!: string;

  constructor() { }
  ngOnInit() { }

  validate(c: FormControl) {
    let v: number = +c.value;
    if (isNaN(v)) {
      return { 'minimo': true, 'requiredValue': this.valorMinimo }
    }
    if (v < +this.valorMinimo) {
      return { 'minimo': true, 'requiredValue': this.valorMinimo }
    }
    if (v > +this.valorMaximo) {
      return { 'maximo': true, 'requiredValue': this.valorMaximo }
    }
    return null;
  }

}
