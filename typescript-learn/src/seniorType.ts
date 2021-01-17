/**
 * 高级类型
 */

// 1. 交叉类型 合并对象
function extend<T, U>(first: T, sec: U): T & U {
  let res = <T & U>{};
  for (const key in first) {
    (<any>res)[key] = first[key];
  }
  for (const key in sec) {
    if (!res.hasOwnProperty(key)) {
      (<any>res)[key] = sec[key];
    }
  }
  return res;
}

class Person {
  name: string;
  constructor(tempName: string) {
    this.name = tempName;
  }
}
interface Log {
  log(): void;
}
class ConsoleLogger implements Log {
  log() {
    console.log('log');
  }
}

let res = extend(new Person('lss'), new ConsoleLogger());
res.log();
console.log(res.name);

// 2.联合类型 一个变量的值可以是几种类型之一  |

interface Bird {
  fly();
  layEggs();
}
interface Fish {
  layEggs();
  swim();
}

let myFish: Fish = {
  layEggs() {
    console.log('eggs laid');
  },
  swim() {
    console.log('swim');
  },
};

function getPet(param: Bird | Fish): Bird | Fish {
  return param;
}

let pet = getPet(myFish);
pet.layEggs(); // ok
// pet.swim() // error 无法确定传入的是bird 还是 fish ;bird是没用swim 方法
// 如果想要调用swim,使用类型断言
if ((<Bird>pet).fly) {
  (<Bird>pet).fly();
} else {
  (pet as Fish).swim();
}

// 或者使用类型保护 需要判断一个变量值是string 或者还是number
let testA: string = 'hello';
if (typeof testA === 'number') {
  // ....
}

//
/**
 * 类型别名  编译器会给类型起一个别名
 * 类型别名不可以被extends  和 implement
 */

type name = string;
function testTypeAlias(params: name): name {
  return params;
}
console.log(testTypeAlias('type alias'));
