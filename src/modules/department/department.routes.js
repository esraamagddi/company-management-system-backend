const router = require("express").Router();
const DepartmentController = require("./department.controllers.js");

router.get("/", async (req, res) => {
  const allDepartments = await DepartmentController.getAllDepartments();
  res.json(allDepartments);
});

router.post("/", (req, res) => {
  const created = DepartmentController.addNewDepartment(req.body);
  res.json(created);
});

router.put("/:id", (req, res) => {
  const created = DepartmentController.updateDepartment(req.params.id, req.body);
  res.json(created);
});

router.delete("/:id", (req, res) => {
  const created = DepartmentController.deleteDepartment(req.params.id);
  res.json(created);
});

module.exports = router;