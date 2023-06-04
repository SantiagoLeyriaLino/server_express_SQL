const getTeachersController = require('../controllers/getTeachersController')

const getTeachersHandler = async(req,res) =>{
    try{
        const {name} = req.query
        const data = await getTeachersController(name);
        res.status(200).json(data)
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = getTeachersHandler