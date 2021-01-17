// /// <reference path="printNamespace.ts"/>
import * as spaces from './printNamespace' 
export namespace printNamespace {
  export class objPrint implements spaces.printNamespace.printTet<Object> {
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
