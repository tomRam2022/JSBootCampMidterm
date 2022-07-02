/* eslint-disable no-undef */
const { expect } = require('chai');
const {
  swapCase,
} = require('./swapCase');

describe('swapCase', () => {
  it('is a function', () => {
    expect(typeof swapCase).to.equal('function');
  });

  it('returns a string', () => {
    const returnedValue = swapCase('what does the fox say');
    expect(typeof returnedValue).to.equal('string');
  });

  it('returns a string with all of the cases swapped', () => {
    const returnedValue = swapCase('what does the fox say');
    expect(returnedValue).to.equal('WHAT DOES THE FOX SAY');

    expect(swapCase('WHAT DOES THE FOX SAY')).to.equal('what does the fox say');
  });

  it('returns a string with all of the cases swapped if the cases are not predictable', () => {
    const returnedValue = swapCase('ThE RaiN in SpaiN');
    expect(returnedValue).to.equal('tHe rAIn IN sPAIn');
  });
});
