import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from '../../shared/models/endereco.model';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css'],
})
export class EditarEnderecoComponent implements OnInit {
  @ViewChild('formEndereco') formEndereco!: NgForm;

  endereco!: Endereco;

  constructor(
    private enderecoService: EnderecoService,
    private routerParams: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buscarEndereco();
  }

  buscarEndereco(): void {
    const id = +this.routerParams.snapshot.params['enderecoId'];

    const endereco: Endereco | undefined = this.enderecoService.buscarPorId(id);

    if (endereco == undefined) {
      this.router.navigate(['/enderecos']);
    } else {
      this.endereco = endereco;
    }
  }

  atualizar(): void {
    if (this.formEndereco.form.valid && this.endereco) {
      this.enderecoService.atualizar(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }
}
