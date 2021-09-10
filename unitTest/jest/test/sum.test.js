let sum = require('../src/sum')
sum()

test('1 + 2 = 3', function () {
    expect(sum(1, 2)).toBe(3)
})

test('字符串相加', function () {
    expect(sum('a', 'b')).toBe('ab')
})

test('临界验证', function () {
    expect(sum()).not.toBeTruthy()
})

test('两数相加比较',function () {
    expect(sum(1,2)).toBeGreaterThan(2)
})

test('字符串操作', function () {
    expect(sum('abc', 'd')).toContain('d')
})