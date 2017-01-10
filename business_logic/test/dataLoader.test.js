const DataLoader = require('../DataLoader.js'),
  chai = require('chai'),
  expect = chai.expect,
  should = chai.should(),
  db = new DataLoader();

describe('DataLoader', () => {
  const studentId = 'jm11'
  it('should get a student syncronously', () => {
    let student = db.getStudentSync(studentId)

    should.exist(student.name)
    student.name.should.equal('Jorge Calle')
  });

  it('should get a student asyncronously', done => {
    db.getStudent(studentId, student => {
      should.exist(student.name)
      student.name.should.equal('Jorge Calle')
      done()
    })
  });
});