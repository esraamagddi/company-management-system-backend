const Project = require("./project.model.js");

const getAllProjects = async () => {
  return await Project.find().sort({ createdAt: -1 });
}

const addNewProject = (data) => {
  return Project.create(data);
}

const updateProject = async (id, data) => {
  return await Project.findOneAndUpdate({ _id: id }, data, { new: true });
}

const deleteProject = async (id) => {
  return await Project.findByIdAndDelete(id);
}

module.exports = {
  getAllProjects,
  addNewProject,
  updateProject,
  deleteProject
}