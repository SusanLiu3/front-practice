/**
 * 枚举
 * 从 0 开始递增，当然也可以自定义值
 */
// 简单的示例
enum colors {
  red,
  white = 3,
  yellow,
}
console.log(colors.red, colors.white, colors.yellow); // 0  3 4
/**
 * 枚举做枚举类型使用
 */
interface Square {
  kind: shapeEnum.Square;
  width: number;
}
interface Circle {
  kind: shapeEnum.Circle;
  radius: number;
}
enum shapeEnum {
  Square,
  Circle,
}

let testEnum: Circle = {
  kind: shapeEnum.Circle, // shapeEnum.Square error
  radius: 4,
};
console.log(testEnum.kind);
// 运行时的枚举
enum E {
  X,
  Y,
  Z,
}

function TestEnum(obj: { X: number }) {
  return obj.X;
}
console.log(TestEnum(E)); // 0

// 反向映射
// 从枚举值到枚举的映射

let x = E.X; // 0
let val = E[x]; // X

// enum Enum {
//   A = 1,
//   B,
//   C = 2,
// }

// console.log(Enum.A, Enum.B, Enum.C); // 1 2 2
// 外部枚举 正常情况下，非外部枚举没用初始化的成员会被当作常数；而外部枚举会被当作需要经过计算
declare enum Enum {
  A = 1,
  B,
  C = 2,
}

// 常量枚举 const 不允许包括计算，在 编译时会被删除

const enum direct {
  left,
  right,
  top,
  bottom,
}

let directList = [direct.top, direct.bottom, direct.left, direct.right]; //  var directList = [2 /* top */, 3 /* bottom */, 0 /* left */, 1 /* right */];
let left=directList[2]
// console.log(direct[left]); // error
