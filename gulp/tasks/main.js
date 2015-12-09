import gulpMain from 'gulp';
import gulpHelp from 'gulp-help';
import runSequence from 'run-sequence';

const gulp = gulpHelp(gulpMain);

gulp.task('develop', 'Start gulp with `gulp dev` to start developing', (cb)=>{
  process.env.NODE_ENV = 'development';
  return runSequence('clean:build', 'watch', cb);
});