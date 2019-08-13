import express from 'express';
import * as controller from 'controllers/address';
import { addBasicRouters } from 'helpers/routerHelper';
import models from 'db/models';

const router = express.Router();
const { Address } = models;

addBasicRouters(router, controller, Address);

export default router;
