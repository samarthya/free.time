import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from '../models/profiles.model';
import { Logger } from '../shared/log.service';

/**
 * About page
 * This should display information about the authors and contributors of the page.
 * You should be aware about binding and component interaction to undestand how
 * the information is being
 * [passed](https://angular.io/guide/component-interaction#pass-data-from-parent-to-child-with-input-binding).
 */
@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  private description: string;


  public profiles: IProfile[] = [
    {
      title: 'Software Engineer',
      subTitle: ' Lead 1',
      description: 'I am Saurabh',
      imageUrl: '../../assets/images/1.png',
      linkedIn: '',
      giturl: ''
    },
    {
      title: 'Software Engineer',
      subTitle: 'Lead 2',
      description: 'I am Bhawna',
      imageUrl: '../../assets/images/1.png',
      linkedIn: '',
      giturl: ''
    },
    {
      title: 'Software Engineer',
      subTitle: 'Lead 3',
      description: 'I am Vasu',
      imageUrl: '../../assets/images/1.png',
      linkedIn: '',
      giturl: ''
    }
  ];

  constructor(private logger: Logger) {
    this.description = 'A short introduction to the about page, which can be moderated later'
                        + ' through a service or any other source.';
  }

  get descriptionStr(): string {
    return this.description;
  }

  set descriptionStr(value: string) {
    this.description = value;
  }

  ngOnInit() {
    this.logger.log(' ngOnInit called for AboutComponent.');
  }

}
