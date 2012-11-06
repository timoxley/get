try {
  // browser
  var get = require('get')
  var assert = require('timoxley-assert')
} catch(e) {
  // nodejs
  var get = require('../')
  var assert = require('assert')

}

describe('get property values from object', function() {
  it('gets values', function() {
    var actual = ['apple', 'banana', 'pineapple'].map(get('length'))
    assert.deepEqual([5, 6, 9], actual)
  })
})

describe('get function values from object', function() {
  it('evaluate function values', function() {
    var actual = ['apple', 'banana', 'pineapple'].map(get('italics'))
    assert.deepEqual(['<i>apple</i>', '<i>banana</i>', '<i>pineapple</i>'], actual)
  })

  it('evalute function values with params', function() {
    var actual = ['apple', 'banana', 'pineapple'].map(get('substr', 0, 1))
    assert.deepEqual(['a', 'b', 'p'], actual)
  })
})
