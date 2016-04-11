# a-partition
Splits an array into two parts if given predicate satisfied

## Install

```sh
$ npm install --save a-partition
```

## Example

```js
var arrayPredicate = require('a-partition');

console.log(arrayPredicate([0, 1, 2, 3, 4, 5], function (value) {
  return value % 2 === 0;
}));

// -> [ [ 0, 2, 4 ], [ 1, 3, 5 ] ]

console.log(arrayPredicate([1, 2, 3, 4]));

// -> throw new Error('predicate value required');
```

### `require('a-partition')(list, callback)`

**Arguments**:

- `list`: list be the single array
- `callback`: callback be the predicate that will be executed on each element of array

**Returns**: Returns an array having two array first contains elements which satisfies the predicate and other which don't

## License

&copy; 2016 Vikram Jadhav. MIT License
