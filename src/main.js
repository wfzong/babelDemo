// var mod = require('./print.js')

// console.log(mod.counter)
// mod.incCounter()
// console.log(mod.counter)

// main.js
//import { counter, incCounter } from './lib';
import {counter, incCounter} from './lib';
console.log(counter); // 3
incCounter();
console.log(counter); // 4

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