const gulp = require('gulp');
const sass = require('gulp-sass'); //sass
const browserSync = require('browser-sync').create(); //browser sync
const cssAutoPrefixer = require('gulp-autoprefixer'); // auto prefixer
const cssPrefixerOptions = { browsers: ['last 2 versions'],cascade: false } //prefixer options
const cleanCSS = require('gulp-clean-css'); // CSS minify
const imagemin = require('gulp-imagemin'); // image minify
const babelMinify = require("gulp-babel-minify"); //babel minify (supports es6+)


// Copy Html files into dist folder
gulp.task('copyHtml', () =>{
  gulp.src('src/*.php')
    .pipe(gulp.dest('dist'))
})

// Compress images
gulp.task('imagemin', () =>{
  gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
})

// Compile SASS, autoprefixer
gulp.task('sass', () =>{
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError)) //sass
    .pipe(cssAutoPrefixer(cssPrefixerOptions)) // auto prefixer
    .pipe(cleanCSS({compatibility: '*'})) // CSS minify
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream()) // browser sync (auto reload)
})

gulp.task("babelMinify", () =>
  gulp.src("src/js/*.js")
    .pipe(babelMinify({
      mangle: {
        keepClassName: true
      }
    }))
    .pipe(gulp.dest("dist/js"))
);

// Start live server & run main tasks
gulp.task('serve', ['sass', 'imagemin', 'copyHtml', 'babelMinify'], () =>{
  gulp.watch(['dist/*.html']).on('change', browserSync.reload); // liver server
  gulp.watch('src/sass/*.scss', ['sass']); 
  gulp.watch('src/js/*.js', ['babelMinify']); 
  gulp.watch('src/*.php', ['copyHtml']); 

  browserSync.init({
    server: './dist'
  });
})

// Default gulp tasks
gulp.task('default', ['serve']);