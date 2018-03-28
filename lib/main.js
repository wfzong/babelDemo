'use strict';

var _lib = require('./lib');

console.log(_lib.counter); // 3
// var mod = require('./print.js')

// console.log(mod.counter)
// mod.incCounter()
// console.log(mod.counter)

// main.js
//import { counter, incCounter } from './lib';
(0, _lib.incCounter)();
console.log(_lib.counter); // 4

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
//# sourceMappingURL=main.js.map