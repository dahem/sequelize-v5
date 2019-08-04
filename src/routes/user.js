import express from 'express';
import * as controller from 'controllers/user';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const tasks = await controller.getAll();
    return res.status(200).send(tasks);
  } catch (e) {
    return next(e);
  }
});

export default router;
