import { ModalCreateDirective } from './modal-create.directive';
import { BsModalService } from 'ngx-bootstrap';
import { TestBed } from '@angular/core/testing';

describe('ModalCreateDirective', () => {
  it('should create an instance', () => {
    const service: BsModalService = TestBed.get(BsModalService);
    const directive = new ModalCreateDirective(service);
    expect(directive).toBeTruthy();
  });
});
