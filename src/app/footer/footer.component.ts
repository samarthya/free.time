import { Component, OnInit } from '@angular/core';
import { Logger } from '../shared/log.service';

/**
 * Footer component shall contain the basic links to the website and with the appropriate
 * brand logos that can help identify the information.
 */
@Component({
  selector: 'ft-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private loggerService: Logger) { }

  ngOnInit() {
    this.loggerService.log(' FooterComponent: OnInit called.');
  }

}
