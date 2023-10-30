import {NumbersValidator} from '../../app/numbers-validator.js';
import {expect} from 'chai';

// test suite
describe('is number even tests', () => {
  let validator;

  // mocha feature
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  // individual test
  it('should return true when even number is provided', () => {
    const validationResults = validator.isNumberEven(4);
    // chai feature
    expect(validationResults).to.be.equal(true);
  });

  it('should return false when odd number is provided', () => {
    const validationResults = validator.isNumberEven(5);
    // chai feature
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when string is provided', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw(`[4] is not of type "Number" it is of type "string"`);
  });
});
