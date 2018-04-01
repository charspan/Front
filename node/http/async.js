// <script src='a.js'></script>
// 浏览器端的js是单线程的
// var i = 0
// while(true) {
// 	i++
// }

var c = 0

function printIt() {
	console.log(c)
}

function puls(callback) {
	// c += 1
	// setTimeoit(function() {
	// 	c += 1
	// }, 1000)
	setTimeout(function() {
		c += 1
		callback(c)
	}, 1000)
}

puls(printIt)

// printIt()
