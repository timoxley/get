# get

Create functions for use with functional methods like  `map`, `reduce`,
`filter`, etc. that get object properties without need of anonymous wrappers.

### Convoluted description:
Takes a property name, `prop` along with any number of additional
arguments, and returns a function, that takes an object of any type, and
returns the value of `prop` on that object. If `prop` is a method, the
returned value with be the result of evaluating that method, passing in
the the additional arguments.

## Installation

### Browser
    $ component install timoxley/get

### Node
    $ npm install timoxley-get

_Sorry for namespaced package, all good names taken._

## Usage

```js
// browser
var get = require('get')
// node
var get = require('timoxley-get')
```

## Examples

### Before
```js
// Note: horrible anonymous wrapper is required to map the `length`
// property.
['apple', 'banana', 'pineapple'].map(function(str) {
 return str.length
})
// Result [5, 6, 9]
```

### After
```js
// Note: Wow. Much cleaner.
['apple', 'banana', 'pineapple'].map(get('length'))
// Result [5, 6, 9]
```

### Use `get` to evaluate methods

```js
// Calls the 'italics' method on each supplied item
['apple', 'banana', 'pineapple'].map(get('italics'))
// Result: ['<i>apple</i>', '<i>banana</i>', '<i>pineapple</i>']
```

### Use `get` to evaluate methods, passing in arguments

```js
// Calls the 'substr' method, passing in arguments
['apple', 'banana', 'pineapple'].map(get('substr', 0, 1))
// Result: ['a', 'b', 'p']
```

## License

  MIT
