import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Category } from '../classes/category';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CategoriesService {

  private urlServices = 'https://problemoff.herokuapp.com/api/admin/categories/main';

  constructor(private http: Http,
              private cookieService: CookieService) { }

  getServices() {
    const headers = new Headers();
    headers.set('X-Auth-Token', JSON.parse(this.cookieService.get('_curUser')));
    const options = new RequestOptions({ headers: headers});
    console.log(options);
    const categories = this.http.get(this.urlServices, options)
      .map(this.extractCategories)
      .catch(this.handleError);
    return categories;
  }

  private extractCategories(response: Response) {
    const res = response.json();
    console.log(res);
    const categories: Category[] = [];
    for (let i = 0; i < res['_embedded'].categories.length; i++) {
      // const obj: Category = new Category(res['_embedded'].categories[i].name,
      //   res['_embedded'].categories[i].types,
      //   res['_embedded'].categories[i].subCategories);
      categories.push(res['_embedded'].categories[i]);
      // categories.push(obj);
      // console.log(res['_embedded'].categories[i]);
    }
    // console.log(categories);
    // console.log(categories[1].subCategories[1].subCategories[0]);
    return categories;
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
