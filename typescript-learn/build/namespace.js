"use strict";
/**
 * 命名空间
 */
Object.defineProperty(exports, "__esModule", { value: true });
var strPrint = require("./namespace/strPrint");
var listPrint = require("./namespace/listPrint");
var objPrint = require("./namespace/objPrint");
var data = ['hello str', [1, 2, 3], { name: 'lss', age: 18 }];
var printList = {};
printList['0'] = new strPrint.printNamespace.strPrint();
printList['1'] = new listPrint.printNamespace.listPrint();
printList['2'] = new objPrint.printNamespace.objPrint();
for (var index = 0; index < data.length; index++) {
    var ele = data[index];
    printList[index].log(ele);
}
