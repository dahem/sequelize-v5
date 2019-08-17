import models from 'db/models';
import baseController from 'controllers/util/baseController';

const { Product } = models;

export default {
  ...baseController(Product),
};
