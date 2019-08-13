import express from 'express';
import * as controller from 'controllers/user';
import models from 'db/models';

const { body, sanitizeParam, param } = require('express-validator');

const router = express.Router();
const { User } = models;

router.get('/', async (req, res, next) => {
  try {
    const users = await controller.getAll();
    return res.status(200).send(users);
  } catch (e) {
    return next(e);
  }
});

router.get(
  '/:id(\\d+)/',
  [sanitizeParam('id').toInt(), param('id').custom(id => User.verifyPk(id))],
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await controller.getById(id);
      return res.status(200).send(user);
    } catch (e) {
      return next(e);
    }
  },
);

router.post('/', [body().custom(values => User.validate(values))], async (req, res, next) => {
  try {
    const user = await controller.create(req.body);
    return res.status(200).send(user);
  } catch (e) {
    return next(e);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const user = await controller.update(req.params.id, req.body);
    return res.status(200).send(user);
  } catch (e) {
    return next(e);
  }
});

export default router;
