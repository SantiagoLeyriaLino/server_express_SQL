const { Course } = require('../../../db/db');

const putCourseController = async (data, id) => {
  try {
    let courseUpdate = await Course.findOne({
      where: { id: id }
    });

    let courseInfo = {};

    for (let prop in data) {
      if (prop == 'teacher') {
        await courseUpdate.addTeacher(data.teacher);
      }
      if (prop == 'teachers') {
        await courseUpdate.addTeachers(data.teachers);
      }
      else {
        courseInfo = {
          ...courseInfo,
          [prop]: data[prop]
        };
      }
    }

    await courseUpdate.update(courseInfo);

    return courseUpdate;
  } catch (error) {
    console.error('Error al actualizar el curso:', error);
    return 'ERROR AL ACTUALIZAR EL CURSO';
  }
};

module.exports = putCourseController;