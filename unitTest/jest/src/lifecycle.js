// 初始化和重置方法test
module.exports = {
    msg: '',// 初始化值
    initMsg: function () {
        this.msg = 'init'
    },
    modifyMsg: function () {
        this.msg = 'processing'
    },
    resetMsg: function () {
        this.msg = 'init'
    }
}