"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printNamespace = void 0;
var printNamespace;
(function (printNamespace) {
    var listPrint = /** @class */ (function () {
        function listPrint() {
        }
        listPrint.prototype.log = function (str) {
            console.log(str.join('-'));
        };
        return listPrint;
    }());
    printNamespace.listPrint = listPrint;
})(printNamespace = exports.printNamespace || (exports.printNamespace = {}));
