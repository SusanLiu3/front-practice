// /// <reference path="printNamespace.ts"/>
import * as spaces from './printNamespace' 

export namespace printNamespace {
  export class listPrint implements spaces.printNamespace.printTet<Array<string | number>> {
    log(str: Array<string | number>) {
      console.log(str.join('-'));
    }
  }
}
