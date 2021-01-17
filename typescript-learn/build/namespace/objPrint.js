"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printNamespace = void 0;
var printNamespace;
(function (printNamespace) {
    var objPrint = /** @class */ (function () {
        function objPrint() {
        }
        objPrint.prototype.log = function (str) {
            var res = '';
            for (var key in str) {
                if (Object.prototype.hasOwnProperty.call(str, key)) {
                    var element = str[key];
                    res += key + ":" + element + ";";
                }
            }
            console.log(res);
        };
        return objPrint;
    }());
    printNamespace.objPrint = objPrint;
})(printNamespace = exports.printNamespace || (exports.printNamespace = {}));
