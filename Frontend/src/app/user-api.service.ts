import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import {API_URL} from './env';
import {User} from './user.model';

@Injectable()
export class UserApiService {

  constructor(private http: HttpClient) {

  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete HTTP request.');
  }

  getUser(): Observable<any> {
    return this.http
      .get(`${API_URL}/users`)
      .catch(UserApiService._handleError);
  }
}
