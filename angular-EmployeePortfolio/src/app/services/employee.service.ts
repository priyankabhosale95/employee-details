import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../common/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseurl = "http://localhost:8080/api/v1/employees";

  constructor(private httpCient: HttpClient) { }

  getEmployees():Observable<Employee[]>
  {
    return this.httpCient.get<GetResponseEmployee>(this.baseurl).pipe(
   map(response =>response._embedded.employees)
    );
  }
 
}



interface GetResponseEmployee{

  _embedded: {
    employees: Employee[];
  }

}
