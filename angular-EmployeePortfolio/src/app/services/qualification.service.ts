import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Qualification } from '../common/qualification';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {

  private baseurl = "http://localhost:8080/api/v1/qualifications";

  constructor(private httpCient: HttpClient) { }

  getQualifications():Observable<Qualification[]>
  {
    return this.httpCient.get<GetResponseQualification>(this.baseurl).pipe(
   map(response =>response._embedded.qualifications)
    );
  }
}


interface GetResponseQualification{

   _embedded: {
     qualifications: Qualification[];
   }

}
