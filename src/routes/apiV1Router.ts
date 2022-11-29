import express from 'express';

import functionsRouter from './functionsRouter';

const apiV1Router = express.Router();

apiV1Router.use(functionsRouter);

export default apiV1Router;
