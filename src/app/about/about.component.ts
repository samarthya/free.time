import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profiles.model';
import { Logger } from '../shared/log.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public profiles: Profile[] = [
    {title: 'Software Engineer', subTitle: ' Lead 1', description: 'I am Saurabh', image: '', linkedIn: '', giturl: ''},
    {title: 'Software Engineer', subTitle: 'Lead 2', description: 'I am Bhawna', image: '', linkedIn: '', giturl: ''},
    {title: 'Software Engineer', subTitle: 'Lead 3', description: 'I am Vasu', image: '', linkedIn: '', giturl: ''}
 ];

  constructor(private logger: Logger) { }

  ngOnInit() {
    this.logger.log(' ngOnInit called for AboutComponent.');
  }

}
