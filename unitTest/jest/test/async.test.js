
let { myPromise, myCallback, myAwait } = require('../src/async')
// two methods test async 
test('测试promise', () => {
    expect.assertions(1)
    // 要作为返回值,否则测试用例会在异步执行完成结束
    return myPromise().then(res => {
        expect(res).toBe('hello jest async -- promise')
    })
})
// promise-- 可以使用resolves来测试Promise
it('测试Promise Resolve', () => {
    return expect(myPromise()).resolves.toBe('hello jest async -- promise')
})
// 回调-- 需要调用done方法来提示回调执行完成
it('测试回调', (done) => {
    myCallback((res) => {
        expect(res).toBe('I am a cb')
        done();// 标识回调执行完成
    })
})
// 异步-- 只需要在外面的方法标志async
it('测试async', async () => {
    let res = await myAwait()
    expect(res).toBe('I am a async/await')
})
