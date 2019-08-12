import { Component } from '@angular/core';
import { Logger } from './components';

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
  constructor(private logger: Logger) {
    this.logger.log(' AppComponent created.');
  }
}
