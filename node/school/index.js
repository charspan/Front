// 引入班级模块
var class01 = require('./class')

// 添加一个班级
class01.add('teacher02',['student01','student02'])

// 直接导出某个方法
exports.add = function(classes) { // 添加多个班级
	classes.forEach(function(item, index) {
		//var classI = item
		var teacherName = item.teacherName
		var students = item.students
		class01.add(teacherName, students)
	})
}
