const chai = require('chai')
const expect = chai.expect

chai.should()

function isEven(number) {
  return number % 2 === 0
}

describe('number tests', () => {
  describe('isEven', () => {
    it('Should return true when number is even', () => {
      isEven(4).should.be.true
    });

    it('Should return false when number is odd', () => {
      expect(isEven(5)).to.be.false
    });
  });

  function add(num1,num2) {
    return num1 + num2
  }
  // describe.only exect only this test
  describe('Add without setup/teardown', () => {
    var num;
    beforeEach(() => num=5);

    it('Should be ten when adding 5 to 5', () => {
      num = add(num,5)
      num.should.equal(10)
    });

    // xit or it.skip skip this test
    xit('Should be twleve when adding 7 to 5', () => {
      add(num,7).should.equal(12)
    });
  });
});