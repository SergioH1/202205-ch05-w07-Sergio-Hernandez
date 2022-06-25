import morgan from 'morgan';
import cors from 'cors';
import express from 'express';
import { robotRouter } from './router/robots.js';

export const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/robot', robotRouter);
