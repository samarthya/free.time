import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from 'src/app/models/profiles.model';
import { Logger } from '../log.service';


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

  @Input() profile: IProfile;

  constructor(private logger: Logger) {

  }

  ngOnInit() {
    this.logger.log(' ngOnInit called for PersonComponent');
  }

}
