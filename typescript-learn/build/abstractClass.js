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
/**
 * 抽象类
 * abstract 定义 作为基类使用,不能进行实例化
 * 可以包含成员的实现
 */
var Department = /** @class */ (function () {
    function Department(tempName) {
    }
    Department.prototype.printName = function () {
        console.log('name:', this.name);
    };
    return Department;
}());
var buyDepartment = /** @class */ (function (_super) {
    __extends(buyDepartment, _super);
    function buyDepartment(tempName) {
        var _this = _super.call(this, tempName) || this;
        _this.name = tempName;
        return _this;
    }
    buyDepartment.prototype.modifyName = function (newName) {
        this.name = newName;
    };
    return buyDepartment;
}(Department));
var buy;
buy = new buyDepartment('技术部');
buy.printName();
buy.modifyName('产品部门');
buy.printName();
