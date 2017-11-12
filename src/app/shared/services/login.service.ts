import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams, Headers, RequestOptions} from '@angular/http';
import {LoginUser} from '../classes/loginUser';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {
  private urlLogIn = 'https://problemoff.herokuapp.com/api/login';
  private urlUsers = 'https://problemoff.herokuapp.com/users';
  constructor(private http: Http) { }

  onLogin(user: LoginUser) {
    const params = new URLSearchParams();
    params.set('email', user.login);
    params.set('password', user.password);
    return this.http.post(this.urlLogIn, params)
      .catch(this.handleError);
  }

  getUser() {
    const token = localStorage.getItem('currentUser');
    console.log(JSON.parse(token).token);
    const headers = new Headers();
    headers.set('X-Auth-Token', JSON.parse(token).token);
    const options = new RequestOptions({ headers: headers});
    const user = this.http.get(this.urlUsers, options)
      .map(this.extractUser)
      .catch(this.handleError);
    return user;
  }

  private extractUser(response: Response) {
    console.log(response.json());
    return response.json();
  }

  private handleError(error: any, cought: Observable<any>): any {
    let message = '';

    if (error instanceof Response) {
      const errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`;
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.error(message);

    return Observable.throw(message);
  }
}