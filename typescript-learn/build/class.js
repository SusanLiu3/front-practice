"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
require("./abstractClass.ts");
/**
 *  public 默认
 *  private 私有变量，只能在当前类访问，派生类 以及其实例无法访问
 *  protected  只能在当前类和派生类中访问 ，实例无法访问
 * 存取器 get 和set
 */
var MakeUp = /** @class */ (function () {
    function MakeUp(name, price, deadline) {
        this.brand = '默认值'; // 只读属性 必须在声明或者构造函数中赋值
        this.name = name;
        this.price = price;
        this.deadline = deadline;
        this.brand = '品牌名字';
    }
    MakeUp.prototype.printPrice = function () {
        console.log('print start...');
        console.log(this.price);
    };
    return MakeUp;
}());
var Mask = /** @class */ (function (_super) {
    __extends(Mask, _super);
    function Mask(name, price, deadline, isAvailable) {
        var _this = 
        // 若派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数
        _super.call(this, name, price, deadline) || this;
        _this.isAvailable = isAvailable;
        console.log(_this.brand); //  品牌名字
        return _this;
        // this.brand = 'test'; // error
        // console.log(this.deadline); // error
    }
    Object.defineProperty(Mask.prototype, "FirstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            this._firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Mask.prototype.isAvail = function () {
        console.log(this.isAvailable);
    };
    return Mask;
}(MakeUp));
var Cream = /** @class */ (function (_super) {
    __extends(Cream, _super);
    function Cream(name, price, deadline) {
        return _super.call(this, name, price, deadline) || this;
    }
    Cream.prototype.printPrice = function () {
        console.log('print Cream price start ');
        console.log(this.price); // super.printPrice()
    };
    // 静态成员，属于类本身，而非实例
    Cream.type = '抗皱';
    return Cream;
}(MakeUp));
var mask = new Mask('mask', 10, '2020', true);
var cream = new Cream('cream', 300, '2022');
mask.printPrice(); // print start...  10
mask.isAvail();
// mask.isAvailable // error 受保护
cream.printPrice(); // print Cream price start  30
mask.FirstName = '美白面膜';
console.log(mask.FirstName);
console.log(Cream.type);
Cream.type = '提拉';
console.log(Cream.type);
// 把类当接口使用
var Phone = /** @class */ (function () {
    function Phone() {
    }
    return Phone;
}());
var laptop = {
    name: '三星',
    price: 7000,
    type: '电脑'
};
