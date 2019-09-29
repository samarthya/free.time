# Adding NgRx to the application

NGRx is a framework for building reactive application in angular. By normalizing state changes and passing them through observables, NgRx provides serializability and ensures state is predictably stored. This enables to save the state to an external storage, for example, localStorage.
To maintain the application state you can add NgRX store to your application. The basic steps to start with it, are as under

* Install the libraries.
  
```javascript
npm install @ngrx/store --save
```

* Add to your module.
  
```javascript
ng add @ngrx/store
```
