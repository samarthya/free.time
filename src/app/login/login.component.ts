import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logger: any;

  constructor() { }

  ngOnInit() {
    this.logger.log(' ngOnInit called for LoginComponent.');
  }

}
