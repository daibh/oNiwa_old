import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { ModalCreateDirective } from './modal-create.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ModalCreateDirective
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DataTablesModule,
    FormsModule,

    // ngx-bootstrap
    ModalModule.forRoot()

  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    DataTablesModule,
    FormsModule,
    ModalCreateDirective
  ]
})
export class SharedModule { }
