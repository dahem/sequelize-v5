import express from 'express';
import * as controller from 'controllers/user';
import { addBasicRouters } from 'helpers/routerHelper';
import models from 'db/models';

const router = express.Router();
const { User } = models;

addBasicRouters(router, controller, User);

export default router;
