import { Component, OnInit, HostListener } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';
import { ModalContentFourComponent } from '../person-create/modal-content-four.component';

@Component({
  selector: 'app-person-create-listener',
  templateUrl: './person-create-listener.component.html',
  styleUrls: ['./person-create-listener.component.scss']
})
export class PersonCreateListenerComponent implements OnInit {

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  @HostListener('click', ['$event']) onClick($event) {
    const initialState = {
      title: 'Create over modal hostlistener'
    };
    const bsModalRef = this.modalService.show(ModalContentFourComponent, { initialState });
    bsModalRef.content.closeBtnName = 'Close';
  }

}
