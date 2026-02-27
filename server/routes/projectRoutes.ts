import express from 'express';
import { createProject, createVideo, deleteProject, getAllPublicProjects } from '../controllers/projectController.js';
import { protect } from '../middlewares/auth.js';
import upload from '../configs/multer.js';

const projectRouter=express.Router();

projectRouter.post('/create',protect,upload.array('images',2) ,createProject)
projectRouter.post('/video',protect, createVideo)
projectRouter.get('/published',getAllPublicProjects)
projectRouter.post('/:projectId',protect, deleteProject)


export default projectRouter
