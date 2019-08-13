import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Logger } from '@free-time/components/index';
import { MESSAGE } from '@free-time/components/constants/variables.constant';
import { Injectable } from '@angular/core';

@Injectable()
export class ThankyouResolver implements Resolve<any> {

  constructor(private logger: Logger) {

  }

  /**
   * The method to check before the route resolves.
   */
  public resolve(route: ActivatedRouteSnapshot) {
    this.logger.log(' Resolve guard in play: ThankYouResolver.');
    return route.queryParams[MESSAGE];
  }

}
