import './abstractClass.ts';
/**
 *  public 默认
 *  private 私有变量，只能在当前类访问，派生类 以及其实例无法访问
 *  protected  只能在当前类和派生类中访问 ，实例无法访问
 * 存取器 get 和set
 */
class MakeUp {
  public name: string;
  price: number;
  private deadline: string;
  protected isAvailable: boolean;
  readonly brand: string = '默认值'; // 只读属性 必须在声明或者构造函数中赋值
  constructor(name: string, price: number, deadline: string) {
    this.name = name;
    this.price = price;
    this.deadline = deadline;
    this.brand = '品牌名字';
  }
  printPrice() {
    console.log('print start...');
    console.log(this.price);
  }
}

class Mask extends MakeUp {
  // 只带get  不带set的存取器会被默认推断为readonly
  private _firstName: string;
  get FirstName() {
    return this._firstName;
  }
  set FirstName(name: string) {
    this._firstName = name;
  }
  constructor(
    name: string,
    price: number,
    deadline: string,
    isAvailable: boolean
  ) {
    // 若派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数
    super(name, price, deadline); // 需要使用super 来调用
    this.isAvailable = isAvailable;
    console.log(this.brand); //  品牌名字
    // this.brand = 'test'; // error
    // console.log(this.deadline); // error
  }
  isAvail() {
    console.log(this.isAvailable);
  }
}

class Cream extends MakeUp {
  // 静态成员，属于类本身，而非实例
  static type: string = '抗皱';
  constructor(name: string, price: number, deadline: string) {
    super(name, price, deadline);
  }
  printPrice() {
    console.log('print Cream price start ');
    console.log(this.price); // super.printPrice()
  }
}

let mask = new Mask('mask', 10, '2020', true);
let cream: MakeUp = new Cream('cream', 300, '2022');
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
class Phone {
  name: string;
  price: number;
}
interface device extends Phone {
  type: string;
}

let laptop:device={
  name:'三星',
  price:7000,
  type:'电脑'
}
