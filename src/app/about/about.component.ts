import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from '../models/profiles.model';
import { Logger } from '../shared/index';

/**
 * <h2>About page component</h2>
 * <p>
 * This should display information about the authors and contributors of the SPA.
 * For more clarity, you should be aware about binding and component interaction, to undestand how
 * the information is being
 * <a href="https://angular.io/guide/component-interaction#pass-data-from-parent-to-child-with-input-binding">passed.</a>
 * </p>
 */
@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  /**
   * It is a static string variable that is initalized with basic information about
   * the context.
   */
  private description: string;


  /**
   * @ignore
   */
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

  /**
   * Basic initialization constructor that includes
   * a basic console logging service.
   * @param logger {Logger} Logger service end point.
   */
  constructor(private logger: Logger) {
    this.description = 'A short introduction to the about page, which can be moderated later'
                        + ' through a service or any other source.';
  }

  /**
   * Getter method for the static string.
   */
  get descriptionStr(): string {
    return this.description;
  }

  /**
   * Setter method for the {@link AboutComponent #description}
   */
  set descriptionStr(value: string) {
    this.description = value;
  }

  /**
   * The {OnInit} hook method.
   */
  ngOnInit() {
    this.logger.log(' ngOnInit called for AboutComponent.');
  }

}
