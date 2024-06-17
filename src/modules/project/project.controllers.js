import Project from './project.model.js';
import asyncHandler from '../../../lib/asyncHandler.js';
import CustomError from '../../../lib/customError.js';

export  const createProject = asyncHandler(async (req, res) => {
    const projectData = req.body;
    const newProject = await Project.create(projectData);
    res.status(201).json(newProject);
  });


  export const getAllProjects = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10 } = req.query; 
    const skip = (page - 1) * limit;
  
    const projects = await Project.find()
                                  .skip(skip)
                                  .limit(limit)
                                  .sort({ name: 1 });
    const totalProjects = await Project.countDocuments();
  
    res.json({
      projects,
      totalPages: Math.ceil(totalProjects / limit),
      currentPage: page
    });
  });

  export const getProjectById = asyncHandler(async (req, res) => {
    const { projectId } = req.params;
    const project = await Project.findById(projectId);
    
    if (!project) {
      throw new CustomError('Project not found', 404);
    }
  
    res.json(project);
  });

  export const updateProject = asyncHandler(async (req, res) => {
    const { projectId } = req.params;
    const updatedFields = req.body;
    const updatedProject = await Project.findByIdAndUpdate(projectId, updatedFields, { new: true });
  
    if (!updatedProject) {
      throw new CustomError('Project not found', 404);
    }
  
    res.json(updatedProject);
  });
  
  export const deleteProject = asyncHandler(async (req, res) => {
    const { projectId } = req.params;
    const deletedProject = await Project.findByIdAndDelete(projectId);
  
    if (!deletedProject) {
      throw new CustomError('Project not found', 404);
    }
  
    res.json({ message: 'Project deleted successfully' });
  });