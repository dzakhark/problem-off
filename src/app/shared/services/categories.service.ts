import { Injectable } from '@angular/core';
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
