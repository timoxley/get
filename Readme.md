# get

 Allows you to access object properties in 'functional' methods
 (e.g. map, reduce, filter, etc) without the need of an anonymous function
 wrapper.

 Returns a function, that takes an object of any type, and returns the value
 of `prop` of that object. if prop is a method, the returned value with be
 the result of evaluating that method.
## Installation

    $ component install timoxley/get

## Examples:

#### Before
```js
// Note the anonymous wrapper is required to map the `length` property.
['apple', 'banana', 'pineapple'].map(function(str) {
 return str.length
})
// Result [5, 6, 9]
```
#### After
```js
['apple', 'banana', 'pineapple'].map(get('length'))
// Result [5, 6, 9]
```

#### You can also use `get` to evaluate object methods:

```js
// Calls the 'italics' method on each supplied item
// e.g. 'apple'.italics() // '<i>apple</i>'
['apple', 'banana', 'pineapple'].map(get('italics'))
// Result: ['<i>apple</i>', '<i>banana</i>', '<i>pineapple</i>']
```
### And pass in arguments
```
// Calls the 'substr' method, passing in arguments
// e.g. 'apple'.substr(0, 1) // 'a'
['apple', 'banana', 'pineapple'].map(get('substr', 0, 1))
// Result: ['a', 'b', 'p']
```

## License

  MIT
