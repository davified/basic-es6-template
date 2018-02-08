# Simple Template for Writing/Running ES6 (using `babel`)

### Getting Started
- Fork the repo
- clone the repo and `cd` into basic-es6-template`
- run `yarn install`
- run `yarn start` and you should see 'hello world' printed to the console 

### What this template does to allow us to run ES6

In `package.json`, we:
- added `babel-cli` and `babel-preset-es2015`
- added `start` script which runs: `babel-node --presets es2015 file2.js` (note the use of `babel-node` instead of `node`)

```javascript
"scripts": {
    "start": "babel-node --presets es2015 file2.js",  // added for allowing ES6 when we run 'yarn start'
    "test": "jest",                  // added for allowing ES6 when we run 'yarn test'
    "test:watch": "jest --watch"     // added for allowing ES6 when we run 'yarn test'
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
    "presets": ["env"]               // added for allowing ES6 when we run 'yarn test'
  }
```

### Try it!
- Run `node file2.js` and you will see an error, because `file2.js` is using the ES6 import syntax
- Run `yarn start` instead, and everything will run fine.

---
Copyright (c) 2018 ThoughtWorks. For personal use and training purposes only; not to be copied or distributed without further approval.
