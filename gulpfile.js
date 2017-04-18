/**
 * gulp 构建文件
 */

// 引入gulp
var gulp = require('gulp');
// markdown 转 html
var markdown = require('gulp-markdown');
// markdown 转 pdf
var markdownpdf = require('gulp-markdown-pdf');

gulp.task('html', function () {
    return gulp.src('我的简历.md')
        .pipe(markdown())
        .pipe(gulp.dest('dist'));
});

gulp.task('pdf', function () {
    return gulp.src('我的简历.md')
        .pipe(markdownpdf())
        .pipe(gulp.dest('dist'));
});

// 默认任务
gulp.task('default', function(){
    gulp.run('html', 'pdf');
});
