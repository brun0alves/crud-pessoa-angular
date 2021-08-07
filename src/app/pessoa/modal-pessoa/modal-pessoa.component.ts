import { Component, Input } from '@angular/core';
import { Pessoa } from 'src/app/shared/models';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'modal-pessoa',
  templateUrl: './modal-pessoa.component.html',
  styleUrls: ['./modal-pessoa.component.css']
})
export class ModalPessoaComponent {
  @Input() pessoa!: Pessoa;
  constructor(public activeModal: NgbActiveModal) { }
}