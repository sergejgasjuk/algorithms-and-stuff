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

// Searching Algorithms
gulp.task('searching-js', function() {
  return browserify('./searching-algorithms/src/js/main.js')
    .transform(babelify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./searching-algorithms/build/js/'));
});

gulp.task('searching-html', function() {
  gulp.src('./searching-algorithms/src/index.html')
    .pipe(gulp.dest('./searching-algorithms/build'))
});

gulp.task('searching-algorithms-watch', function(){
  gulp.watch('./searching-algorithms/src/**/*', ['searching-html', 'searching-js']);
});

gulp.task('searching-algorithms-build', ['searching-js', 'searching-html'], function(){
  gulp.start('searching-algorithms-watch');
});

// Other stuff
gulp.task('os-js', function() {
  return browserify('./other/src/js/main.js')
    .transform(babelify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./other/build/js/'));
});

gulp.task('os-html', function() {
  gulp.src('./other/src/index.html')
    .pipe(gulp.dest('./other/build'))
});

gulp.task('os-watch', function(){
  gulp.watch('./other/src/**/*', ['os-html', 'os-js']);
});

gulp.task('os-build', ['os-js', 'os-html'], function(){
  gulp.start('os-watch');
});

// Default Task
gulp.task('default', []);
