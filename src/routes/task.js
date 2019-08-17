import express from 'express';
import controller from 'controllers/task';
import addBasicRouters from 'routes/util/addBasicRouters';
import models from 'db/models';

const router = express.Router();
const { Task } = models;

addBasicRouters(router, controller, Task, { method: ['getAll'] });
export default router;
