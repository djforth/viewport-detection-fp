# @djforth/viewport-detection-fp

A small vanilla utility to track changes to viewport.

## Install

```
yarn add @djforth/viewport-detection-fp

npm install @djforth/viewport-detection-fp
```

## Usage

Is set up as UMD for however you want to use it.

Default breakpoints


Device | Min width | Max width
:-------|:-------|:-------
Mobile | 0 | 767
Tablet | 768 | 992
Desktop | 993 | -

Basic set up (es6)

```javascript

import ViewportDetect from '@djforth/viewport-detection-fp';

const vpDetect = ViewportDetect();

vpDetect.addCallback((device, width)=>{
  // trigger something
  console.log('Device', device);
  console.log('Window width', width);
});

vpDetect.track();

```

## Utility methods

### Get device

```javascript
vpDetect.getDevice() // Will return defined devices
```

### Get Width

```javascript
vpDetect.getWidth() // Will return current widow width
```

### touchAvailable

```javascript
vpDetect.touchAvailabile() // Will return boolean if touch is available
```

### Set additional/different breakpoints

```javascript
//Set new breakpoints
const newBreakpoints = {
  mobileSm: {min: 0, max: 480}
  , mobileLg: {min: 481, max: 767}
  , tablet: {min: 768, max: 992}
  , desktop: {min: 993, max: 1048}
  , tv: {min: 1048, max: null}
}

const vpDetect = ViewportDetect(newBreakpoints);

```


# Bug reports

If you discover any bugs, feel free to create an issue on GitHub. Please add as much information as possible to help us fixing the possible bug. We also encourage you to help even more by forking and sending us a pull request.

https://github.com/djforth/viewport-detection-fp/issues

## Contribute

If you'd like to contribute, @djforth/viewport-detection-fp is written using babel in ES6.

Please make sure any additional code should be covered in tests (Jest).

If you need to run the test please use:

``` bash

yarn test

```

or to rebuild the JS through rollup run:

``` bash

yarn build

```

## Maintainers

Adrian Stainforth (https://github.com/djforth)

# License

@djforth/viewport-detection-fp is an open source project falling under the MIT License. By using, distributing, or contributing to this project, you accept and agree that all code within the @djforth/viewport-detection-fp project are licensed under MIT license.