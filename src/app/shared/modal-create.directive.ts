import { Directive, Input, Type, HostListener } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap';

@Directive({
  selector: '[appModalCreate]'
})
export class ModalCreateDirective {

  @Input() appModalCreate: Type<any>;
  @Input() modalTitle: string;

  constructor(private modalService: BsModalService) { }

  @HostListener('click', ['$event']) onClick($event) {
    const initialState = {
      title: this.modalTitle
    };
    const bsModalRef = this.modalService.show(this.appModalCreate, { initialState });
    bsModalRef.content.closeBtnName = 'Close';
  }

}
