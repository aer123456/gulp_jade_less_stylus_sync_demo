// 导入需要的模块
var gulp = require('gulp'),
    less = require('gulp-less'),
    stylus = require('gulp-stylus'),
    jade = require('gulp-jade'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create(),
    minifyCss = require('gulp-minify-css');
    concat = require('gulp-concat'),


// 编译less，其中plumber是防止出错崩溃的插件
gulp.task('less', function() {
    gulp.src('src/less/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest('public/css'));
});

// 编译stylus，其中plumber是防止出错崩溃的插件
gulp.task('stylus', function() {
    gulp.src('src/styles/*.styl')
        .pipe(plumber())
        .pipe(stylus())
        .pipe(gulp.dest('public/css'));
});

// 编译jade
gulp.task('jade', function() {
    gulp.src('src/jade/*.jade')
        .pipe(plumber())
        .pipe(jade())
        .pipe(gulp.dest('public'));
});

// 编译js
gulp.task('js', function() {
    gulp.src('src/js/*.js')
        .pipe(gulp.dest('public/js'));
});

//复制不需要编译的lib文件夹
gulp.task('lib',  function() {
    gulp.src('src/lib/*')
        .pipe(gulp.dest('public/lib/'));
});

//复制不需要编译的img文件夹
gulp.task('img',  function() {
    gulp.src('src/img/**/*')
        .pipe(gulp.dest('public/img/'));
});

// 将所有css文件连接为一个文件并压缩，存到public/css
gulp.task('concatCss', function() {
    gulp.src(['dist/css/*.css'])
        // .pipe(concat('main.css'))
        // .pipe(minifyCss())
        .pipe(gulp.dest('public/css'));
});


// 将所有js文件连接为一个文件并压缩，存到public/js
gulp.task('concatJs', function() {
    gulp.src(['dist/js/*.js'])
        // .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/js'));
});




// 监听任务
gulp.task('watch', function() {

    // 建立浏览器自动刷新服务器
    browserSync.init({
        server: {
            baseDir: "public"
        }
    });


    // 预处理
    gulp.watch('src/jade/**', ['jade']);
    gulp.watch('src/js/**', ['js']);
    gulp.watch('src/less/**', ['less']);
    gulp.watch('src/styles/**', ['stylus']);

    // 拷贝lib和图片
    gulp.watch('src/lib/**', ['lib']);
    gulp.watch('src/img/**', ['img']);


    // 合并压缩
    // gulp.watch('dist/css/*.css', ['concatCss']);
    // gulp.watch('dist/js/*.js', ['concatJs']);


    // 自动刷新
    gulp.watch('public/**', function() {
        browserSync.reload();
    });
});



// 任务
gulp.task('build', ['less', 'stylus', 'img', 'lib', 'jade', 'js', 'concatJs', 'concatCss']);
gulp.task('default', ['watch']);
