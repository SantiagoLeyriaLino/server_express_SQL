const {Router} = require('express')
const getCourseHandler = require ('./handlers/getCoursesHandler')
const postCoursesHandler = require('./handlers/postCoursesHandler')
const deleteCourseHandler = require('./handlers/deleteCourseHandler')
const putCourseHandler = require('./handlers/putCourseHandler')

const api = Router()

api.get("/", getCourseHandler)

api.post("/",postCoursesHandler)

api.delete("/:id", deleteCourseHandler)

api.put("/:id", putCourseHandler)

module.exports = api