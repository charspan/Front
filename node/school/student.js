function add(student){
	console.log('Add student:' + student);
}

function print(words){
	console.log('Add words:' + words);
}

exports.add = add

exports.p = print

// exports.公开方法名称=内部方法名称