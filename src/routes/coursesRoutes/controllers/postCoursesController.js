const { Course, Teacher } = require('../../../db/db');

const postCoursesController = async(courseData) =>{
    const course = {
        name:courseData.name
    };
    
    const createCourse = await Course.create(course);

    if(courseData.teacher){
        let teacher = courseData.teacher;
        const newCourse = await createCourse.addTeacher(teacher);
        return newCourse; 
    }
    else if(courseData.teachers){
        let teachers = courseData.teachers;
        const newCourse = await createCourse.addTeachers(teachers);
        return newCourse
    }
    else{
        return createCourse;
    }
}

module.exports = postCoursesController