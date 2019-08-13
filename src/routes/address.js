import express from 'express';
import * as controller from 'controllers/address';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const addresses = await controller.getAll();
    return res.status(200).send(addresses);
  } catch (e) {
    return next(e);
  }
});

export default router;
