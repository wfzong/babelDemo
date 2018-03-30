// node --experimental-modules main.mjs
import x from './lib'
import y from './lib?ad=1'
x.add()
y.show()


/*
ES6 模块之中，顶层的this指向undefined；CommonJS 模块的顶层this指向当前模块

以下这些顶层变量在 ES6 模块之中都是不存在的。

    arguments
    require
    module
    exports
    __filename
    __dirname

*/
// 不推荐这样做，该 ES6 模块就不能直接用于浏览器环境了
import ex from './expose'
const {__dirname} = ex
console.log(__dirname)