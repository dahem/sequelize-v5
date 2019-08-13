import express from 'express';
import * as controller from 'controllers/client';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const users = await controller.getAll();
    return res.status(200).send(users);
  } catch (e) {
    return next(e);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await controller.getById(id);
    return res.status(200).send(user);
  } catch (e) {
    return next(e);
  }
});

router.post('/', async (req, res, next) => {
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
