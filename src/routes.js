const router = require("express").Router();

router.use('/departments', require("./modules/department/department.routes"));
router.use('/projects', require("./modules/project/project.routes"));

module.exports = router;