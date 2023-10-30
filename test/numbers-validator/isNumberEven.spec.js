import {NumbersValidator} from '../../app/numbers-validator.js';
import {expect} from 'chai';

let validator;

// mocha feature
beforeEach(() => {
  validator = new NumbersValidator();
});

afterEach(() => {
  validator = null;
});

// test suite
describe('Check isNumberEven method', () => {
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

describe('Check getEvenNumbersFromArray method', () => {
  it('should return true of even numbers', () => {
    const validationResults = validator.getEvenNumbersFromArray([2, 5, 8, 67]);
    expect(validationResults).to.have.all.members([2, 8]);
  });

  it('should throw an error when array of strings is provided', () => {
    expect(() => {
      validator.getEvenNumbersFromArray(['8', '67']);
    }).to.throw(`[8,67] is not an array of "Numbers"`);
  });
});

describe('Check isAllNumbers method', () => {
  it('should return true if all elements are numbers', () => {
    const validationResults = validator.isAllNumbers([4, 8, 10, 44]);
    expect(validationResults).to.be.equal(true);
  });

  it('should return false if not all elements are numbers', () => {
    const validationResults = validator.isAllNumbers([4, 8, '9', 44]);
    expect(validationResults).to.be.equal(false);
  });

  it('should throw an error when not array is provided', () => {
    expect(() => {
      validator.isAllNumbers('8');
    }).to.throw(`[8] is not an array`);
  });
});

describe('Check isInteger method', () => {
  it('should return true if integer is provided', () => {
    expect(validator.isInteger(4)).to.be.equal(true);
  });

  it('should throw an error if string is provided', () => {
    expect(() => {
      validator.isInteger('6');
    }).to.throw(`[6] is not a number`);
  });
});
