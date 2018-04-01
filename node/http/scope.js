// nodejs 全局变量和局部变量 体会它们的作用域
var globalVariable = 'this is a global variable'

/**
 * 全局方法
 */
function globalFunction() {
    var localVariable = 'this is a local variable'

    console.log('Visit global/local variable')
    console.log(globalVariable)
    console.log(localVariable)

    globalVariable = 'this is a changed global variable'

    /**
     * 局部方法
     */
    function localFunction() {
        var innerLocalVariable = 'this is an inner local variable'
        
        console.log('Visit global/local/innerLocal variable')
        console.log(globalVariable)
        console.log(localVariable)
        console.log(innerLocalVariable)
    }

    localFunction()
}

globalFunction()
