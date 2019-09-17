import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal-content-delete',
  templateUrl: 'modal-content-delete.component.html'
})

export class ModalContentDeleteComponent implements OnInit {
  title: string;
  closeBtnName: string;
  id: number;
  delete: Function;

  constructor(public bsModalRef: BsModalRef) { }

  onDelete = () => {
    this.delete(this.id);
    this.bsModalRef.hide();
  }

  ngOnInit() {
    
  }
}
