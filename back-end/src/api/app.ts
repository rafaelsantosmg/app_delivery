import 'reflect-metadata';
import express from 'express';
import router from '../Router';
import ErrorHandler from '../errors/ErrorHandler';

const app = express();

app.use(express.json());
app.use(router);

app.use(ErrorHandler);

export default app;
