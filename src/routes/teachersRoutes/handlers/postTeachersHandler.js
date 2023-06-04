const postTeachersController = require('../controllers/postTeachersController')

const postTeachersHandler = async(req,res) =>{
    try{
        const dataTeacher = req.body;
        if (!dataTeacher.name||!dataTeacher.edad){
            throw new Error('Campos insufucientes')
        }
        else{
            const teacher = await postTeachersController(dataTeacher);
            res.status(200).json(teacher)
        }
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = postTeachersHandler