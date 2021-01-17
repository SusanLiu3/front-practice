var isBoolean = false;
function isTrue(flag, name, hobby, age, luckNumber, color) {
    var str = name + ";\u5E74\u9F84:" + age + ";\u7231\u597D:" + hobby.join('、') + ";\u5E78\u8FD0\u6570\u5B57:" + luckNumber.join(',') + ",\u989C\u8272:" + color;
    document.write(str + "," + (flag ? '是' : '否'));
}
// string 类型
var str = 'lss';
// 数字
var age = 18;
// 数组 第一种定义方式
var hobby = ['sleep', 'read'];
// 数组第二种定义方式
var luckNumber = [2, 5];
// 元组
var test;
test = ['lss', 18];
// 枚举
var Color;
(function (Color) {
    Color[Color["red"] = 2] = "red";
    Color[Color["yellow"] = 3] = "yellow";
    Color[Color["blue"] = 7] = "blue";
})(Color || (Color = {}));
var colorYellow = Color.yellow;
var blue = Color.blue;
console.log(blue); // 7
// 枚举 ：可以根据枚举的值找到名字
var colorName = Color[3];
console.log(colorName); // yellow
// any 类型  在编译时 不知变量类型
var list = [1, 2, 'test'];
list[0] = true;
console.log(list);
// void 类型，空类型
// undefined null  所有类型的子类型
var a = undefined;
var num = 3;
num = a; // ok
// a = num; // 不ok
// object 类型
function testVoid(obj) {
    console.log('无返回值');
}
testVoid({});
testVoid(null);
// 类型断言 <> / as  好比类型转换，但是不做类型检测和解构
var strName = 'hello world';
var len = strName.length;
len = strName.length;
isTrue(isBoolean, str, hobby, age, luckNumber, colorYellow);
