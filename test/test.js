var expect = require('chai').expect;
var fibby = require('../app/fibby');
var getFibonacci = fibby.fibonacci(4000000);
var getEvenNumbers = fibby.evenNumbers(getFibonacci);

describe('getFibonacci', function() {
  it('should return fibocacci number', function() {
    expect(getFibonacci[6]).to.equal(21);
  });
});

describe('getEvenNumbers', function() {
  it('should return an even number', function() {
    expect(getEvenNumbers[4] % 2).to.equal(0);
  });
});
