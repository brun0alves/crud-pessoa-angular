import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade } from '../../shared/models/cidade.model';
import { CidadeService } from '../services/cidade.service';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css']
})
export class EditarCidadeComponent implements OnInit {
  @ViewChild('formCidade') formCidade!: NgForm;

  cidade!: Cidade;

  constructor(
    private cidadeService: CidadeService,
    private routerParams: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buscarCidade();
  }

  buscarCidade(): void {
    const id = +this.routerParams.snapshot.params['cidadeId'];

    const cidade: Cidade | undefined = this.cidadeService.buscarPorId(id);

    if (cidade == undefined) {
      this.router.navigate(['/cidades']);
    } else {
      this.cidade = cidade;
    }
  }

  atualizar(): void {
    if (this.formCidade.form.valid && this.cidade) {
      this.cidadeService.atualizar(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }

}
