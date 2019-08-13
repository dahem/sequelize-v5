import express from 'express';
import * as controller from 'controllers/client';
import { addBasicRouters } from 'helpers/routerHelper';
import models from 'db/models';

const router = express.Router();
const { Client } = models;

addBasicRouters(router, controller, Client);

export default router;
