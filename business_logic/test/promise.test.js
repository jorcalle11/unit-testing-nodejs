const DataLoader = require('../DataLoader.js'),
  chai = require('chai'),
  chaiAsPromised = require('chai-as-promised'),
  should = chai.should(),
  db = new DataLoader();

chai.use(chaiAsPromised)

let student = db.getStudentSync('jm11')

const dataAccess = {
  getStudent : id => {
    let promise = new Promise((resolve,reject) => {
      if (id === 1) {
        resolve(student)
      } else {
        reject('Invalid Student Id')
      }
    })
    return promise
  }
}

describe('Testing Promises', () => {
  it('get student, use done function', done => {
    dataAccess.getStudent(1)
      .then(student => {
        student.id.should.equal(1)
        done()
      })
  });

  it('fulfills the Promise', () => {
    return dataAccess.getStudent(1)
  });

  it('fulfills the promises with the correct student', () => {
    return dataAccess.getStudent(1).should.eventually.equal(student)
  });
});
