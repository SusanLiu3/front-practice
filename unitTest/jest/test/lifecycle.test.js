let obj = require('../src/lifecycle')
beforeEach(() => {
    obj.initMsg()
})
it('测试初始化', () => {
    expect(obj.msg).toBe('init')
})
obj.modifyMsg()
afterEach(() => {
    obj.resetMsg()
})
it('测试数据重置成初始化值', () => {
    expect(obj.msg).toBe('init')
})