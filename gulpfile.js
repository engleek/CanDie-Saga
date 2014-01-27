var gulp       = require('gulp');
var gutil      = require('gulp-util');
var browserify = require('gulp-browserify')

var path   = require('path');
var tinylr = require('tiny-lr');
var hbsfy  = require('hbsfy');

gulp.task('browserify', function () {

  gulp.src('client/js/game.js')
    .pipe(browserify({
      instertGlobals: true,
      transform: ['hbsfy']
    }))
    .pipe(gulp.dest('client'));

});

gulp.task('default', function () {

  // require('server/server.js')();

  var lr = tinylr();
      lr.listen(3001, function () {
        gutil.log('Live reload server listening on 3001');
      });

  gulp.watch(['client/index.html', 'client/css/*', 'client/media/*'], function (event) {
    
    gutil.log(gutil.colors.green(event.path), 'changed!');
    
    lr.changed({
      body: {
        files: [event.path]
      }
    });
  
  });
  
  gulp.watch('client/templates/*.hbs', function (event) {
    
    gutil.log(gutil.colors.green(event.path), 'changed');
    
    gulp.run('browserify');

    lr.changed({
      body: {
        files: [event.path]
      }
    });
  
  });

  gulp.watch(['client/js/*', 'client/js/**/*'], function (event) {
    
    gutil.log(gutil.colors.green(event.path), 'changed');
    
    gulp.run('browserify');

    lr.changed({
      body: {
        files: [event.path]
      }
    });
  
  });

});