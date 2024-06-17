const ProjectEmployee = require("./project-employee.model");

/**
 * 
 * assign a project to a certain employee
 * accept-decline project
 * 
 */

const getAllProjectsData = async () => {
  return await ProjectEmployee.find().sort({ createdAt: -1 });
}

const assignProjectToEmployee = (data) => {
  return ProjectEmployee.create(data);
}

const changeProjectStatus = async (id, data) => {
  return await ProjectEmployee.findOneAndUpdate({ _id: id }, data, { new: true });
}

// const deleteProject = async (id) => {
//   return await ProjectEmployee.findByIdAndDelete(id);
// }

module.exports = {
  getAllProjectsData,
  assignProjectToEmployee,
  changeProjectStatus,
  // deleteProject
}