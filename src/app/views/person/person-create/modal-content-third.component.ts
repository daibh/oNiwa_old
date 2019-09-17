import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal-content-third',
  templateUrl: 'modal-content-third.component.html'
})

export class ModalContentThirdComponent implements OnInit {
  title: string;
  closeBtnName: string;

  constructor(public bsModalRef: BsModalRef) { }

  onSaveAndContinue = () => alert('Save and continue.');

  onSave = () => {
    alert('Save and close.');
    this.bsModalRef.hide();
  }

  ngOnInit() {
    
  }
}
