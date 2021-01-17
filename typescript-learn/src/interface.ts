// 约束了对象包含的属性及类型，只要传入的对象符合就ok
/**
 * 可选属性?
 * 只读属性 readonly
 * 索引签名: 非 name fly eat color type 的属性名
 */
interface animal {
  name: string;
  fly: boolean;
  eat: Array<any>;
  color?: animalColor;
  readonly type: string;
  [propName: string]: any;
}
enum animalColor {
  white,
  yellow,
  red,
  blue,
  pink,
  goldYellow,
}

function print(animal: animal) {
  console.log('interface======');
  console.log(
    animal.name,
    animal.fly ? '会飞' : '不会飞',
    `吃${animal.eat.join(',')}`,
    animal.color ? `颜色:${animalColor[animal.color]}` : ''
  );
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

let cat: animal = {
  name: 'cat',
  fly: false,
  eat: ['鱼'],
  type: 'animal',
  types: 'test',
};
// cat.type = 'vegetable'; // error

// 接口定义函数类型
/**
 * 接口定义了一个需要传入两个参数并且返回值是string的函数
 * 函数的参数会逐个进行检查

 */
interface sayHi {
  (name: string, age: number): string;
}

let sayHello: sayHi;
/**
 * 如果这个函数返回值是非string 类型，则会编译不通过
 */
sayHello = function (param1: string, param2: number) {
  console.log('函数类型', param1, param2);
  return 'interface define fun type';
};
sayHello('lss', 18);

// 可索引类型
/**
 * 索引签名:ts支持 字符串和数字 两种索引签名；这两种索引签名可以同时使用，
 *
 * 因为js会将number 转换成string 再去索引对象
 * stringArray:具有索引签名
 * 定义了一个按照 数字number去获取值的索引接口
 */
interface stringArray {
  [index: number]: string;
  name: number;
}
let arr: stringArray;
arr = {
  name: 99,
  1: 'test',
};
console.log(arr[1]);

class Fruit {
  name: string;
  constructor(name) {
    this.name = name;
  }
}
class Apple extends Fruit {
  constructor(name) {
    super(name);
  }
}
interface fruitInterface {
  [index: number]: Fruit;
  [str: string]: Apple;
}

let f1 = new Fruit('lss');
let f2 = new Fruit('ldd');

let a1 = new Fruit('a1');
let a2 = new Fruit('a2');

let testList: fruitInterface;
testList = {
  '1': f1,
};
console.log(testList[1]);

// interface testInterface {
//   [index: number]: number; // 不ok  同时使用的时候，根据数字索引返回的值 必须是 字符串索引返回的值的子类型
//   [str:string]:string
// }
// 将索引签名设置为可读，为了防止给索引赋值
interface testInterface {
  readonly [index: number]: number;
}

let testArr: testInterface = [1, 2, 3];
// testArr[2] = 4;// error

// 类类型  可以实现接口
interface ClockInterface {
  time: string;
  setTime(time: string): void;
}
class Clock implements ClockInterface {
  time: string;
  setTime(time: string) {
    this.time = time;
  }
}

let clock: ClockInterface = new Clock();
clock.setTime('11-11');
console.log(clock.time);

// 接口继承,一个接口可以继承多个接

interface Cup {
  color: string;
}

interface myCup extends Cup {
  price: number;
}
let cup = <myCup>{};
cup.color = 'red';
cup.price = 10;
