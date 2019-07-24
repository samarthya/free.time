import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/models/profiles.model';


/**
 * Person component allows a card visualization for the profiles that needs to be shown.
 * It is the smallest component, that only takes input from the component creating this
 * component and visualizes using bootstrap cards.
 */
@Component({
  selector: 'ft-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})

export class PersonComponent implements OnInit {

  @Input() profile: Profile;

  constructor() {

  }

  ngOnInit() {

  }

}
