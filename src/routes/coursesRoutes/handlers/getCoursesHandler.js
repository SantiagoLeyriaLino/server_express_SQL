const getCoursesController = require('../controllers/getCoursesController')

const getCourseHandler = async(req,res) =>{
    try{
        const {name} = req.query
        const data = await getCoursesController(name)
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = getCourseHandler