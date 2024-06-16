const router = require("express").Router();
const ProjectController = require("./project.controllers.js");

router.get("/", async (req, res) => {
  const allprojects = await ProjectController.getAllProjects();
  res.json(allprojects);
});

router.post("/", (req, res) => {
  res.status(201).json(ProjectController.addNewProject(req.body));
});

router.put("/:id", (req, res) => {
  const created = ProjectController.updateProject(req.params.id, req.body);
  res.json(created);
});

router.delete("/:id", (req, res) => {
  const created = ProjectController.deleteProject(req.params.id);
  res.json(created);
});

module.exports = router;