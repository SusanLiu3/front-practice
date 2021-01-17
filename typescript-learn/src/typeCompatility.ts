/**
 * 类型兼容: 类型兼容是基于结构子类型的
 * 结构类型：使用其成员来描述类型的方式
 */

interface named {
  name: string;
}

class nameClass {
  name: string;
}
let p: named;
p = new nameClass(); // ok 
