const fs = require('fs')
const path = require('path')

class DataLoader {
  getStudent(studentId,cb) {
    let filePath = path.join(__dirname,'data',`${studentId}.json`)
    fs.readFile(filePath, (err,data) => {
      if (err) {
        if (err.code && 'ENOENT' === err.code) {
          throw new Error (`Student with id ${studentId} does not exist`)
        }
        throw err
      }

      cb(JSON.parse(data))
    })
  }

  getStudentSync(studentId) {
    let filePath = path.join(__dirname,'data',`${studentId}.json`)
    return JSON.parse(fs.readFileSync(filePath))
  }
}

module.exports = DataLoader