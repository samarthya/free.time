import { Component, OnInit } from '@angular/core';
//import { Logger } from '../log.service';

/**
 * Login component
 * Add some more description.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //constructor(private logger: Logger) { }
  constructor() { }

  ngOnInit() {
    //this.logger.log(' ngOnInit called for LoginComponent.');
  }

}
