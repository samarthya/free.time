import { Component, OnInit } from '@angular/core';
import { Logger } from '../log.service';

/**
 * Navigation component that holds the navigation links,
 * brand icon and other information to guide the navigation.
 */
@Component({
  selector: 'ft-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private logger: Logger) { }

  ngOnInit() {
    this.logger.log(' ngOnInit for NavBarComponent called.');
  }

}
