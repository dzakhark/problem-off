import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cabinet-home',
  templateUrl: './cabinet-home.component.html',
  styleUrls: ['./cabinet-home.component.css']
})
export class CabinetHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/cabinet/info']);
  }

}
