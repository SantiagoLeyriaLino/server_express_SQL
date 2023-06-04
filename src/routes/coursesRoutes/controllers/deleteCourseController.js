const {Course} = require('../../../db/db')

const deleteCourseController = async(id) =>{
    const courseDeleted = await Course.findOne({
        where:{
            id:id
        }
    })
    if(courseDeleted){
        await courseDeleted.destroy()
        return ({
            message:'CURSO ELIMINADO',
            course: courseDeleted
        })
    }
    else{
        return ('Curso No Encontrado')
    }
}

module.exports = deleteCourseController