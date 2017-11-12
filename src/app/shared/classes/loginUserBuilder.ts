// export class LoginUserBuilder {
//   private _login: string;
//   private _password: string;
//
//   constructor() { }
//
//
//   get login(): string {
//     return this._login;
//   }
//
//   set login(value: string) {
//     this._login = value;
//   }
//
//   get password(): string {
//     return this._password;
//   }
//
//   set password(value: string) {
//     this._password = value;
//   }
//
//   build(): LoginUser1 {
//     return new LoginUser1(this);
//   }
// }
//
// export class LoginUser1 {
//   private _login: string;
//   private _password: string;
//
//   constructor(builder: LoginUserBuilder) {
//     this._login = builder.login;
//     this._password = builder.password;
//   }
//
//
//   get login(): string {
//     return this._login;
//   }
//
//   get password(): string {
//     return this._password;
//   }
// }
