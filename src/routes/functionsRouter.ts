import express from 'express';

import functionsController from '../controllers/functionsController';

const functionsRouter = express.Router();

functionsRouter.get('/getPatient/:patientId', functionsController.getPatient);
functionsRouter.get('/getPatients', functionsController.getPatients);
functionsRouter.get('/getMalePatients', functionsController.getMalePatients);
functionsRouter.get('/getFemalePatients', functionsController.getFemalePatients);

export default functionsRouter;
