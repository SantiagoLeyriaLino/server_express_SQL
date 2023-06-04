const {Course, Teacher} = require('../../../db/db');
const {Op} = require('sequelize')

const getCoursesController = async(name) =>{
    if(!name){
        const courses = await Course.findAll({
            include: {
                model: Teacher,
                as:'Teachers',
            },
        })
        return courses;
    }
    else{
        const course = await Course.findAll({
            where: {name:{[Op.iLike]:`%${name}`}},
            include: {
                model: Teacher,
                as:'Teachers',
            },
        })
        return course;
    }
}

module.exports = getCoursesController