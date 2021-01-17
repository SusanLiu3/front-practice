// /// <reference path="printNamespace.ts"/>
import * as spaces from './printNamespace'

export namespace printNamespace {
  export class strPrint<T> implements spaces.printNamespace.printTet<T> {
    log(str: T) {
      console.log(str);
    }
  }
}
