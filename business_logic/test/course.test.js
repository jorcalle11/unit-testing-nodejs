const Student = require('../Student.js'),
  Course = require('../Course.js'),
  chai = require('chai'),
  expect = chai.expect,
  should = chai.should();

describe('Courses', () => {
  let object = {name: 'Programing',code: 'asd123', description: 'My awesome course programing'}
  const {name,code,description} = object
  let student;

  beforeEach(() => {
    student = new Student("Jorge Calle",6)
  });

  it('should save info for course correctly', () => {
    let course = new Course(name,code,description)
    should.exist(course.name)
    should.exist(course.code)
    should.exist(course.description)

    should.exist(course.students)
    course.students.should.eql([])

    should.exist(course.times)
    course.times.should.eql([])
  });

  describe('registerStudent', () => {
    it('should add the student in students array', () => {
      let course = new Course(name,code,description)
      course.registerStudent(student)

      course.students.length.should.equal(1)
      course.students[0].id.should.equal(student.id)
    });
  });

  describe('unregisterStudent', () => {

    it('should throw an error if try to remove a student`s that isn`t in the array', () => {
      let course = new Course(name,code,description)

      expect(() => {
        course.unRegisterStudent('asdf')
      }).to.throw()
    });

    it('should remove the student if exist in students array', () => {
      let course = new Course(name,code,description)
      
      course.registerStudent(student)
      course.unRegisterStudent(student.id)
      course.students.should.eql([])
    });
  });

  describe('add Times', () => {
    it('should add the gives day/times to the course', () => {
      let course = new Course(name,code,description)
      let days = ['Monday','Friday','Saturday']
      let times = ['10:00','12:00']

      course.addTimes(days,times)
      course.times.length.should.equal(6)
      course.times[2].should.eql({
        day: 'Friday',
        time: '10:00'
      })
    });

    it('should throw error when try to add a day not valid', () => {
      let course = new Course(name,code,description)
      let day = 'fabulousday', time = '14:00'

      expect(() => {
        course.addTimes(day,time)
      }).to.throw()
    });
  });
});