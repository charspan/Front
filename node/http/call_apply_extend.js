function Pet(words) {
    this.words = words
    this.speak = function() {
        console.log(this.words)
    }
}

// 通过call实现继承
// 让它先天有speak能力
function Dog(words) {
    Pet.call(this, words)
    // Pet.apply(this, arguments)
}

var dog = new Dog('Wang')

dog.speak()
