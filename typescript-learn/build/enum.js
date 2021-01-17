/**
 * 枚举
 * 从 0 开始递增，当然也可以自定义值
 */
// 简单的示例
var colors;
(function (colors) {
    colors[colors["red"] = 0] = "red";
    colors[colors["white"] = 3] = "white";
    colors[colors["yellow"] = 4] = "yellow";
})(colors || (colors = {}));
console.log(colors.red, colors.white, colors.yellow); // 0  3 4
var shapeEnum;
(function (shapeEnum) {
    shapeEnum[shapeEnum["Square"] = 0] = "Square";
    shapeEnum[shapeEnum["Circle"] = 1] = "Circle";
})(shapeEnum || (shapeEnum = {}));
var testEnum = {
    kind: shapeEnum.Circle,
    radius: 4,
};
console.log(testEnum.kind);
// 运行时的枚举
var E;
(function (E) {
    E[E["X"] = 0] = "X";
    E[E["Y"] = 1] = "Y";
    E[E["Z"] = 2] = "Z";
})(E || (E = {}));
function TestEnum(obj) {
    return obj.X;
}
console.log(TestEnum(E)); // 0
// 反向映射
// 从枚举值到枚举的映射
var x = E.X; // 0
var val = E[x]; // X
var directList = [2 /* top */, 3 /* bottom */, 0 /* left */, 1 /* right */]; //  var directList = [2 /* top */, 3 /* bottom */, 0 /* left */, 1 /* right */];
var left = directList[2];
// console.log(direct[left]); // error
