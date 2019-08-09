import { Component, OnInit } from '@angular/core';
import { Logger } from 'src/app/shared';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private logger: Logger) { }

  ngOnInit() {
    this.logger.log(' ngOnInit called for LoginComponent.');
  }

}
