const { src, dest } = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const rename = require('gulp-rename')
// // 处理文件 gulp.src() 读 ,gulp.dest() 写
// exports.default = function (params) {
//   // gulp.src 读取文件--产生流 pipe 转换流/可写流
//   // gulp.dest() 接受输出目录作为参数，当接受到通过 pipeline 传输的文件时
//   // 会将文件内容及文件进行写入到指定的目录中
//   src('src/*.js')
//     .pipe(babel())
//     .pipe(dest('newsrc'))
//     .pipe(uglify())
//     .pipe(rename({ extname: '.min.js' }))
//     .pipe(dest('newsrc'))
// }
const gulp = require('gulp')
// gulp 创建任务
gulp.task('read', () => {
  const stream = src('src/*.js').pipe(dest('newsrc'))
  return stream
})
// 在 read 任务执行完成后再执行
gulp.task('write', () => {
  src('src/*.js')
  .pipe(uglify())
  .pipe(rename({extname:'.min.js'}))
  .pipe(dest('newsrc'))
})

gulp.task('default', gulp.series('read', 'write', function () {
  console.log('执行完成')
}));


