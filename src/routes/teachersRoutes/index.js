const {Router} = require('express');
const postTeachersHandler = require('./handlers/postTeachersHandler')
const getTeachersHandler = require('./handlers/getTeachersHandler')

const api = Router();

api.get("/", getTeachersHandler)

api.post("/", postTeachersHandler);

module.exports = api;