import morgan from 'morgan';
import cors from 'cors';
import express, { NextFunction } from 'express';
import { robotRouter } from './router/robots.js';

export const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/robot', robotRouter);
app.use(
    (
        error: Error,
        req: express.Request,
        resp: express.Response,
        next: NextFunction
    ) => {
        req;
        next;
        console.log(error.message);
        resp.status(400), resp.end(JSON.stringify({ error: error.message }));
    }
);
