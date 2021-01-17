/**
 * 抽象类
 * abstract 定义 作为基类使用,不能进行实例化
 * 可以包含成员的实现
 */
abstract class Department {
  name: string;
  constructor(tempName: string) {}
  printName() {
    console.log('name:', this.name);
  }
  abstract modifyName(name: string): void; // 必须在派生类中实现
}

class buyDepartment extends Department {
  constructor(tempName: string) {
    super(tempName); // 必须使用super()
    this.name=tempName
  }
  modifyName(newName) {
    this.name = newName;
  }
}

let buy: Department;
buy = new buyDepartment('技术部');
buy.printName();
buy.modifyName('产品部门');
buy.printName();



