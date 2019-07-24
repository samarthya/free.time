import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

/**
 * An Angular platform is the entry point for Angular on a web page. Each page has exactly one platform,
 * and services (such as reflection) which are common to every Angular application running on the page
 * are bound in its scope.
 * [AngularRef] (https://angular.io/api/core/ApplicationRef)
 * Each application is created from the module using bootstrapModule method.
 * Platform -> Instance
 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
