const putCourseController = require('../controllers/putCourseController')

const putCourseHandler = async(req,res) =>{
    try{
        let {id} = req.params
        const data = req.body;
        const courseUpgrade = await putCourseController(data, id)
        res.status(200).json(courseUpgrade)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = putCourseHandler