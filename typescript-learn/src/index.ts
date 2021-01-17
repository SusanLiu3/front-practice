import './base.ts';
import './interface.ts';

import './class.ts';

import './fun.ts';

import './generic.ts';

import './enum.ts';

import './seniorType.ts';

import { moduleInterface } from './module';

class moduleClass implements moduleInterface {
  name: string;
  print() {
    console.log('print module class');
  }
}

let moduleIns = new moduleClass();

moduleIns.print();

import './namespace.ts';
