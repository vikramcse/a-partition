'use strict';

function arrayPredicate(array, predicate) {
  var result = [[], []];
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array to split');
  }

  if (predicate === undefined) {
    throw new TypeError('Predicate value required');
  }

  array.forEach(function (item) {
    (predicate(item) ? result[0] : result[1]).push(item);
  });

  return result;
}

module.exports = arrayPredicate;
