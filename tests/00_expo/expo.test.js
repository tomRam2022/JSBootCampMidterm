/* eslint-disable no-undef */
const { expect } = require('chai');
const {
  expo,
} = require('./expo');

describe('expo', () => {
  it('is a function', () => {
    expect(typeof expo).to.equal('function');
  });

  it('returns a number', () => {
    const returnedValue = expo(2, 3);
    expect(typeof returnedValue).to.equal('number');
  });

  it('returns the value of the first number raised to the second second number', () => {
    const returnedValue = expo(3, 4);
    expect(returnedValue).to.equal(81);
    expect(expo(2, 5)).to.equal(32);
  });

  it('returns 1 if the first number is raied to 0', () => {
    const returnedValue = expo(3, 0);
    expect(returnedValue).to.equal(1);
  });
});
