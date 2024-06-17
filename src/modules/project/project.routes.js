import express from 'express';
import * as projectController from './project.controllers.js';

const router = express.Router();
router.post('/', projectController.createProject);


export default router;
