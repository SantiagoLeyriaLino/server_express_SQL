const {Teacher} = require('../../../db/db')

const postTeachersController = async(dataTeacher) =>{
    const teacher = await Teacher.create(dataTeacher)
    return teacher
}

module.exports = postTeachersController