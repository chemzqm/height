# Height

[![Build Status](https://secure.travis-ci.org/chemzqm/height.svg)](http://travis-ci.org/chemzqm/height)

Get the height the element should be when use `height: auto`

Sometimes min-height has bugs or can not be used

## Install

    npm i height

## Usage

``` js
var height = require('height')
// only used for box-sizing: border-box
function setHeight(el) {
  if (el.style.height == 'auto') return
  var h = height(el)
  if (h < 200) {
    el.style.height = h + 'px'
  } else {
    el.style.height = 'auto'
  }
}
```

## API

### height(el)

  Return the height value the element should be
