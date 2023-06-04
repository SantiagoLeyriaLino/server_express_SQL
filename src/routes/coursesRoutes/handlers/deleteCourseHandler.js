const deleteCourseController = require('../controllers/deleteCourseController')

const deleteCourseHandler = async(req,res) =>{
    try{
        const {id} = req.params;
        const data = await deleteCourseController(id);
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = deleteCourseHandler