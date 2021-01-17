"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printNamespace = void 0;
var printNamespace;
(function (printNamespace) {
    var strPrint = /** @class */ (function () {
        function strPrint() {
        }
        strPrint.prototype.log = function (str) {
            console.log(str);
        };
        return strPrint;
    }());
    printNamespace.strPrint = strPrint;
})(printNamespace = exports.printNamespace || (exports.printNamespace = {}));
