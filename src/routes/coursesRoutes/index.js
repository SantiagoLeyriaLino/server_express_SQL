const {Router} = require('express')
const getCourseHandler = require ('./handlers/getCoursesHandler')
const postCoursesHandler = require('./handlers/postCoursesHandler')

const api = Router()

api.get("/", getCourseHandler)

api.post("/",postCoursesHandler)

module.exports = api