# FreeTime

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2. The intention behind this project is to learn new techstack while trying to solve a real life probelm. You should be able to use git and employ various commands to commit.

## Chronology

Install angular client version [8.1.2](https://www.npmjs.com/package/@angular/cli) and you are almost set. You can navigate to any folder of your choice or if reuquired you can create one. I prefer to have my own folder and that way I can ensure what I am creating and where.

Things you should know

* Angular bootstrapping
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and [Angular Modules]
* Some knowledge of CommonJS, AMD (*Asynchronous Module Definition*)  - RequireJS, Webpack and Babel would be encouraging. [ref-link](https://www.redairship.com/2015/05/making-sense-difference-amd-commonjs-requirejs-browserify/)

### ng new free.version

The command used to create this application.

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

## Development server

You can use `ng serve` for the dev server & navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## What are we building & why

The expectation is to start with a simple SPA that will employ Angular and some cascading style sheet framework that can either be Bootstrap or Angular Material and shall have a Navigation bar at the top. The basic topics that it should cover are

* Introduction/Mission statement
* About (The stakeholders)
* Highlights (May be link to the individual blogs)
