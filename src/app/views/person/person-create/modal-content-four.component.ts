import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal-content-four',
  templateUrl: 'modal-content-four.component.html'
})

export class ModalContentFourComponent implements OnInit {
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
