const Department = require("./department.model.js");

const getAllDepartments = async () => {
  return await Department.find();
}

const addNewDepartment = (data) => {
  return Department.create(data);
}

const updateDepartment = async (id, data) => {
  return await Department.findOneAndUpdate({ _id: id }, data, { new: true });
}

const deleteDepartment = async (id) => {
  return await Department.findByIdAndDelete(id);
}

module.exports = {
  getAllDepartments,
  addNewDepartment,
  updateDepartment,
  deleteDepartment
}