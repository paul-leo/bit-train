import express from 'express';
import ServiceController from './controllers/ServiceController.js';
import serviceRegistry from './serviceRegistry.js';
const router = express.Router();
serviceRegistry.initializeServices();
router.all('/:serviceName/:methodName', ServiceController.handleRequest);

export default router;