const chai = require('chai')
const sinon = require('sinon')
const expect = chai.expect

chai.should()

describe('sinon test', () => {
  var student, schedule;
  beforeEach(() => {
    student = {
      dropClass: (classId,cb) => {
        if (!!cb.dropClass) {
          cb.dropClass()
        } else {
          cb()
        }
      }
    }

    schedule = {
      dropClass: () => console.log('class dropped')
    }
  })

  describe('student.dropClass', () => {
    it('should call the callback', () => {
      var spy = sinon.spy()
      student.dropClass(1,spy)
      spy.called.should.be.true
    });

    it('should call the callback and log in the console', () => {
      function logConsole() {
        console.log('onClassDropped was called')
      }
      var spy = sinon.spy(logConsole)
      student.dropClass(1,spy)
      spy.called.should.be.true
    });

    it('should call the callback even if it\'s a method object' , () => {
      sinon.spy(schedule,'dropClass')
      student.dropClass(1,schedule)
      schedule.dropClass.called.should.be.true
    });
  });

  describe('student whith stubs', () => {
    it('Should call a stubbed method', () => {
      var stub = sinon.stub(schedule)
      student.dropClass(1,stub)
      stub.dropClass.called.should.be.true
    });
  });
});