"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = cricle;
function cricle() {
	return 2 * 2;
}
'use strict';

var _lib = require('lib.js');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_lib2.default);

// function foo() {
// 	this.name = 'this foo fun'
// 	return 'sss'
// }
// foo.prototype.callMe = function() {
// 	setTimeout(() => {
// 		console.log(this.name)
// 	}, 300)
// }
// const s = new foo()
// s.callMe()
// var mod = require('./print.js')

// console.log(mod.counter)
// mod.incCounter()
// console.log(mod.counter)

// main.js
//import { counter, incCounter } from './lib';
"use strict";

var counter = 3;
function incCounter() {
	counter++;
}
module.exports = {
	counter: counter,
	incCounter: incCounter
};

//# sourceMappingURL=main.js.map