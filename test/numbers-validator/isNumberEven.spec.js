import {NumbersValidator} from '../../app/numbers-validator.js'
import {expect} from 'chai'

// test suite
describe('is number even positive test', () => {

  let validator

  // mocha feature
  beforeEach(() => {
    validator = new NumbersValidator()
  })

  // individual test
  it('should return true when even number is provided', () => {
    const validationResults = validator.isNumberEven(4);
    // chai feature
    expect(validationResults).to.be.equal(true)
  });
})