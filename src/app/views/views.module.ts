import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { HomeComponent } from './home/home.component';
import { ViewsRoutingModule } from './views-routing.module';
import { ViewsComponent } from './views.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { PersonUpdateComponent } from './person/person-update/person-update.component';
import { PersonCreateComponent } from './person/person-create/person-create.component';
import { ModalContentSecondComponent } from './person/person-create/modal-content-secord.component';
import { ModalContentComponent } from './person/person-create/modal-content.component';
import { ModalContentThirdComponent } from './person/person-create/modal-content-third.component';
import { ModalCreateDirective } from '../shared/modal-create.directive';
import { ModalContentFourComponent } from './person/person-create/modal-content-four.component';
import { PersonCreateListenerComponent } from './person/person-create-listener/person-create-listener.component';
import { ModalContentDeleteComponent } from './person/person-create/modal-content-delete.component';



@NgModule({
  declarations: [
    ViewsComponent,
    PersonComponent,
    HomeComponent,
    PersonUpdateComponent,
    PersonCreateComponent,
    ModalContentComponent,
    ModalContentSecondComponent,
    ModalContentThirdComponent,
    ModalContentFourComponent,
    PersonCreateListenerComponent,
    ModalContentDeleteComponent
  ],
  imports: [
    SharedModule,
    ViewsRoutingModule
  ],
  entryComponents: [ModalContentComponent, ModalContentSecondComponent, ModalContentThirdComponent, ModalContentFourComponent, ModalContentDeleteComponent],
  exports: []
})
export class ViewsModule { }
