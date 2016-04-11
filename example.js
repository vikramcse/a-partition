var arrayPredicate = require('./index.js');

console.log(arrayPredicate([0, 1, 2, 3, 4, 5], function (value) {
  return value % 2 === 0;
}));

console.log(arrayPredicate(['github', 'facebook', 'google', 'youtube'], function (value) {
  return value.length > 6;
}));
