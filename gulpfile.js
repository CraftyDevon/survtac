var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifycss = require('gulp-minify-css'),
rename = require('gulp-rename'),
concat = require('gulp-concat'),
notify = require('gulp-notify'),
livereload = require('gulp-livereload'),
lr = require('tiny-lr'),
server = lr();

gulp.task('styles', function() {
return gulp.src('assets/css/main.scss')
.pipe(sass({ style: 'expanded' }))
.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'ios 6', 'android 4'))
.pipe(rename({ suffix: '.min' }))
.pipe(minifycss())
.pipe(gulp.dest('public/assets/css'))
.pipe(livereload(server))
.pipe(notify({ message: 'Style task completed.' }));
});

gulp.task('watch', function() {
server.listen(35729, function (e) {
if (e) {
return console.log(e)
};

var watcher = gulp.watch(['assets/css/*.scss'], ['styles']);

watcher.on('change', function(event) {
console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
});
});