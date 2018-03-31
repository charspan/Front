// 引入学生模块
var student = require('./student') 
// 引入老师模块
var teacher = require('./teacher') 

/**
 * 模拟添加班级信息
 * 
 * @param {string} teacherName 老师名
 * @param {array} students 学生数组
 */
function add(teacherName, students) {
	teacher.add(teacherName)
	student.print(teacherName)
	students.forEach(function(item, index) {
		student.add(item)
	})
}

exports.add = add

// module.exports = add // 特殊的模块
