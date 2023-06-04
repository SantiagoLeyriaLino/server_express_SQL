const postCoursesController = require('../controllers/postCoursesController')

const postCoursesHandler = async(req,res) =>{
    try{
        const courseData = req.body;
        const data = await postCoursesController(courseData)
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = postCoursesHandler