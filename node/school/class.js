var student = require('./student') 
var teacher = require('./teacher') 

//teacher.add("teacher01")

function add(teacherName, students) {
	teacher.add(teacherName)
	student.p(teacherName)
	students.forEach(function(item, index) {
		student.add(item)
	})
}

exports.add = add

//module.exports = add