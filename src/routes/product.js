import express from 'express';
import controller from 'controllers/product';
import addBasicRouters from 'routes/util/addBasicRouters';
import models from 'db/models';

const router = express.Router();
const { Product } = models;

addBasicRouters(router, controller, Product);

export default router;
