const chai = require('chai')
const expect = chai.expect

chai.should()

function less(num1,num2) {
  return num1 - num2
}

// xdescribe or describe.skip skip this test
xdescribe('Others tests', () => {
  describe('test for less', () => {
    var num;
    beforeEach(() => num=10);

    it('Should be 5 when passing 10 to 5', () => {
      num = less(num,5)
      num.should.equal(5)
    });
  });
});