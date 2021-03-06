# Application FREE.TIME
It is a complete end user application developed in Angular 8.

# FreeTime

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2. The intention behind this project is to learn new techstack while trying to solve a real life probelm. You should be able to use git and employ various commands to commit.

## Angular

Angular is a feature rich JS framework with various built-in capabilities like HTTP communication, routing, observables and dependency injection. It enhances productivity and reusability for development teams by eliminating the need to implement boilerplate code common to modern web apps.

Angular is an opinionated framework, with loads of recommendations or prescriptions, this facilitates consistent application logic building with increased productivity.

## Chronology

Install angular client version [8.1.2](https://www.npmjs.com/package/@angular/cli) and you are almost set. You can navigate to any folder of your choice or if required you can create one. I prefer to have my own folder and that way I can ensure what I am creating and where.

Things you should know before you start contributing.

* Angular bootstrapping
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and [Angular Modules]
* Some knowledge of CommonJS, AMD (*Asynchronous Module Definition*)  - RequireJS, Webpack and Babel would be encouraging. [ref-link](https://www.redairship.com/2015/05/making-sense-difference-amd-commonjs-requirejs-browserify/)
* It is recommended to understand what is [package.json](https://flaviocopes.com/package-json/) and how to maintain it.
* Learn about the [styleguide](https://github.com/johnpapa/angular-styleguide).
* Angular Lifecycle [hooks](https://angular.io/guide/lifecycle-hooks).
* [Property binding](https://angular.io/guide/template-syntax#property-binding)

### Application creation

The command (Angular CLI) used to create this application.

```bash
ng new --help
arguments:
  name
    The name of the new workspace and initial project.

options:
  --collection (-c)
    A collection of schematics to use in generating the initial app.
  --commit
    Initial git repository commit information.
  --create-application
    When true (the default), creates a new initial app project in the src folder of the new workspace. When false, creates an empty workspace with no initial app. You can then use the generate application command so that all apps are created in the projects folder.
  --defaults
    When true, disables interactive input prompts for options with a default.
  --directory
    The directory name to create the workspace in.
  --dry-run (-d)
    When true, runs through and reports activity without writing out results.
  --enable-ivy
    When true, creates a new app that uses the Ivy rendering engine.
  --force (-f)
    When true, forces overwriting of existing files.
  --help
    Shows a help message for this command in the console.
  --inline-style (-s)
    When true, includes styles inline in the component TS file. By default, an external styles file is created and referenced in the component TS file.
  --inline-template (-t)
    When true, includes template inline in the component TS file. By default, an external template file is created and referenced in the component TS file.
  --interactive
    When false, disables interactive input prompts.
  --minimal
    When true, creates a project without any testing frameworks. (Use for learning purposes only.)
  --new-project-root
    The path where new projects will be created, relative to the new workspace root.
  --prefix (-p)
    The prefix to apply to generated selectors for the initial project.
  --routing
    When true, generates a routing module for the initial project.
  --skip-git (-g)
    When true, does not initialize a git repository.
  --skip-install
    When true, does not install dependency packages.
  --skip-tests (-S)
    When true, does not generate "spec.ts" test files for the new project.
  --style
    The file extension or preprocessor to use for style files.
  --verbose (-v)
    When true, adds more details to output logging.
  --view-encapsulation
    The view encapsulation strategy to use in the initial project.
  ```
  
  Pretty much delete everything in the `app.component.html` file and will start from there.

## Testing: Application
```bash
  npm test
  ```
Allows to execute test cases from the parent.

## What are we building & why

The expectation is to start with a simple SPA that will employ Angular and some cascading style sheet framework that can either be Bootstrap or Angular Material and shall have a Navigation bar at the top. The basic topics that it should cover are

* Introduction/Mission statement
* About (The stakeholders)
* Highlights (May be link to the individual blogs)

## Why choose Angular

The basic question that everyone asks is why you went ahead with that specific choice of framework, when the others had similar or slightly better offerring? We had a similar dilemma and we chose Angular because of the following reasons

* Resources available.
* Existing expertise.
* Time at hand.

## Guidelines

Basic guidelines to be followed

* No component code to be checked in without the unit [testing](https://angular.io/guide/testing) code (spec). [helper link](https://onehungrymind.com/writing-basic-component-test-angular-testing-utilities/)

  * Understand ComponentFixture which gives us a reference to the component instance being tested, as well as the component’s template.
  * Do understand the TestBed utility, which is responsible for initializing the environment.
  * Do go through the Angular Testing.
  * Undestand the [Jasmine](https://jasmine.github.io/2.0/introduction.html) Syntax.
  * Understand Behavior driven development.
  * Tools that we shall use for testing will be as provided by the Angular CLI
    * Karma - The test runner.
    * Jasmine - The basic syntax.
    * You can explore the other options like Sinon and [Wallaby](https://wallabyjs.com/docs/intro/install.html#visual-studio-code), Cypress etc.

```javascript

beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonComponent ]
    })
    .compileComponents();
  }
  ```

* Angular style guideline to be employed, use lint before every commit.
* E2E to be decided.

## Good links to read

* Jasmine how to [spy](https://medium.com/@juanlizarazo/how-to-spy-on-a-property-getter-or-setter-with-jasmine-ad06c00ba612)
* Progressive web app & Service worker [intro](https://angular.io/guide/service-worker-intro)
* Can I [use](https://caniuse.com/)
* In memory web [API](https://github.com/angular/in-memory-web-api)
* Redux [store](https://redux.js.org/api/api-reference)
* When to use [Store](https://blog.angular-university.io/angular-2-redux-ngrx-rxjs/)
