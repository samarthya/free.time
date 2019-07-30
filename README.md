# FreeTime

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2. The intention behind this project is to learn new techstack while trying to solve a real life probelm. You should be able to use git and employ various commands to commit.

## Angular

Angular is a feature rich JS framework with various built-in capabilities like HTTP communication, routing, observables and dependency injection. It enhances productivity and reusability for development teams by eliminating the need to implement boilerplate code common to modern web apps.

Angular is an opinionated framework, with loads of recommendations or prescriptions, this facilitates consistent application logic building with increased productivity.

## Chronology

Install angular client version [8.1.2](https://www.npmjs.com/package/@angular/cli) and you are almost set. You can navigate to any folder of your choice or if reuquired you can create one. I prefer to have my own folder and that way I can ensure what I am creating and where.

Things you should know

* Angular bootstrapping
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) and [Angular Modules]
* Some knowledge of CommonJS, AMD (*Asynchronous Module Definition*)  - RequireJS, Webpack and Babel would be encouraging. [ref-link](https://www.redairship.com/2015/05/making-sense-difference-amd-commonjs-requirejs-browserify/)
* It is recommended to understand what is [package.json](https://flaviocopes.com/package-json/) and how to maintain it.
* Learn about the [styleguide](https://github.com/johnpapa/angular-styleguide).
* Angular Lifecycle [hooks](https://angular.io/guide/lifecycle-hooks).

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

## Git quick checks

Always before you commit you should chceck the status

```bash
  git status
  ```

It will give an output like

```bash
git status
On branch v1.0
Your branch is up-to-date with 'origin/v1.0'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   README.md
        modified:   src/app/app.component.html
        modified:   src/app/app.module.ts
        modified:   src/app/shared/navbar/navbar.component.css
        modified:   src/app/shared/navbar/navbar.component.html
        modified:   src/index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        __readymade/
        src/app/footer/
        src/app/home/
        src/app/routes/
        src/app/shared/log.service.ts
        src/assets/images/home.png
  ```

Add the files you wish to add before you push the commit

```bash
git add .
```

followed by

```bash
git status
```

which should give an output like

```bash
git status
On branch v1.0
Your branch is up-to-date with 'origin/v1.0'.

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        modified:   README.md
        new file:   __readymade/Groovin/assets/color/default.css
        new file:   __readymade/Groovin/assets/css/animate.css
        new file:   __readymade/Groovin/assets/css/bootstrap-theme.css
        new file:   __readymade/Groovin/assets/css/bootstrap.css
        new file:   __readymade/Groovin/assets/css/custom-fonts.css
        new file:   __readymade/Groovin/assets/css/fancybox/blank.gif
        new file:   __readymade/Groovin/assets/css/fancybox/fancybox_loading.gif
        new file:   __readymade/Groovin/assets/css/fancybox/fancybox_overlay.png
        new file:   __readymade/Groovin/assets/css/fancybox/fancybox_sprite.png
        new file:   __readymade/Groovin/assets/css/fancybox/jquery.fancybox.css
        new file:   __readymade/Groovin/assets/css/font-awesome.css
        new file:   __readymade/Groovin/assets/css/overwrite.css
        new file:   __readymade/Groovin/assets/css/prettyPhoto.css
        new file:   __readymade/Groovin/assets/css/slippry.css
        new file:   __readymade/Groovin/assets/css/style.css
        new file:   __readymade/Groovin/assets/fonts/customicon/Icons.eot
        new file:   __readymade/Groovin/assets/fonts/customicon/Icons.svg
        new file:   __readymade/Groovin/assets/fonts/customicon/Icons.ttf
        new file:   __readymade/Groovin/assets/fonts/customicon/Icons.woff
        new file:   __readymade/Groovin/assets/fonts/fontawesome/FontAwesome.otf
        new file:   __readymade/Groovin/assets/fonts/fontawesome/fontawesome-webfont.eot
        new file:   __readymade/Groovin/assets/fonts/fontawesome/fontawesome-webfont.svg
        new file:   __readymade/Groovin/assets/fonts/fontawesome/fontawesome-webfont.ttf
        new file:   __readymade/Groovin/assets/fonts/fontawesome/fontawesome-webfont.woff
        new file:   __readymade/Groovin/assets/fonts/glyphicons-halflings-regular.eot
        new file:   __readymade/Groovin/assets/fonts/glyphicons-halflings-regular.eot@
        new file:   __readymade/Groovin/assets/fonts/glyphicons-halflings-regular.svg
        new file:   __readymade/Groovin/assets/fonts/glyphicons-halflings-regular.ttf
        new file:   __readymade/Groovin/assets/fonts/glyphicons-halflings-regular.woff
        new file:   __readymade/Groovin/assets/img/arrows.svg
        new file:   __readymade/Groovin/assets/img/cursor.png
        new file:   __readymade/Groovin/assets/img/dummies/team1.jpg
        new file:   __readymade/Groovin/assets/img/dummies/team2.jpg
        new file:   __readymade/Groovin/assets/img/dummies/team3.jpg
        new file:   __readymade/Groovin/assets/img/dummies/team4.jpg
        new file:   __readymade/Groovin/assets/img/glyphicons-halflings-white.png
        new file:   __readymade/Groovin/assets/img/glyphicons-halflings.png
        new file:   __readymade/Groovin/assets/img/portfolio/1.jpg
        new file:   __readymade/Groovin/assets/img/portfolio/10.jpg
        new file:   __readymade/Groovin/assets/img/portfolio/11.jpg
        new file:   __readymade/Groovin/assets/img/portfolio/12.jpg
        new file:   __readymade/Groovin/assets/img/portfolio/13.jpg
        new file:   __readymade/Groovin/assets/img/portfolio/14.jpg
        new file:   __readymade/Groovin/assets/img/portfolio/2.jpg
        new file:   __readymade/Groovin/assets/img/portfolio/3.jpg
        new file:   __readymade/Groovin/assets/img/portfolio/4.jpg
        new file:   __readymade/Groovin/assets/img/portfolio/5.jpg
        new file:   __readymade/Groovin/assets/img/portfolio/6.jpg
        new file:   __readymade/Groovin/assets/img/portfolio/7.jpg
        new file:   __readymade/Groovin/assets/img/portfolio/8.jpg
        new file:   __readymade/Groovin/assets/img/portfolio/9.jpg
        new file:   __readymade/Groovin/assets/img/portfolio/app-design.png
        new file:   __readymade/Groovin/assets/img/slide/1.jpg
        new file:   __readymade/Groovin/assets/img/slide/2.jpg
        new file:   __readymade/Groovin/assets/img/slide/3.jpg
        new file:   __readymade/Groovin/assets/img/sy-loader.gif
        new file:   __readymade/Groovin/assets/js/AnimOnScroll.js
        new file:   __readymade/Groovin/assets/js/animate.js
        new file:   __readymade/Groovin/assets/js/bootstrap.js
        new file:   __readymade/Groovin/assets/js/classie.js
        new file:   __readymade/Groovin/assets/js/custom.js
        new file:   __readymade/Groovin/assets/js/imagesloaded.js
        new file:   __readymade/Groovin/assets/js/jquery-1.9.1.min.js
        new file:   __readymade/Groovin/assets/js/jquery.easing.js
        new file:   __readymade/Groovin/assets/js/jquery.fancybox-media.js
        new file:   __readymade/Groovin/assets/js/jquery.fancybox.pack.js
        new file:   __readymade/Groovin/assets/js/jquery.min.js
        new file:   __readymade/Groovin/assets/js/jquery.nav.js
        new file:   __readymade/Groovin/assets/js/jquery.nicescroll.min.js
        new file:   __readymade/Groovin/assets/js/jquery.scrollTo.js
        new file:   __readymade/Groovin/assets/js/masonry.pkgd.min.js
        new file:   __readymade/Groovin/assets/js/modernizr.custom.js
        new file:   __readymade/Groovin/assets/js/nagging-menu.js
        new file:   __readymade/Groovin/assets/js/slippry.min.js
        new file:   __readymade/Groovin/contactform/contactform.js
        new file:   __readymade/Groovin/index.html
        modified:   src/app/app.component.html
        modified:   src/app/app.module.ts
        new file:   src/app/footer/footer.component.css
        new file:   src/app/footer/footer.component.html
        new file:   src/app/footer/footer.component.spec.ts
        new file:   src/app/footer/footer.component.ts
        new file:   src/app/home/home.component.css
        new file:   src/app/home/home.component.html
        new file:   src/app/home/home.component.spec.ts
        new file:   src/app/home/home.component.ts
        new file:   src/app/routes/main.routes.ts
        new file:   src/app/shared/log.service.ts
        modified:   src/app/shared/navbar/navbar.component.css
        modified:   src/app/shared/navbar/navbar.component.html
        new file:   src/assets/images/home.png
        modified:   src/index.html
```

Always provide comment to any changes that you shall commit.

```bash
git commit -m "Added some basic components and guidelines"
```

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
