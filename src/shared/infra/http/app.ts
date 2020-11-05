import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import http from 'http';
import cors from 'cors';

import '@shared/infra/typeorm';
import '@shared/container';
import AppError from '../errors/AppErros';
import routes from './routes';

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(routes);
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      code: err.statusCode,
    });
  }
  return response
    .status(500)
    .json({ status: 'error', massage: err.message, code: 500 });
});

export default server;
