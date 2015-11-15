/*global describe, it, beforeEach, afterEach*/
var assert = require('assert')
var height = require('..')

var el
beforeEach(function () {
  el = document.createElement('div')
  document.body.appendChild(el)
  el.style.padding = '10px'
  var child = document.createElement('div')
  child.style.padding = '5px'
  child.style.margin = '8px'
  child.textContent = 'foo'
  el.appendChild(child)
})

afterEach(function () {
  document.body.removeChild(el)
})

describe('height()', function() {
  it('should equal to height', function () {
    var h = el.getBoundingClientRect().height
    assert.equal(height(el),h)
  })

  it('should not include margin when el has no padding', function () {
    el.style.padding = 0
    var h = el.getBoundingClientRect().height
    assert.equal(height(el),h)
  })
})
