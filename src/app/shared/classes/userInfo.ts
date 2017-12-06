export class UserInfo {
  constructor(public firstName: string,
              public lastName: string,
              public email: string,
              public phoneNumber: string,
              public dateBirthday: string,
              public description: string,
              public sex: string,
              public _links: any) { }
}
