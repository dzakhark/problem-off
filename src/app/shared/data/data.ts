export class Data {
  private _apiLinks = {
    admin: {
      getMainCategories: 'https://problemoff.herokuapp.com/api/admin/categories/main'
    },
    user: {
      getMainCategories: 'https://problemoff.herokuapp.com/api/categories/main',
      loginUrl: 'https://problemoff.herokuapp.com/api/login',
      registrationUrl: 'https://problemoff.herokuapp.com/api/register'
    }
  };


  get apiLinks() {
    return this._apiLinks;
  }
}
