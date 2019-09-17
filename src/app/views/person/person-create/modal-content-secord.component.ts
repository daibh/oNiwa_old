import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal-content-secord',
  templateUrl: 'modal-content-secord.component.html'
})

export class ModalContentSecondComponent implements OnInit {
  title: string;
  closeBtnName: string;
  list: any[] = [];

  constructor(public bsModalRef: BsModalRef) { }

  onSaveAndContinue = () => alert('Save and continue.');

  onSave = () => {
    alert('Save and close.');
    this.bsModalRef.hide();
  }

  ngOnInit() {
    this.list.push('PROFIT!!!');
  }
}
