# Template for making Modular Front-End Libraries with style
 
The purpose of this library is to provide a toolkit library for fast development of front-end modules using the most modern of technologies.

This is to be framework agnostic so it can be used with React, Angular, Vue, or whatever other frameworks you so choose.

## What's in the box?

Webpack Hot Module Replacement (HMR), ES6, SASS + Linting

## Environment setup 

```sh
  $ npm install
```

## Development

Start the Webpack server (includes live reloading + hot module replacement when you change files):

```sh
  $ npm start
```

Open [http://localhost:3001](http://localhost:3001) in a browser. `./src/index.js` is the entry point.

## Sass linting

[Stylelint](http://stylelint.io/) is used to enforce consistent conventions and avoid errors in stylesheets.
`.stylelintrc` configuration file contains all the available rules for completeness, with the ones that I don't currently need turned off (set to `null`).
For more info, see [stylelint rules documentation](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/rules.md).

## Bundling 

```sh
  $ npm run bundle
```

