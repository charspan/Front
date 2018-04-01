// 事件回调
/**
 * 
 * @param {*} something 
 */
function learn(something) {
	console.log(something)
}

function call(callback, something) {
	something += ' is cool'
	callback(something)
}

/**
 * 回调具名函数
 */
call(learn,'Nodejs')

/**
 * 回调匿名函数
 */
call(function(something) {
	console.log(something)
}, 'Java')