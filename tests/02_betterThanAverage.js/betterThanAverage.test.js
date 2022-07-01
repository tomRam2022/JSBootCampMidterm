/* eslint-disable no-undef */
const { expect } = require('chai');
const {
  betterThanAverage,
} = require('./betterThanAverage');

describe('betterThanAverage', () => {
  it('is a function', () => {
    expect(typeof betterThanAverage).to.equal('function');
  });

  it('returns a string', () => {
    const returnedValue = betterThanAverage([60, 70, 75, 90, 100], 90);
    expect(typeof returnedValue).to.equal('string');
  });

  it('returns the correct string if your score is greater than the average.', () => {
    // Average should be rounded down to nearest whole number. checkout rounding methods to help.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    const returnedValue = betterThanAverage([60, 70, 75, 90, 100], 90);
    expect(returnedValue).to.equal('your score 90 is greater than class average 80');
  });

  it('returns the correct string if your score is less than the average.', () => {
    const returnedValue = betterThanAverage([80, 85, 90, 90, 95, 100], 85);
    expect(returnedValue).to.equal('your score 85 is lower than class average 89');
  });

  it('returns the correct string if your score is equal to the average', () => {
    const returnedValue = betterThanAverage([55, 60, 70, 70, 80, 85, 85, 95], 75);
    expect(returnedValue).to.equal('your score 75 is equal to the class average');
  });
});
