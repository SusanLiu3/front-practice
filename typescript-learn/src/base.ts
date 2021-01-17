let isBoolean: boolean = false;
function isTrue(
  flag: Boolean,
  name: String,
  hobby: String[],
  age: Number,
  luckNumber: Array<Number>,
  color: Color
) {
  let str = `${name};年龄:${age};爱好:${hobby.join(
    '、'
  )};幸运数字:${luckNumber.join(',')},颜色:${color}`;
  document.write(`${str},${flag ? '是' : '否'}`);
}
// string 类型
let str: string = 'lss';
// 数字
let age: number = 18;
// 数组 第一种定义方式
let hobby: string[] = ['sleep', 'read'];
// 数组第二种定义方式
let luckNumber: Array<Number> = [2, 5];
// 元组
let test: [string, number];
test = ['lss', 18];
// 枚举
enum Color {
  red = 2, // 默认从0开始 ，往后递加+1 ,
  yellow,
  blue = 7, // 也可以 手动赋值
}
let colorYellow: Color = Color.yellow;
let blue: Color = Color.blue;
console.log(blue); // 7
// 枚举 ：可以根据枚举的值找到名字
let colorName: string = Color[3];
console.log(colorName); // yellow
// any 类型  在编译时 不知变量类型
let list: Array<any> = [1, 2, 'test'];
list[0] = true;
console.log(list);
// void 类型，空类型
// undefined null  所有类型的子类型
let a: undefined = undefined;
let num: number = 3;
num = a; // ok
// a = num; // 不ok

// object 类型
function testVoid(obj: Object): void {
  console.log('无返回值');
}
testVoid({});
testVoid(null);
// 类型断言 <> / as  好比类型转换，但是不做类型检测和解构
let strName: string = 'hello world';
let len: number = (<string>strName).length;
len = (strName as string).length;

isTrue(isBoolean, str, hobby, age, luckNumber, colorYellow);
