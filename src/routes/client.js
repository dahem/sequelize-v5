import express from 'express';
import * as controller from 'controllers/client';
import addBasicRouters from 'routes/util/addBasicRouters';
import models from 'db/models';

const router = express.Router();
const { Client } = models;

addBasicRouters(router, controller, Client);

export default router;
