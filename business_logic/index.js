const Student = require('./Student.js')
const Course = require('./Course.js')
const DataLoader = require('./DataLoader.js')

const student = new Student('Jorge Calle',4)
console.log(student.toString())

let object = {name: 'Programing',code: 'asd123', description: 'My awesome course programing'}
let days = ['Monday','Friday','Saturday']
let times = ['10:00','12:00']

const course = new Course(object.name,object.code,object.description)
course.addTimes(days,times)

// let day = 'fabulousday', time = '14:00'
// course.addTimes(day,time)
// console.log(course.times)

const db = new DataLoader()

db.getStudent('jm11', (data) => {
  console.log(data)
})

console.log('SYNC',db.getStudentSync('jm11'))