const Student = require('../Student.js')
const Course = require('../Course.js')
const chai = require('chai')
const expect = chai.expect
const should = chai.should()

describe('Student', () => {
  let object = {name:'Jorge Calle', grade : 7}
  const {name, grade} = object
  let student;

  beforeEach(() => {
    student = new Student(name,grade)
  });

  it('Should save the info on the student and create unique id when created', () => {
    should.exist(student.name)
    student.name.should.equal(name)

    should.exist(student.grade)
    student.grade.should.equal(grade)

    should.exist(student.id)
  });

  it('Should increase the student`s grade when called advanceGrade method', () => {
    student.advanceGrade()

    student.grade.should.equal(grade+1)
  });
});