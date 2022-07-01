/* eslint-disable no-undef */
const { expect } = require('chai');
const {
  findShortestWord,
} = require('./shortestWord');

describe('findShortestWord', () => {
  it('is a function', () => {
    expect(typeof findShortestWord).to.equal('function');
  });

  it('returns a string', () => {
    const returnedValue = findShortestWord('I\'m not superstitious but I\'m a little stitious');
    expect(typeof returnedValue).to.equal('string');
  });

  it('returns the shortest word when passed a string of words', () => {
    const returnedValue = findShortestWord('worst thing about prison was dementors');
    expect(returnedValue).to.equal('was');
  });
});
