import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estado } from '../../shared/models/estado.model';
import { EstadoService } from '../services/estado.service';

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.css']
})
export class EditarEstadoComponent implements OnInit {

  @ViewChild('formEstado') formEstado!: NgForm;

  estado!: Estado;

  constructor(
    private estadoService: EstadoService,
    private routerParams: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buscarEstado();
  }

  buscarEstado(): void {
    const id = +this.routerParams.snapshot.params['estadoId'];

    const estado: Estado | undefined = this.estadoService.buscarPorId(id);

    if (estado == undefined) {
      this.router.navigate(['/estados']);
    } else {
      this.estado = estado;
    }
  }

  atualizar(): void {
    if (this.formEstado.form.valid && this.estado) {
      this.estadoService.atualizar(this.estado);
      this.router.navigate(['/estados']);
    }
  }

}
