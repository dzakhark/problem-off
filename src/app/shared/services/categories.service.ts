import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Categories } from '../classes/categories';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesService {
  private urlCat = 'https://problemoff.herokuapp.com/api/categories/main';

  constructor(private http: Http) { }
      public getCategories(): Observable<Categories[]> {
        let categories = this.http.get(this.urlCat)
            .map(this.extractCategories) 
            .catch(this.handleError);
        return categories;
    }
    private extractCategories(response: Response) {
        let res = response.json();
        let categories: Categories[] = [];
        for (let i = 0; i < res.length; i++) {
            categories.push(new Categories(res[i].name));
        }
        return categories;
    }
//   public getCategories() {
//     const headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     const options = new RequestOptions({ headers: headers });
//     return this.http.get(this.urlReg, options)
//       .catch(this.handleError);
//   }
//   getUser() {
//     const token = localStorage.getItem('currentUser');
//     console.log(JSON.parse(token).token);
//     const headers = new Headers();
//     headers.set('X-Auth-Token', JSON.parse(token).token);
//     const options = new RequestOptions({ headers: headers});
//     const user = this.http.get(this.urlUsers, options)
//       .map(this.extractUser)
//       .catch(this.handleError);
//     return user;
//   }

  private handleError(error: any, cought: Observable<any>): any {
    let message = '';

    if (error instanceof Response) {
      const errorData = error.json().error || JSON.stringify(error.json());
      message = `${error.status} - ${error.statusText || ''} ${errorData}`
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.error(message);

    return Observable.throw(message);
  }
}
