import { Component, OnInit } from '@angular/core';
import { Logger } from '../log.service';

/**
 * Error page component is a view that is meant for displaying error message for any
 * possible scenario that cannot be handled within the parent view.
 */
@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {

  constructor(private logger: Logger) { }

  ngOnInit() {
    this.logger.log(' ngOnInit called for ErrorpageComponent');
  }

}
