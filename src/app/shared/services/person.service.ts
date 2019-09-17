import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { filter, map, first, find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private httpClient: HttpClient) { }

  getPersons(): Observable<IPerson[]> {
    return this.httpClient.get<IPerson[]>('/assets/data/person.json');
  }

  getPerson(id: number): Observable<IPerson> {
    return this.httpClient.get<IPagingRespone>('https://angular-datatables-demo-server.herokuapp.com/')
      .pipe(
        map(res => (res.data || []).find(p => p.id == id))
      )
  }

  getPersonsWithParams(dtParams: any): Observable<IPagingRespone> {
    return this.httpClient.get<IPerson[]>('/assets/data/person.json')
      .pipe(
        filter(res => true),
        map(persons => {
          console.log('PagingRespone', persons);
          return new PagingRespone(0, 1, 1, persons);
        })
      );
  }

}

export interface IPerson {
  id: number;
  firstName: string;
  lastName: string;
}

export class Person implements IPerson {
  id: number;
  firstName: string;
  lastName: string;
}

export class PagingRespone implements IPagingRespone {
  constructor(
    public draw: number,
    public recordsTotal: number,
    public recordsFiltered: number,
    public data: IPerson[]
  ) {

  }
}

export interface IPagingRespone {
  data: IPerson[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

export interface ISearchCriteria {
  isPageLoad: boolean;
  filter: string;
}
