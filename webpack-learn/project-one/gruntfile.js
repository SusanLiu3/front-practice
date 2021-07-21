module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),// 读取package.json 配置
    uglify: {
      // 这里是 uglify 任务配置
      build: {
        src: "src/<%=pkg.entry%>.js", // 模板字符串  可以是数组
        dest: 'dist/<%=pkg.entry%>.min.js', // 输出文件
      }
    },
    test:{
       // 这里是 test 任务配置
    }
  })
  grunt.loadNpmTasks('grunt-contrib-uglify');// 加载包含grunt-contrib-uglify 的任务插件
  grunt.registerTask('default', ['uglify']);// 默认被执行的任务列表
  grunt.registerTask('default', 'some task running', () => {
    grunt.log.write('test custome define task')
  })
}