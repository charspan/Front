/**
 * 模拟添加一个学生
 * 
 * @param {*} student 学生名 这里为了模拟方便，只传入学生名
 */
function add(student){
	console.log('Add student:' + student);
}

/**
 * 模拟打印老师名称
 * 
 * @param {string} teacherName 老师名称
 */
function print(teacherName){
	console.log('Add words:' + words);
}

// 公开方法
exports.add = add
exports.print = print
// exports.公开方法名称=内部方法名称
