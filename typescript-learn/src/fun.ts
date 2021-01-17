/**
 * 函数：参数 和返回值类型
 *可选参数: JavaScript函数中  每个参数都是可选的，可传可不传 不传就是undefined
 *          ts 中 可以使用?来表示参数可选 可选参数必须跟在必选参数后面
 * 默认参数 name:string='lss' 默认参数和可选参数不可以同时作用
 * 剩余参数: ...  被当作个数不定的可选参数，可以有一个或者多个或者0个
 *
 */

function add(num1: number, num2: number): number {
  return num1 + num2;
}

let myAdd = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(myAdd(1, 2));
// 可选
function combineName(name1: string, name2?: string): string {
  if (name2) {
    return name2 + name1;
  }
  return name1;
}
// 默认
function defaultName(name1: string, name2 = 'li'): string {
  return name2 + name1;
}
// 剩余
function sum(num1: number, ...all: Array<number>) {
  let sum = all.reduce((prev, next) => {
    return prev + next;
  }, num1);
  console.log(sum);
}
console.log(combineName('ss', 'liu'));
console.log(combineName('ss'));

console.log(defaultName('ss', 'liu'));
console.log(defaultName('ss'));

sum(1, 2, 3, 4, 5);
