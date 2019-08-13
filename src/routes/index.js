import express from 'express';
import user from './user';
import task from './task';
import address from './address';
import client from './client';

const router = express.Router();
router.use('/tasks', task);
router.use('/users', user);
router.use('/addresses', address);
router.use('/clients', client);

export default router;
