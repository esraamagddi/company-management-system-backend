const router = require("express").Router();

router.use('/departments', require("./modules/department/department.routes"));

module.exports = router;