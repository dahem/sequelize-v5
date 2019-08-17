import models from 'db/models';
import baseController from 'controllers/util/baseController';

const { Task } = models;

export default {
  ...baseController(Task),
};
