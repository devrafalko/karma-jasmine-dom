# Description

`karma-jasmine-dom` adapts the `jasmine-dom-custom-matchers` package to the `karma` framework.

* All the available **matchers** are described in the `jasmine-dom-custom-matchers` [documentation](https://www.npmjs.com/package/jasmine-dom-custom-matchers)
* See also `karma-html`  to test html files in the browser with `karma` [\[link\]](https://www.npmjs.com/package/karma-html)

# Usage

1. Run `npm install karma-jasmine-dom`
2. Add the following **frameworks** into your `karma.conf.js` file:

```javascript
module.exports = function(config) {
  config.set({
    //karma config here
    frameworks: ['jasmine-dom','jasmine']
  });
};
```
> **Mind** that `jasmine-dom` must precede `jasmine` *(as above)* in the `frameworks` array. The frameworks are loaded from right to left and the `jasmine` must be loaded first, as the `jasmine-dom` are `jasmine` custom matchers.

# Tests
Load the matchers with `jasmine.addMatchers` native method:
```javascript
describe("The <body>",function(){
  beforeAll(function(done){
    jasmine.addMatchers(DOMCustomMatchers);
  });

  it("should be the part of DOM",function(){
    expect(document.body).toBeDocumentNode();
  });
});
```
