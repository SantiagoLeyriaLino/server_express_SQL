const {Router} = require('express');
const courseRoutes = require('./coursesRoutes/index')
const teacherRoutes = require('./teachersRoutes/index')



const router = Router();

router.use("/courses",courseRoutes);

// router.use("/students", studentsRoutes);

router.use("/teachers", teacherRoutes);

module.exports = router