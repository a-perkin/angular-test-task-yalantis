import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class UsersService {
  private sPath ='https://yalantis-react-school-api.yalantis.com/api/task0/users'

  constructor(
    private httpClient: HttpClient,
  ){}  

  getUsers(): Observable<any[]> {
    return this.httpClient.get<[]>(this.sPath).pipe();
  }  
}