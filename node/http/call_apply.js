// nodejs 通过call aply修改执行上下文
var pet = {
    words: '...',
    speak: function(say) {
        console.log(say + ' ' +this.words)
        // console.log(this === pet)
    }
}

pet.speak('Speak')

var dog = {
    words: 'wang'
}

// 通过call改变执行上下文，将pet.speak的this指向了dog
// 后天赋予dog对象speak方法
pet.speak.call(dog, 'Speak')


