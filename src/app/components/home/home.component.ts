import { Component, OnInit, Input } from '@angular/core';
import { Logger } from '../log.service';

/**
 * A basic component that shall have a background image (which we will generalize away from CSS)
 * and have a header and title.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() title?: string;
  @Input() body?: string;

  constructor(private logService: Logger) { }

  ngOnInit() {
    this.logService.log(' Home Component: ' + 'ngOnInit called.');
  }

}
