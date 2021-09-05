(function(modules){
            function require(filename){
                var fn = modules[filename]
                var module={exports:{}}
                fn(module,module.exports,require)
                return module.exports
            }
            return require('./src/index.js')
        })({'./src/index.js':(function(module,exports,require){"use strict";

var _hello = require("./hello.js");

var _hello2 = _interopRequireDefault(_hello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.write((0, _hello2.default)());  }),'./hello.js':(function(module,exports,require){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sayHi = function sayHi() {
  return 'hello world';
};
exports.default = sayHi;  }),})