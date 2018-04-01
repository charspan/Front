// 事件回调
/**
 * 
 * @param {string} something 
 */
function learn(something) {
	console.log(something)
}

/**
 * 调用回调函数
 * 
 * @param {Function} callback 
 * @param {string} something 
 */
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