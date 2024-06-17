import express from 'express';
import projectRoutes from './modules/project/project.routes.js';

const router = express.Router();
router.use('/projects', projectRoutes);

export default router;
