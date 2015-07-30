# xhr-override

## Installation

Include a script into a webpage:  
`<script src="index.js"></script>`

## [Demo](http://opudalo.github.io/xhr-override/).

## Usage example

```js
XHROverride({
  methods: {
    send: function () {
      console.log('open:', arguments)
    },
    open: function () {
      console.log('send:', arguments)
    }
  },
  listeners: {
    readystatechange: function () {
      console.log('onreadystatechange:', this.readyState)
    }
  }
})
```
