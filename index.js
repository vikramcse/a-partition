'use strict';

function arrayPredicate(array, predicate) {
  var result = [[], []];

  if (predicate !== undefined) {
    array.forEach(function (item) {
      (predicate(item) ? result[0] : result[1]).push(item);
    });
    return result;
  }

  throw new Error('predicate value required');
}

module.exports = arrayPredicate;
