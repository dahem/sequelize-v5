import express from 'express';
import controller from 'controllers/user';
import addBasicRouters from 'routes/util/addBasicRouters';
import models from 'db/models';

const router = express.Router();
const { User } = models;

addBasicRouters(router, controller, User);

export default router;
