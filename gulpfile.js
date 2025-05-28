const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

function images(){
    return gulp.src('./src/images/**/*', { encoding: false})
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

function styles(){
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}

exports.default = gulp.parallel(styles, images);
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}