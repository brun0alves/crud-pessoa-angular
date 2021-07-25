import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../../shared/models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  @ViewChild('formPessoa') formPessoa!:  NgForm;

  pessoa!: Pessoa;

  constructor(
    private pessoaService: PessoaService,
    private routerParams: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
     this.buscarPessoa();
  }

  buscarPessoa(): void {
    const id = +this.routerParams.snapshot.params['pessoaId'];
    
    const pessoa: Pessoa | undefined = this.pessoaService.buscarPorId(id);
    
    if(pessoa == undefined){
      this.router.navigate( ["/pessoas"] );
    }else{
      this.pessoa = pessoa;
    }
  }

  atualizar(): void {
    if (this.formPessoa.form.valid && this.pessoa) {
      this.pessoaService.atualizar(this.pessoa);
      this.router.navigate( ["/pessoas"] );
    }
  }
}
