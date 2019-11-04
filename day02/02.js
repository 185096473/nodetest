// 模块  module
/**
 * common.js
 * 作用域：模块作用域
 * exports   module.exports
 * 抛出、暴露
 * exports和module.exports的区别？
 * 1.两者默认都是空对象
 * 2.exports是指向module.exports的引用
 * 
 *Es6
    export  export default
 * 
 * 
 */
// // setTimeout 属于宏任务还是微任务？
// // promise属于宏任务还是微任务？
// for(var i=0;i<5;i++){
// 	setTimeout(() => {
// 		console.log(i)
// 	}, 0);
// }
var foo=require("./static/foo")
console.log(foo)
// console.log(module)