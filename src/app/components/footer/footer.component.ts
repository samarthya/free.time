import { Component, OnInit } from '@angular/core';
import { Logger } from '@free-time/components/log.service';
import {faGit, faLinkedin, faTwitter, faBlogger} from '@fortawesome/free-brands-svg-icons';
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
  faGit = faGit;
  faLinkedIn = faLinkedin;
  faBlogger = faBlogger;
  faTwitter = faTwitter;

  constructor(private loggerService: Logger) { }

  ngOnInit() {
    this.loggerService.log(' FooterComponent: OnInit called.');
  }

}
