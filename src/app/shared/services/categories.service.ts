import { Injectable } from '@angular/core';
<<<<<<< HEAD
import {Observable} from 'rxjs/Observable';
import {Http, RequestOptions, Headers, Response} from '@angular/http';
import {CookieService} from 'ngx-cookie-service';
import {Category} from '../classes/category';

@Injectable()
export class CategoriesService {

  isModify: boolean;
  isModifyForBreadcrumb: boolean;
  constructor(private http: Http,
              private cookieService: CookieService) { }

  createHeader() {
    const headers = new Headers();
    headers.set('X-Auth-Token', JSON.parse(this.cookieService.get('_curUser')));
    return new RequestOptions({ headers: headers});
  }

  getCategories(url: string) {
    const options = this.createHeader();
    const categories = this.http.get(url, options)
      .map(this.extractCategories)
      .catch(this.handleError);
    return categories;
  }

  createCategory(url: string, newCategory: { name: string }) {
    const options = this.createHeader();
    return this.http.post(url, newCategory, options)
      .catch(this.handleError);
  }

  deleteCategory(url: string) {
    const options = this.createHeader();
    return this.http.delete(url)
      .catch(this.handleError);
  }

  private extractCategories(response: Response) {
    const res = response.json();
    const categories: Category[] = [];
    for (let i = 0; i < res['_embedded'].categories.length; i++) {
      // const obj: Category = new Category(res['_embedded'].categories[i].name,
      //   res['_embedded'].categories[i].types,
      //   res['_embedded'].categories[i].subCategories);
      categories.push(res['_embedded'].categories[i]);
    }
    // console.log('Categories');
    // console.log(categories[0]._links['self']);
    // console.log(categories[1].subCategories[1].subCategories[0]);
    return categories;
  }
=======
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Categories } from '../classes/categories';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesService {
  private urlCat = 'https://problemoff.herokuapp.com/api/user/categories';

  constructor(private http: Http) { }
      public getCategories() {
        let categories = this.http.get(this.urlCat)
            .map(this.extractCategories) 
            .catch(this.handleError);
        return categories;
    }
    private extractCategories(response: Response) {
      console.log(response)
        let res = response.json();
        console.log(res)
         let categories: Categories[] = [];
        
        for (let i = 0; i < res['_embedded'].categories.length; i++) {
          categories.push(res['_embedded'].categories[i]);
        }
        
        
        console.log(categories)
        return categories;
    }

>>>>>>> user_part

  private handleError(error: any, cought: Observable<any>): any {
    let message = '';

    if (error instanceof Response) {
      const errorData = error.json().error || JSON.stringify(error.json());
<<<<<<< HEAD
      message = `${error.status} - ${error.statusText || ''} ${errorData}`;
=======
      message = `${error.status} - ${error.statusText || ''} ${errorData}`
>>>>>>> user_part
    } else {
      message = error.message ? error.message : error.toString();
    }

    console.error(message);

    return Observable.throw(message);
  }
<<<<<<< HEAD

=======
>>>>>>> user_part
}
