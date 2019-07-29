import { Injectable, Optional } from '@angular/core';

/**
 * A place holder class to simplify logging to console at the moment.
 */
@Injectable()
export class Logger {
  private dateInstance: Date = new Date();
  private debugMode = true;
  constructor( ) {

  }

  /**
   * Simple logging message.
   * @param msg Message to be logged.
   */
  log(msg: any) {
    if (this.debugMode === true) {
       console.log(this.dateInstance.getDate() + ' : ' + msg);
      } else {
        return;
    }
  }

  /**
   * Error logging capability.
   * @param msg Message to be looged.
   */
  error(msg: any) {
    if (this.debugMode === true) {
      console.error(this.dateInstance.getDate() + ' : ' + msg);
    } else {
      return;
    }
  }

  warn(msg: any) {
    if (this.debugMode === true) {
      console.warn(this.dateInstance.getDate() + ' : ' + msg);
    } else {
      return;
    }
  }
}
