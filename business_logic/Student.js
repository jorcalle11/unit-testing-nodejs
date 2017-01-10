const uid = require('uid')

class Student {
  constructor(name,grade) {
    this.name = name
    this.grade = grade
    this.id = uid()
  }

  advanceGrade() {
    this.grade++
  }

  toString() {
    return `${this.id} \t ${this.name}`
  }
}

module.exports = Student