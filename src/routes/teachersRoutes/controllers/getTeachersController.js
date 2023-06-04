const {Teacher,Course} = require('../../../db/db')
const {Op} = require('sequelize')

const getTeachersController = async(name) =>{
    if(name){
        const teachers = await Teacher.findAll({
            where:{name:{[Op.iLike]:`%${name}`}},
            include: {
                model:Course,
                as:'Course'
            }
        })
        return teachers
    }
    else{
        const teachers = await Teacher.findAll({
            include:{
                model: Course,
                as:'Course'
            }
        })
        return teachers
    }
}

module.exports = getTeachersController