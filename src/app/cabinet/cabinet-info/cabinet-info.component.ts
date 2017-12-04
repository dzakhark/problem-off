import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {UserInfo} from '../../shared/classes/userInfo';

@Component({
  selector: 'app-cabinet-info',
  templateUrl: './cabinet-info.component.html',
  styleUrls: ['./cabinet-info.component.css']
})
export class CabinetInfoComponent implements OnInit {

  userInformation: UserInfo;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserInfo('https://problemoff.herokuapp.com/api/account/').subscribe(
      data => this.userInformation = data,
      error => console.log(error)
    );
  }

  edit(item) {

  }
}
