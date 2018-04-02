var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()
// 每个事件最大监听事件数量
life.setMaxListeners(11)
// addEventListener
life.on('one', function(who) {
    console.log(who + 'to do 1')
})

life.on('one', function(who) {
    console.log(who + 'to do 2')
})

life.on('one', function(who) {
    console.log(who + 'to do 3')
})

life.on('one', function(who) {
    console.log(who + 'to do 4')
})

life.on('one', function(who) {
    console.log(who + 'to do 5')
})

life.on('one', function(who) {
    console.log(who + 'to do 6')
})

life.on('one', function(who) {
    console.log(who + 'to do 7')
})

life.on('one', function(who) {
    console.log(who + 'to do 8')
})

life.on('one', function(who) {
    console.log(who + 'to do 9')
})

life.on('one', function(who) {
    console.log(who + 'to do 10')
})

life.on('one', function(who) {
    console.log(who + 'to do 11')
})

life.on('two', function(who) {
    console.log( who + 'to do two 1')
})

function two2(who) {
    console.log( who + 'to do two 2')
}

life.on('two', two2)

// 无法移除匿名函数
life.removeListener('two', function(who) {
    console.log( who + 'to do two 1')
})

// 可以移除具名函数
life.removeListener('two', two2)

// 判断某个事件是否被监听
var hasOneListened = life.emit('one', 'one')
var hasTwoListened = life.emit('two', 'two')

console.log( life.listeners('two').length)
console.log(life.listenerCount('one'))
console.log(EventEmitter.listenerCount(life, 'one'))

// 移除所有one所有的监听函数
life.removeAllListeners('one')
// 移除所有事件
life.removeAllListeners()

// var hasThreeListened = life.emit('three', 'three')
// console.log(hasOneListened)
// console.log(hasTwoListened)
// console.log(hasThreeListened)
