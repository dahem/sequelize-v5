import models from 'db/models';
import baseController from 'controllers/util/baseController';

const { Client } = models;

export default {
  ...baseController(Client),
};
