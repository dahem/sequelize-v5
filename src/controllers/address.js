import models from 'db/models';
import baseController from 'controllers/util/baseController';

const { Address } = models;

export default {
  ...baseController(Address),
};
