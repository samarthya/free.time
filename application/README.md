# Application Front End
Contais the source code for the front end application.

### Running the development server - Application testing

You can use `ng serve` for the dev server & navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build - Use --prod for production build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Adding a new component to your application

ng generate component test-component


### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run tests before any commit or push to the branch.

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Git - Tips

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

Untracked files:
  (use "git add <file>..." to include in what will be committed)
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
```

Always provide comment to any changes that you shall commit.

```bash
git commit -m "Added some basic components and guidelines"
```

In case your code gets dirty with your changes:
Get the updated code from repo and then apply your changes to it, for storing your changes use stashing:

1) git stash (This will save your  locally)
2) git pull origin (This will pull the latest code from repo)
3) git stash apply (This will apply the latest stash)

