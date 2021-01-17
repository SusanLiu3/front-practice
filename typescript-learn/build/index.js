"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./base.ts");
require("./interface.ts");
require("./class.ts");
require("./fun.ts");
require("./generic.ts");
require("./enum.ts");
require("./seniorType.ts");
var moduleClass = /** @class */ (function () {
    function moduleClass() {
    }
    moduleClass.prototype.print = function () {
        console.log('print module class');
    };
    return moduleClass;
}());
var moduleIns = new moduleClass();
moduleIns.print();
require("./namespace.ts");
