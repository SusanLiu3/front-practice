/**
 * 命名空间
 */

namespace printNamespace {
  export interface printTet<T> {
    log(s: T);
  }

export class strPrint<T> implements printTet<T> {
  log(str: T) {
    console.log(str);
  }
}

export class listPrint implements printTet<Array<string | number>> {
  log(str: Array<string | number>) {
    console.log(str.join('-'));
  }
}
export class objPrint implements printTet<Object> {
  log(str: Object) {
    let res = '';
    for (const key in str) {
      if (Object.prototype.hasOwnProperty.call(str, key)) {
        const element = str[key];
        res += `${key}:${element};`;
      }
    }
    console.log(res);
  }
}
}
// /// <reference path="./namespace/printNamespace.ts" />
// /// <reference path="./namespace/strPrint.ts" />
// /// <reference path="./namespace/listPrint.ts" />
// /// <reference path="./namespace/objPrint.ts" />

// 有问题 待定
// import * as strPrint from './spaces/printString'
// import * as listPrint from './spaces/printArray'
// import * as objPrint from './spaces/printObject'
// import * as allPrint from './spaces/printNamespace'

let data = ['hello str', [1, 2, 3], { name: 'lss', age: 18 }];
let printList: { [s: string]:printNamespace.printTet<any> } = {};
printList['0'] = new printNamespace.strPrint();
printList['1'] = new printNamespace.listPrint();
printList['2'] = new printNamespace.objPrint();

for (let index = 0; index < data.length; index++) {
  const ele = data[index];
  printList[index].log(ele);
}
