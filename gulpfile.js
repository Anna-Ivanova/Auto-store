import gulp from 'gulp';
import sass from 'sass';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
import babel from 'gulp-babel-minify';
import webp from 'gulp-webp';

const scssCompiler = gulpSass(sass);

const SRC_FOLDER = './src';
const BUILD_FOLDER = './build';
const JS_FILES_PATH = SRC_FOLDER + '/js/**/*.js';
const SCSS_FILES_PATH = SRC_FOLDER + '/css/**/*.css';
const IMG_PATH = SRC_FOLDER + '/img/*.*';

async function jsCompilation() {
    gulp.src(JS_FILES_PATH)
    .pipe(babel())
    .pipe(concat('result.js'))
    .pipe(gulp.dest(BUILD_FOLDER));
  }
  
  async function sassCompilation() {
    gulp.src(SCSS_FILES_PATH)
    .pipe(scssCompiler())
    .pipe(gulp.dest(BUILD_FOLDER));
  }
  async function imageToWebP() {
    gulp.src(IMG_PATH)
    .pipe(webp({
      quality: 0
    }))
    .pipe(gulp.dest(BUILD_FOLDER + '/img'));
  }
  
  gulp.task('sass-compile', sassCompilation);
  
  gulp.task('js-compile', jsCompilation);

  gulp.task('imgToWebP', imageToWebP);

  gulp.task('watch-scss', function() {
    gulp.watch(SCSS_FILES_PATH, sassCompilation)
  })
  
  gulp.task('watch-js', function() {
    gulp.watch(JS_FILES_PATH, jsCompilation)
  })

  gulp.task('watch', gulp.parallel(
    'watch-scss',
    'watch-js'
  ));
  
  gulp.task('default', gulp.parallel('js-compile', 'sass-compile', 'imgToWebP'));