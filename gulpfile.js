var gulp = require('gulp'),
    babel = require('gulp-babel'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

// Sorting Algorithms
gulp.task('sorting-js', function() {
  return browserify('./sorting-algorithms/src/js/main.js')
    .transform(babelify)
    .bundle()
    .pipe(source('build.js'))
    .pipe(gulp.dest('./sorting-algorithms/build/js/'));
});

gulp.task('sorting-html', function() {
  gulp.src('./sorting-algorithms/src/index.html')
    .pipe(gulp.dest('./sorting-algorithms/build'))
});

gulp.task('sorting-algorithms', ['sorting-js', 'sorting-html']);

gulp.task('sorting-algorithms-watch', function(){
  gulp.watch('./sorting-algorithms/src/**/*', ['sorting-html', 'sorting-js']);
});

// Default Task
gulp.task('default', ['sorting-algorithms']);
