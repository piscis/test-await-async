import gulpMain from 'gulp';
import gulpHelp from 'gulp-help';
import runSequence from 'run-sequence';
import gutil from 'gulp-util';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config';

const gulp = gulpHelp(gulpMain);

gulp.task('watch', false, (cb)=>{
  runSequence(['watch:webpack'], cb);
});

gulp.task('watch:webpack', false, (cb)=>{

  webpack(webpackConfig, function(err, stats) {

    if (err) {
      throw new gutil.PluginError("webpack", err);
    }

    gutil.log("[webpack]", stats.toString({
      // output options
    }));

    cb();
  });
});
