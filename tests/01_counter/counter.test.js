/* eslint-disable no-undef */
const { expect } = require('chai');
const {
  counter,
} = require('./counter');

describe('counter', () => {
  it('is a function', () => {
    expect(typeof counter).to.equal('function');
  });

  it('returns an array', () => {
    const returnedValue = counter(5);
    expect(Array.isArray(returnedValue)).to.equal(true);
  });

  it('returns an array of all numbers including the number passed', () => {
    const returnedValue = counter(5);
    expect(returnedValue).to.deep.equal([1, 2, 3, 4, 5]);
    expect(counter(10)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
