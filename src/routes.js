const router = require("express").Router();

router.use('/departments', require("./modules/department/department.routes"));
router.use('/projects', require("./modules/project/project.routes"));
router.use('/project-employee', require("./modules/project-employee/project-employee.routes"));

module.exports = router;