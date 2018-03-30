'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var foo = exports.foo = 'bar';
setTimeout(function () {
  return exports.foo = foo = 'baz';
}, 500);
//# sourceMappingURL=m1.js.map