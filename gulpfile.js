import gulp from 'gulp';
import concat from 'gulp-concat';
import babel from 'gulp-babel-minify';
import webp from 'gulp-webp';
import clean from "gulp-clean-css";
import concatCss from 'gulp-concat-css';
import htmlmin from 'gulp-htmlmin';
import replace from 'gulp-replace';
import browserSync from 'browser-sync';


const SRC_FOLDER = './src';
const BUILD_FOLDER = './build';
const JS_FILES_PATH = SRC_FOLDER + '/js/';
const HTML_FILES_PATH = SRC_FOLDER + '/*.html';
const ICONS_FONT = SRC_FOLDER + '/icomoon (2)/fonts/*.{ttf,woff,woff2,eot,svg}';
const ICONS_CSS = SRC_FOLDER + '/icomoon (2)/*.css';
const CSS_FILES_PATH = SRC_FOLDER + '/styles/**/*.css';
const IMG_PATH = SRC_FOLDER + '/img/*.*';

async function jsCompilation() {
  gulp.src([
    JS_FILES_PATH + 'slider.js', JS_FILES_PATH + 'helpers.js',
    JS_FILES_PATH + 'getData.js', JS_FILES_PATH + 'cleaningFilterInput.js',
    JS_FILES_PATH + 'filter.js', JS_FILES_PATH + 'sort.js',
    JS_FILES_PATH + 'showPurchase.js', JS_FILES_PATH + 'editElements.js',
    JS_FILES_PATH + 'showelements.js', JS_FILES_PATH + 'addNewElements.js',
    JS_FILES_PATH + 'close.js', JS_FILES_PATH + 'emptyLists.js',
    JS_FILES_PATH + 'removeElements.js', JS_FILES_PATH + 'sellGoods.js',
    JS_FILES_PATH + 'ordersHistory.js', JS_FILES_PATH + 'app.js',
    JS_FILES_PATH + 'validate.js',
  ])
    .pipe(babel())
    .pipe(concat('result.js'))
    .pipe(gulp.dest(BUILD_FOLDER))
    .pipe(browserSync.stream())
}

async function cssHandler() {
  gulp.src([ICONS_CSS, CSS_FILES_PATH])
    .pipe(concatCss('style.css'))
    .pipe(clean())
    .pipe(gulp.dest(BUILD_FOLDER + '/styles'))
    .pipe(browserSync.stream())
}

async function imageToWebP() {
  gulp.src(IMG_PATH)
    .pipe(webp({
      quality: 0
    }))
    .pipe(gulp.dest(BUILD_FOLDER + '/img'))
}

async function htmlCompilation() {
  gulp.src(HTML_FILES_PATH)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(replace('<link rel="stylesheet" href="./icomoon (2)/style.css">', ''))
    .pipe(replace('<script src="../build/result.js"></script>', '<script src="./result.js"></script>'))
    .pipe(replace('.jpg', '.webp'))
    .pipe(replace('.png', '.webp'))
    .pipe(gulp.dest(BUILD_FOLDER))
    .pipe(browserSync.stream())
}

gulp.task('html-compile', htmlCompilation);
async function copyJson() {
  gulp.src('src/**/*.json')
    .pipe(gulp.dest(BUILD_FOLDER))
}

async function copyIconFonts() {
  gulp.src(ICONS_FONT)
    .pipe(gulp.dest(BUILD_FOLDER + '/styles/fonts'))
}

async function browsersync(){
  browserSync.init({
      server: {
          baseDir: "./build/"
      }
  });
}

gulp.task('copy-icons', copyIconFonts);

gulp.task('copy-json', copyJson);

gulp.task('css-compile', cssHandler);

gulp.task('js-compile', jsCompilation);

gulp.task('imgToWebP', imageToWebP);

gulp.task('browserSync', browsersync);

gulp.task('watch-js', function () {
  gulp.watch(CSS_FILES_PATH, cssHandler)
  gulp.watch(JS_FILES_PATH, jsCompilation)
  gulp.watch(HTML_FILES_PATH).on('change', browserSync.reload);
})


gulp.task('default', gulp.parallel('js-compile', 'css-compile', 'imgToWebP', 'copy-json', 'copy-icons', 'html-compile', 'browserSync', 'watch-js'));