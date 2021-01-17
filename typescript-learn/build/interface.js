var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var animalColor;
(function (animalColor) {
    animalColor[animalColor["white"] = 0] = "white";
    animalColor[animalColor["yellow"] = 1] = "yellow";
    animalColor[animalColor["red"] = 2] = "red";
    animalColor[animalColor["blue"] = 3] = "blue";
    animalColor[animalColor["pink"] = 4] = "pink";
    animalColor[animalColor["goldYellow"] = 5] = "goldYellow";
})(animalColor || (animalColor = {}));
function print(animal) {
    console.log('interface======');
    console.log(animal.name, animal.fly ? '会飞' : '不会飞', "\u5403" + animal.eat.join(','), animal.color ? "\u989C\u8272:" + animalColor[animal.color] : '');
}
print({
    name: '鸟',
    fly: true,
    eat: ['肉', '馒头'],
    type: 'animal',
});
print({
    name: '狗',
    fly: false,
    eat: ['骨头', '馒头'],
    color: animalColor.goldYellow,
    type: 'animal',
});
var cat = {
    name: 'cat',
    fly: false,
    eat: ['鱼'],
    type: 'animal',
    types: 'test',
};
var sayHello;
/**
 * 如果这个函数返回值是非string 类型，则会编译不通过
 */
sayHello = function (param1, param2) {
    console.log('函数类型', param1, param2);
    return 'interface define fun type';
};
sayHello('lss', 18);
var arr;
arr = {
    name: 99,
    1: 'test',
};
console.log(arr[1]);
var Fruit = /** @class */ (function () {
    function Fruit(name) {
        this.name = name;
    }
    return Fruit;
}());
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(name) {
        return _super.call(this, name) || this;
    }
    return Apple;
}(Fruit));
var f1 = new Fruit('lss');
var f2 = new Fruit('ldd');
var a1 = new Fruit('a1');
var a2 = new Fruit('a2');
var testList;
testList = {
    '1': f1,
};
console.log(testList[1]);
var testArr = [1, 2, 3];
var Clock = /** @class */ (function () {
    function Clock() {
    }
    Clock.prototype.setTime = function (time) {
        this.time = time;
    };
    return Clock;
}());
var clock = new Clock();
clock.setTime('11-11');
console.log(clock.time);
var cup = {};
cup.color = 'red';
cup.price = 10;
