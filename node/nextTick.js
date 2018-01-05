/*
process.nextTick方法可以在当前"执行栈"的尾部----下一次Event Loop（主线程读取"任务队列"）之前----触发回调函数。也就是说，它指定的任务总是发生在所有异步任务之前。
*/
//test process.nextTick
function tnextick(){
	process.nextTick(function A() {
	  console.log(1);
	  process.nextTick(function B(){console.log(2);});
	});
	
	setTimeout(function timeout() {
	  console.log('TIMEOUT FIRED');
	}, 0)
}

//tnextick();
/*result
 1
 2
 TIMEOUT FIRED
*/

/*
setImmediate方法则是在当前"任务队列"的尾部添加事件，也就是说，它指定的任务总是在下一次Event Loop时执行，这与setTimeout(fn, 0)很像。
*/
function tinmediate(){
	setImmediate(function A() {
	  console.log(1);
	  setImmediate(function B(){console.log(2);});
	});
	
	setTimeout(function timeout() {
	  console.log('TIMEOUT FIRED');
	}, 0);
}

tinmediate();
/*Node.js文档中称，setImmediate指定的回调函数，总是排在setTimeout前面
1
TIMEOUT FIRED
2
*/

/*注意，上述执行结果为单独执行其中一个函数得出的结果，同时执行的结果为：
1
2
TIMEOUT FIRED
TIMEOUT FIRED
1
2
*/

