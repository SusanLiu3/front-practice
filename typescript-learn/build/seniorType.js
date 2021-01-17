/**
 * 高级类型
 */
// 1. 交叉类型 合并对象
function extend(first, sec) {
    var res = {};
    for (var key in first) {
        res[key] = first[key];
    }
    for (var key in sec) {
        if (!res.hasOwnProperty(key)) {
            res[key] = sec[key];
        }
    }
    return res;
}
var Person = /** @class */ (function () {
    function Person(tempName) {
        this.name = tempName;
    }
    return Person;
}());
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        console.log('log');
    };
    return ConsoleLogger;
}());
var res = extend(new Person('lss'), new ConsoleLogger());
res.log();
console.log(res.name);
var myFish = {
    layEggs: function () {
        console.log('eggs laid');
    },
    swim: function () {
        console.log('swim');
    },
};
function getPet(param) {
    return param;
}
var pet = getPet(myFish);
pet.layEggs(); // ok
// pet.swim() // error 无法确定传入的是bird 还是 fish ;bird是没用swim 方法
// 如果想要调用swim,使用类型断言
if (pet.fly) {
    pet.fly();
}
else {
    pet.swim();
}
// 或者使用类型保护 需要判断一个变量值是string 或者还是number
var testA = 'hello';
if (typeof testA === 'number') {
    // ....
}
function testTypeAlias(params) {
    return params;
}
console.log(testTypeAlias('type alias'));
