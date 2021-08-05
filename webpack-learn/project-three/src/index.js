export function largeNumber(a, b) {
    let len1 = a.length - 1
    let len2 = b.length - 1
    let sum = ''
    let flag = 0; // 是否进位
    while (len1 >= 0 || len2 >= 0) {
        let num1 = 0,
            num2 = 0;
        if (len1 >= 0) {
            num1 = a[len1]-0
        }
        if (len2 >= 0) {
            num2 = b[len2]-0
        }
        let res = num1 + num2 + flag
        if (res >= 10) {
            res -= 10
            flag = 1;
        } else {
            flag = 0
        }
        sum =  res + sum
        len1--
        len2--
    }
    if (flag > 0) {
        sum = flag + sum
    }
    return sum
}
// console.log(largeNumber('9', '11'))
// console.log(largeNumber('99', '11'))