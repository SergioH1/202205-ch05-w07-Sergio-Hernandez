import morgan from 'morgan';

import express from 'express';
import { robotRouter } from './router/robots.js';

export const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/robot', robotRouter);
