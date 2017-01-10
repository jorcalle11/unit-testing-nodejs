const gulp = require('gulp')
const mocha = require('gulp-mocha')
const gutil = require('gulp-util')

gulp.task('mocha', function() {
  return gulp.src(['./test/*.js'],{read:false})
    .pipe(mocha({reporter: 'list'}))
    .on('error',gutil.log)
})

gulp.task('watch-mocha', function() {
  gulp.run('mocha')
  gulp.watch(['./test/**/*.js'],['mocha'])
})

gulp.task('default',['watch-mocha'])