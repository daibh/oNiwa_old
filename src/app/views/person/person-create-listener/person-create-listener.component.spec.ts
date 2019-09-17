import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCreateListenerComponent } from './person-create-listener.component';

describe('PersonCreateListenerComponent', () => {
  let component: PersonCreateListenerComponent;
  let fixture: ComponentFixture<PersonCreateListenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonCreateListenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonCreateListenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
