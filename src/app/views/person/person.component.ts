import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnDestroy, OnInit, Renderer, ViewChild, Type } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap';
import { Subject } from 'rxjs';
import { IPagingRespone, Person, PersonService } from 'src/app/shared/services/person.service';
import { ModalContentThirdComponent } from './person-create/modal-content-third.component';
import { ModalContentFourComponent } from './person-create/modal-content-four.component';
import { PersonCreateComponent } from './person-create/person-create.component';
import { ModalContentDeleteComponent } from './person-create/modal-content-delete.component';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit, OnDestroy, AfterViewInit {
  persons: Person[];
  dtTrigger: Subject<any> = new Subject();
  // Must be declared as "any", not as "DataTables.Settings"
  dtOptions: any = {};
  name: string;
  message: string;
  modalType = ModalContentFourComponent;

  @ViewChild(PersonCreateComponent, { static: false })
  personCreateComponent: PersonCreateComponent;

  constructor(
    private personService: PersonService,
    private http: HttpClient,
    private renderer: Renderer,
    private router: Router,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<IPagingRespone>(
            'https://angular-datatables-demo-server.herokuapp.com/',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: that.persons
            });
          });
      },
      columns: [
        { title: 'ID', data: 'id' }, { title: 'First name', data: 'firstName' }, { title: 'Last name', data: 'lastName' },
        {
          title: 'Action', render: function (data: any, type: any, full: any) {
            return `
            <button class="btn btn-sm btn-outline-secondary" action="edit" view-person-id="${full.id}">View</button>
            <button class="btn btn-sm btn-outline-secondary" action="delete" view-person-id="${full.id}">Delete</button>
            `;
          }
        }
      ],
      // Declare the use of the extension in the dom parameter
      dom: 'Bfrtip',
      // rowCallback: (row: Node, data: any[] | Object, index: number) => {
      //   const self = this;
      //   // Unbind first in order to avoid any duplicate handler
      //   // (see https://github.com/l-lin/angular-datatables/issues/87)
      //   $('td', row).unbind('click');
      //   $('td', row).bind('click', () => {
      //     self.someClickHandler(data);
      //   });
      //   return row;
      // }
    };
  }

  ngAfterViewInit(): void {
    this.renderer.listenGlobal('document', 'click', (event) => {
      if (event.target.hasAttribute("view-person-id") && event.target.hasAttribute("action")) {
        switch (event.target.getAttribute("action")) {
          case 'edit':
            this.router.navigate(["/person/" + event.target.getAttribute("view-person-id")]);
            break;
          case 'delete':
            const initialState = {
              title: 'Delete person confirm'
            };
            const bsModalRef = this.modalService.show(ModalContentDeleteComponent, { initialState });
            bsModalRef.content.closeBtnName = 'Close';
            bsModalRef.content.id = event.target.getAttribute("view-person-id");
            bsModalRef.content.delete = this.onDelete;
            break;
          default:
            break;
        }
      }
    });
  }

  someClickHandler(info: any): void {
    this.message = info.id + ' - ' + info.firstName;
  }

  onClickCreate = () => {
    this.personCreateComponent.openModalWithComponentFromParent();
  }

  onClickCreateParentWork = () => {
    const initialState = {
      title: 'Modal with component from parent self'
    };
    const bsModalRef = this.modalService.show(ModalContentThirdComponent, { initialState });
    bsModalRef.content.closeBtnName = 'Close';
  }

  onDelete = id => alert('Remove person with id ' + id);

  ngOnDestroy(): void {

  }

}
