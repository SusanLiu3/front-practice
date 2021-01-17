/**
 * 泛型：类型变量，传入的参数和返回的参数类型一样
 */

function identify<T>(params: T): T {
  return params;
}

console.log(identify('泛型'));

// 字面量的形式
let myIdentify: { <T>(param: T): T } = identify;

let testIdentify: <T>(param: T) => T = identify;

console.log(myIdentify('my 泛型'));
console.log(testIdentify('test 泛型'));

// 泛型接口
interface genericInterface {
  <T>(param: T): T;
}

let interfaceGeneric: genericInterface = identify;
console.log(interfaceGeneric('泛型接口'));

// 如果想把泛型类型当作整个接口的类型，可以这样写

interface testGenericInterface<T> {
  (param: T): T;
}

let interfaceTest: testGenericInterface<string[]> = identify;
console.log(interfaceTest(['apple', 'banana']).join('--'));

// 泛型类

class firstGenericClass<T> {
  name: string;
  num: T;
  add: () => T;
}

let className: firstGenericClass<Array<number>> = new firstGenericClass();

className.name = 'lss';
className.num = [1, 2, 3];
className.add = function () {
  return this.num.reduce((prev, next) => {
    return prev + next;
  });
};
console.log(className.add());

//  泛型约束 定义一个接口 进行约束

interface num {
  length: number;
}

function genericStrict<T extends num>(params: T) {
  return params.length;
}
console.log(genericStrict('hello'));

class BeerKeeper {
  hasMask: boolean = true;
}
class ZooKeeper {
  nameTag: string = 'test';
}
class GenericAnimal {
  legs: number;
}
class Beer extends GenericAnimal {
  keeper: BeerKeeper;
}

class Lion extends GenericAnimal {
  keeper: ZooKeeper;
}

function createInstance<T extends GenericAnimal>(c: new () => T): T {
  return new c();
}
let beerIns = createInstance(Beer);
beerIns.keeper = new BeerKeeper();
console.log(beerIns.keeper.hasMask);

let lionIns = createInstance(Lion);
lionIns.keeper = new ZooKeeper();
console.log(lionIns.keeper.nameTag);
