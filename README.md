# Template for making Modular Front-End Libraries with style
 
 ![Screenshot](https://user-images.githubusercontent.com/4627728/35877932-a0045a22-0b2b-11e8-8fb2-bdfd8acc3c95.png)

 This library is framework agnostic so it can be used with React, Angular, Vue, or whatever other frameworks you so choose.

 See **[Example](https://bneigher.github.io/template-module-webpack/sandbox/)**
 
The purpose of this library is to provide a toolkit library for fast development of front-end modules using the most modern of technologies.

This is to be framework agnostic so it can be used with Node, React, Angular, Vue, or whatever other frameworks you so choose.

To use this library in your application import it as follows for the javascript

```javascript
import library as 'template-module-webpack';
```

The css if applicable will be located in the `dist` folder of the node_module


## What's in the box?

Webpack Hot Module Replacement (HMR), ES6, SASS, Linting, Unit Tests, and Sandbox library module template

## Environment setup 

```sh
  $ npm i
```

## Testing

Start the Jest Auto Test interface

```sh
  $ npm run test
```

## UI based Development

Start the Webpack server (includes live reloading + hot module replacement when you change files):

```sh
  $ npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in a browser.  `./sandbox/index.html` is the example which is an example of an implentation of your src library.
`./src/index.js` is the entry point.

## Bundling 

When you're finished and want to make a build, you will need to actually bundle the code into its distribution bundles.  The following command will do this with which you can publish the library

```sh
  $ npm run bundle
```

