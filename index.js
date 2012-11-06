/**
 * Create functions for use with map, reduce, filter, etc. that get object
 * properties without need of anonymous wrappers.
 *
 * Returns a function, that takes an object of any type, and returns the value
 * of `prop` of that object. if prop is a method, the returned value with be
 * the result of evaluating that method.
 *
 * Example:
 *
 * ```js
 * // Before:
 * // Note the anonymous wrapper is required to map the `length` property.
 * ['apple', 'banana', 'pineapple'].map(function(str) {
 *   return str.length
 * })
 * // Result [5, 6, 9]
 *
 * // After:
 * ['apple', 'banana', 'pineapple'].map(get('length'))
 * // Result [5, 6, 9]
 * ```
 *
 * You can also use `get` to evaluate object methods:
 *
 * ```js
 * // Calls the 'italics' method on each supplied item
 * // e.g. 'apple'.italics() // '<i>apple</i>'
 * ['apple', 'banana', 'pineapple'].map(get('italics'))
 * // Result: ['<i>apple</i>', '<i>banana</i>', '<i>pineapple</i>']
 *
 * // Calls the 'substr' method, passing in arguments
 * // e.g. 'apple'.substr(0, 1) // 'a'
 * ['apple', 'banana', 'pineapple'].map(get('substr', 0, 1))
 * // Result: ['a', 'b', 'p']
 * ```
 *
 * @param {String} prop name of property to extract
 * @param {...} [arguments] additional variables
 * @return {Function(obj): mixed} Returns a function that takes an object of any type, and returns the value of `prop` of that object.
 * @api public
 */
module.exports = function get(prop) {
  var args = Array.prototype.slice.call(arguments, 1)
  return function(obj) {
    return (typeof obj[prop] === 'function')
      ? obj[prop].apply(obj, args)
      : Object.getOwnPropertyDescriptor(Object(obj), prop).value
  }
}
