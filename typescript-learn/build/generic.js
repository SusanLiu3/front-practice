/**
 * 泛型：类型变量，传入的参数和返回的参数类型一样
 */
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
function identify(params) {
    return params;
}
console.log(identify('泛型'));
// 字面量的形式
var myIdentify = identify;
var testIdentify = identify;
console.log(myIdentify('my 泛型'));
console.log(testIdentify('test 泛型'));
var interfaceGeneric = identify;
console.log(interfaceGeneric('泛型接口'));
var interfaceTest = identify;
console.log(interfaceTest(['apple', 'banana']).join('--'));
// 泛型类
var firstGenericClass = /** @class */ (function () {
    function firstGenericClass() {
    }
    return firstGenericClass;
}());
var className = new firstGenericClass();
className.name = 'lss';
className.num = [1, 2, 3];
className.add = function () {
    return this.num.reduce(function (prev, next) {
        return prev + next;
    });
};
console.log(className.add());
function genericStrict(params) {
    return params.length;
}
console.log(genericStrict('hello'));
var BeerKeeper = /** @class */ (function () {
    function BeerKeeper() {
        this.hasMask = true;
    }
    return BeerKeeper;
}());
var ZooKeeper = /** @class */ (function () {
    function ZooKeeper() {
        this.nameTag = 'test';
    }
    return ZooKeeper;
}());
var GenericAnimal = /** @class */ (function () {
    function GenericAnimal() {
    }
    return GenericAnimal;
}());
var Beer = /** @class */ (function (_super) {
    __extends(Beer, _super);
    function Beer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Beer;
}(GenericAnimal));
var Lion = /** @class */ (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(GenericAnimal));
function createInstance(c) {
    return new c();
}
var beerIns = createInstance(Beer);
beerIns.keeper = new BeerKeeper();
console.log(beerIns.keeper.hasMask);
var lionIns = createInstance(Lion);
lionIns.keeper = new ZooKeeper();
console.log(lionIns.keeper.nameTag);
