import { Component, OnInit } from '@angular/core';
import { Profile } from '../models/profiles.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  profiles: Profile[] = [
    {title: 'Software Engineer', subTitle: ' Lead 1', description: 'I am Saurabh', image: '', linkedIn: '', giturl: ''},
    {title: 'Software Engineer', subTitle: 'Lead 2', description: 'I am Bh', image: '', linkedIn: '', giturl: ''},
    {title: 'Software Engineer', subTitle: 'Lead 3', description: 'I am Vsh', image: '', linkedIn: '', giturl: ''}
 ];

  constructor() { }

  ngOnInit() {
  }

}
