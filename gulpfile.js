var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var pug = require("gulp-pug");
var svgstore = require("gulp-svgstore");
var browserSync = require("browser-sync").create();
var useref = require("gulp-useref");
var minify = require("gulp-uglify");
var gulpIf = require("gulp-if");
var minicss = require("gulp-csso");
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var run = require("run-sequence");

gulp.task("sass", function () {
    return gulp.src("source/sass/styles.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest("build/theme/assets/css"))
        .pipe(minicss())
        .pipe(rename("styles.min.css"))
        .pipe(gulp.dest("build/theme/assets/css"))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task("pug", function buildHTML() {
   return gulp.src("source/pug/*.pug")
       .pipe(plumber())
       .pipe(pug())
       .pipe(gulp.dest("build/theme/view"))
});

// gulp.task("sprite", function() {
//   return gulp.src("source/img/icons/*.svg")
//     .pipe(svgstore({
//       inlineSvg: true
//     }))
//     .pipe(rename("sprite.svg"))
//     .pipe(gulp.dest("build/img/icons"));
// });

gulp.task("images", function() {
    return gulp.src("source/img/**/*.{png,jpg,ico,gif,svg}")
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.jpegtran({progressive: true}),
        ]))
        .pipe(gulp.dest("build/theme/assets/img"));
});

gulp.task("webp", function() {
    return gulp.src("build/img/**/*.{png,jpg}")
        .pipe(webp({quality: 90}))
        .pipe(gulp.dest("build/theme/assets/img/webp"));
});

gulp.task("watch", ["browserSync", "sass", "pug", "copy"], function () {
    gulp.watch("source/sass/**/*.scss", ["sass"]);
    gulp.watch("source/pug/**/*.pug", ["pug"]);
    gulp.watch("build/theme/view/*.html", browserSync.reload);
    gulp.watch("source/js/**/*.js", browserSync.reload);
});

gulp.task("copy", function() {
    return gulp.src([
        "source/fonts/**/*.{woff,woff2}",
    ], {
        base: "source"
    })
        .pipe(gulp.dest("build/theme/assets"));
});

gulp.task('js-libs', function () {
    return gulp.src("source/libs/*.js")
        .pipe(concat('libs.js'))
        .on('error', function (err) {
            process.stderr.write(err.message + '\n');
            this.emit('end');
        })
        .pipe(gulp.dest("build/theme/assets/libs"));
});

gulp.task('js-user', function () {
    return gulp.src("source/js/*.js")
        .pipe(concat('main.js'))
        .on('error', function (err) {
            process.stderr.write(err.message + '\n');
            this.emit('end');
        })
        .pipe(gulp.dest("build/theme/assets/js"));
});

gulp.task('json', function () {
    return gulp.src(paths.src + '/media/js/*.json')
        .pipe(gulp.dest(paths.static));
});

gulp.task("build", function(done) {
    run ("copy", "images", "webp", "pug", "js-libs", "js-user", "sass", done);
});

gulp.task("browserSync", function () {
    browserSync.init({
        server: {
            baseDir: "build"
        },
    })
});
