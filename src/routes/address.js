import express from 'express';
import controller from 'controllers/address';
import addBasicRouters from 'routes/util/addBasicRouters';
import models from 'db/models';

const router = express.Router();
const { Address } = models;

addBasicRouters(router, controller, Address);

export default router;
