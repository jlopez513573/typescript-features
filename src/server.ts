import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application } from 'express';

import mainRouter from './routes/mainRouter';

dotenv.config();

const createServer = (): Application => {
  const app: Application = express();

  app.use(cors({ origin: '*' }));
  app.use(cookieParser());
  app.use(mainRouter);

  return app;
};

export default createServer;
