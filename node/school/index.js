var class01 = require('./class')

class01.add('teacher02',['student01','student02'])

exports.add = function(classes) {
	classes.forEach(function(item, index) {
		//var classI = item
		var teacherName = item.teacherName
		var students = item.students
		class01.add(teacherName,students)
	})
}