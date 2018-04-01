// nodejs 体会上下文this: 上下文运行对象会动态改变

// 情况1
var pet = {
    words: '...',
    speak: function() {
        console.log(this.words)
        console.log(this === pet)
    }
}

pet.speak()

// 情况2
function pet1(words) {
    this.words = words
    console.log(this.words)
    // 这里的this指向nodejs顶层的global，类似window
    console.log(this === global)
}

pet1('...')

// 情况3
function Pet2(words) {
    this.words = words
    this.speak = function() {
        console.log(this.words)
        // 构造函数内this指向新构建的对象
        console.log(this)
    }
}

// 构造函数内this指向新构建的对象
var cat = new Pet2('Miao')

cat.speak()
