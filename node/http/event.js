// nodejs是非阻塞 单线程 事件驱动的

/**
 * 点击事件
 * 
 * @param {MouseEvent} e 
 */
function clickIt(e) {
	window.alert('Button is clicked')
}

// 根据id获取一个按钮对象
var button = document.getElementById('#button')

// 当按钮被点击处罚clickIt事件（注册回调）
button.addEventListener('click', clickIt)

// eventEmitter

// eventLoop
