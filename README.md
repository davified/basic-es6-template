# Simple Template for Writing/Running ES6 (using `babel`)

### Getting Started
- Fork the repo
- clone the repo and `cd` into basic-es6-template`
- run `yarn install`
- run `yarn start` and you should see '3' printed to the console 

### What this template does to allow us to run Javascripts in ES6

```javascript
"scripts": {
    "start": "babel-node --presets es2015 app.js",  // added for allowing ES6 modules when we run 'yarn start'
    "test": "jest",                  // run tests with jest
    "test:watch": "jest --watch"     // watch the changes in codes and run tests automatically
    "test:coverage": "jest --coverage"     // test coverage of the codes
  },
  "dependencies": {
    "babel-cli": "^6.26.0",                           // added for allowing ES6 when we run 'yarn start'
    "babel-preset-es2015": "^6.24.1"                  // added for allowing ES6 when we run 'yarn start'
  },
  "devDependencies": {
    "babel-jest": "^22.1.0",         // added for allowing ES6 when we run 'yarn test'
    "babel-preset-env": "^1.6.1",    // added for allowing ES6 when we run 'yarn test'
    "jest": "^22.1.4"
  },
  "babel": {
    "presets": ["env"]               // added for allowing ES6 code syntax
  }
```

### Try it!
- Run `node app.js` and you will see an error, because `app.js` is using the ES6 import syntax
- Run `yarn start` instead, and everything will run fine.

---
Copyright (c) 2018 ThoughtWorks. For personal use and training purposes only; not to be copied or distributed without further approval.
