const router = require("express").Router();
const ProjectEmployeeController = require("./project-employee.controllers.js");


router.get("/", async (req, res) => {
  const allprojects = await ProjectEmployeeController.getAllProjectsData();
  res.json(allprojects);
});

router.post("/", (req, res) => {
  res.status(200).json(ProjectEmployeeController.assignProjectToEmployee(req.body));
});

router.put("/:id", (req, res) => {
  const created = ProjectEmployeeController.changeProjectStatus(req.params.id, req.body);
  res.json({
    "Data" : "updated successfully"
  });
});

// router.delete("/:id", (req, res) => {
//   const created = ProjectEmployeeController.deleteProject(req.params.id);
//   res.json(created);
// });

module.exports = router;