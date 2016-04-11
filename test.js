var expect = require('chai').expect;
var arrayPredicate = require('./index.js');

describe('tests for splitting an array by given predicate', function() {
  it('should pass the test givent the predicate to get odd numbers', function() {
    var val = arrayPredicate([0, 1, 2, 3, 4, 5], function (value) {
      return value % 2 === 0;
    });

    expect(val[0]).to.be.eql([0, 2, 4]);
    expect(val[1]).to.be.eql([1, 3, 5]);
  });

  it('should pass the test givent the predicate to get string length greater than 6', function() {
    var val = arrayPredicate(['github', 'facebook', 'google', 'youtube'], function (value) {
      return value.length > 6;
    })

    expect(val[0]).to.be.eql(['facebook', 'youtube']);
    expect(val[1]).to.be.eql(['github', 'google']);
  });
});
