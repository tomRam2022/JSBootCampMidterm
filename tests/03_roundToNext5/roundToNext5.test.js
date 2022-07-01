/* eslint-disable no-undef */
const { expect } = require('chai');
const {
  roundToNext5,
} = require('./roundToNext5');

describe('roundToNext5', () => {
  it('is a function', () => {
    expect(typeof roundToNext5).to.equal('function');
  });

  it('returns a number', () => {
    const returnedValue = roundToNext5(32);
    expect(typeof returnedValue).to.equal('number');
  });

  it('returns a number rounded to the next 5 of original number passed', () => {
    const returnedValue = roundToNext5(18);
    expect(returnedValue).to.equal(20);
    expect(roundToNext5(7)).to.equal(10);
  });
});
