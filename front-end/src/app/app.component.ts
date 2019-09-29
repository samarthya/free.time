import { Component } from '@angular/core';
import { Logger } from '@free-time/components/index';
import { Store }  from '@ngrx/store';

import * as fromStore from '@free-time/state/index';

/**
 * <h2>The angular-bootstrapped class</h2>
 * <p>Every <b>root component</b> connects Component Hierarchy with Page DOM.</p>
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private logger: Logger, private store: Store<fromStore.State>) {
    this.logger.log(' AppComponent created.');
  }
}
