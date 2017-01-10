class Course {
  constructor(name,code,description) {
    this.name = name
    this.code = code
    this.description = description
    this.students = []
    this.times = []
  }

  registerStudent(student) {
    this.students.push(student)
  }

  unRegisterStudent(studentId) {
    const isRegisterStudent = this.students.some(student => student.id === studentId)

    if (isRegisterStudent) {
      let newState = this.students.filter(student => student.id !== studentId)
      this.students = newState
    } else {
      throw new Error(`Student with id ${studentId} is not registered for this course`)
    }
  }

  addTimes(days,times) {
    let me = this
    if (!Array.isArray(days)) {
      days = [days]
    }

    if (!Array.isArray(times)) {
      times = [times]
    }

    let validDays = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ]

    days.forEach(day => {
      if (!validDays.find(temp => temp === day)) {
        throw new Error(`${day} is not valid day`)
      }

      times.forEach(time => {
        me.times.push({day,time})
      })
    })
  }

  showSchedule() {
    let scheduleString = '', first = true

    this.times.forEach(time => {
      if (!first) {
        scheduleString += '\n'
      }
      first = false

      scheduleString += `${time.day} at ${time.time}`
    })

    return scheduleString
  }

  showStudents() {
    let studentString = '', first = true

    this.students.forEach(student => {
      if (!first) {
        studentString += '\n'
      }
      first = false

      studentString += student.toString()
    })

    return studentString
  }
}

module.exports = Course