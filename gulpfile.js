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
    .pipe(source('main.js'))
    .pipe(gulp.dest('./sorting-algorithms/build/js/'));
});

gulp.task('sorting-html', function() {
  gulp.src('./sorting-algorithms/src/index.html')
    .pipe(gulp.dest('./sorting-algorithms/build'))
});

gulp.task('sorting-algorithms-watch', function(){
  gulp.watch('./sorting-algorithms/src/**/*', ['sorting-html', 'sorting-js']);
});

gulp.task('sorting-algorithms-build', ['sorting-js', 'sorting-html'], function(){
  gulp.start('sorting-algorithms-watch');
});

// Binary Search Tree
gulp.task('BST-js', function() {
  return browserify('./binary-search-tree/src/js/main.js')
    .transform(babelify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./binary-search-tree/build/js/'));
});

gulp.task('BST-html', function() {
  gulp.src('./binary-search-tree/src/index.html')
    .pipe(gulp.dest('./binary-search-tree/build'))
});

gulp.task('BST-watch', function(){
  gulp.watch('./binary-search-tree/src/**/*', ['BST-js', 'BST-html']);
});

gulp.task('BST-build', ['BST-js', 'BST-html'], function(){
  gulp.start('BST-watch');
});

// Default Task
gulp.task('default', []);
