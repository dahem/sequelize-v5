import models from 'db/models';
import baseController from 'controllers/util/baseController';

const { User } = models;

export default {
  ...baseController(User),
};
