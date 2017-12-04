import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {CookieService} from 'ngx-cookie-service';
import {Observable} from 'rxjs/Observable';
import {UserInfo} from '../classes/userInfo';

@Injectable()
export class UserService {

  constructor(private http: Http,
              private cookieService: CookieService) { }

  createHeaders() {
    const headers = new Headers();
    headers.set('X-Auth-Token', JSON.parse(this.cookieService.get('_curUser')));
    return new RequestOptions({ headers: headers });
  }

  getUserInfo(url: string) {
    const options = this.createHeaders();
    const userInfo = this.http.get(url, options)
      .map(this.extractUserInfo)
      .catch(this.handleError);
    return userInfo;
  }

  extractUserInfo(response: Response) {
    // const res = response.json();
    const userInfo: UserInfo = response.json();
    return userInfo;
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
