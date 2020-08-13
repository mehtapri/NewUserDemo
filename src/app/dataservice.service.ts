import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }
  getUser (): Observable<any>{
    return this.http.get('http://localhost:8080/user/viewUser')
  }
  addUser(model): Observable<any> {

    console.log(model)
    return this.http.post('http://localhost:8080/user/addUser', model)
  }
  addUser1(model): Promise<any> {

    console.log(model)
    return this.http.post('http://localhost:8080/user/addUser', model).toPromise()
  }

  viewById(uId): Observable<any> {

    return this.http.get('http://localhost:8080/user/viewuser/'+ uId);
  }
  deleteuser(uId): Observable<any> {

    return this.http.delete('http://localhost:8080/user/delete/' + uId);
  }
}
